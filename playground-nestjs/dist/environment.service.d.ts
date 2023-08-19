export declare class EnvironmentService {
    private logger;
    private static instance;
    private static spec;
    constructor();
    init(): void;
    readonly variables: Readonly<{
        NODE_ENV: "development" | "test" | "production";
        APP_S3_BUCKET_NAME: string;
        APP_S3_BUCKET_REGION: string;
        APP_S3_BUCKET_DIRECTORY: string;
    } & import("envalid").CleanedEnvAccessors>;
    static get getInstance(): EnvironmentService;
    get isLocalDevelopment(): boolean;
    get isProduction(): boolean;
}
