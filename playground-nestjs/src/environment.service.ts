import { cleanEnv, str } from 'envalid';
import { Injectable, Logger } from '@nestjs/common';
import { config as dotenvConfig } from 'dotenv';

@Injectable()
export class EnvironmentService {
    private logger = new Logger('EnvironmentService');
    private static instance: EnvironmentService | null = null;

    private static spec = {
        NODE_ENV: str({ devDefault: 'development', choices: ['test', 'development', 'production'] }),
        APP_S3_BUCKET_NAME: str({
            devDefault: 'bucket1',
            default: 'bucket1',
        }),
        APP_S3_BUCKET_REGION: str({ devDefault: 'eu-west-1', default: 'eu-west-1' }),
        APP_S3_BUCKET_DIRECTORY: str({ devDefault: 'local', default: 'production' }),
    };

    constructor() {
        console.log('NODE_ENV: ', process.env.NODE_ENV);
        dotenvConfig();
    }

    public init(): void {
        const allowedKeys = Object.keys(EnvironmentService.spec);
        const appEnvs = Object.entries(process.env)
            .filter(([key]) => key.startsWith('APP_'))
            .map(([key]) => key)
            .filter((key) => !allowedKeys.includes(key));

        for (const appEnv of appEnvs) {
            this.logger.warn(`environment variable "${appEnv}" is not in use. please remove.`);
        }
    }

    public readonly variables = cleanEnv(process.env, EnvironmentService.spec);

    public static get getInstance(): EnvironmentService {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new EnvironmentService();
        return this.instance;
    }

    public get isLocalDevelopment(): boolean {
        return this.variables.NODE_ENV === 'development';
    }

    public get isProduction(): boolean {
        return this.variables.NODE_ENV === 'production';
    }
}
