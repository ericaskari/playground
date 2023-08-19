import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import { S3Service } from './s3.service';
import { EnvironmentService } from './environment.service';
export declare class MulterS3StorageService implements MulterOptionsFactory {
    private s3Service;
    private environmentService;
    constructor(s3Service: S3Service, environmentService: EnvironmentService);
    createMulterOptions(): MulterModuleOptions;
}
