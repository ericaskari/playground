import { S3Client } from '@aws-sdk/client-s3';
import { EnvironmentService } from './environment.service';
export declare class S3Service {
    private environmentService;
    private s3ClientConfig;
    private readonly s3client;
    constructor(environmentService: EnvironmentService);
    get s3Client(): S3Client;
}
