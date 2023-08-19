import { Injectable } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import { S3Service } from './s3.service';
import { randomUUID } from 'crypto';
import { EnvironmentService } from './environment.service';

@Injectable()
export class MulterS3StorageService implements MulterOptionsFactory {
    constructor(private s3Service: S3Service, private environmentService: EnvironmentService) {}

    createMulterOptions(): MulterModuleOptions {
        return {
            storage: new S3Storage({
                s3: this.s3Service.s3Client,
                metadata: function (req, file, cb) {
                    cb(null, file);
                },
                key: function (req, file, cb) {
                    cb(null, randomUUID());
                },
                bucket: this.environmentService.variables.APP_S3_BUCKET_NAME,
            }),
        };
    }
}
