import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { S3Service } from './s3.service';
import { EnvironmentService } from './environment.service';
import { MulterS3StorageService } from './multer-s3-storage.service';

@Module({
    imports: [
        MulterModule.registerAsync({
            useExisting: MulterS3StorageService,
        }),
    ],
    controllers: [AppController],
    providers: [AppService, S3Service, MulterS3StorageService, EnvironmentService],
    exports: [S3Service],
})
export class AppModule {}
