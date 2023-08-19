import { S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import { S3ClientConfig } from '@aws-sdk/client-s3/dist-types/S3Client';

@Injectable()
export class S3Service {
    private s3ClientConfig: S3ClientConfig = {
        region: 'eu-west-1',
        forcePathStyle: true,
        endpoint: {
            protocol: 'http',
            port: 9000,
            hostname: 'localhost',
            url: new URL('http://localhost:9000'),
            path: '/',
        },
        credentials: {
            accessKeyId: 'playground-nestjs',
            secretAccessKey: 'Password0!',
        },
    };

    private readonly s3client = new S3Client({
        region: 'eu-west-1',
        ...(this.environmentService.isLocalDevelopment ? this.s3ClientConfig : {}),
    });

    constructor(private environmentService: EnvironmentService) {}

    public get s3Client() {
        return this.s3client;
    }
    // async init(): Promise<void> {
    //     const bucketExists = await this.bucketExists();
    //
    //     if (!bucketExists && this.environmentService.isLocalDevelopment) {
    //         await this.client.createBucket({ Bucket: this.Bucket }).promise();
    //     }
    // }

    // private async bucketExists(): Promise<boolean> {
    //     try {
    //         await this.client.getBucketAcl({ Bucket: this.Bucket }).promise();
    //         return true;
    //     } catch (e: any) {
    //         if (e && e.code === 'NoSuchBucket') {
    //             return false;
    //         }
    //
    //         throw new Error(e);
    //     }
    // }

    // async uploadToS3(dbUpload: UploadModel, file: Express.Multer.File): Promise<string> {
    //     const { mimetype, originalname, buffer, size } = file;
    //
    //     const data: PutObjectRequest = {
    //         Key: dbUpload.id,
    //         Bucket: this.Bucket,
    //         Body: buffer,
    //         ContentEncoding: 'base64',
    //         ContentType: mimetype,
    //         Metadata: { mimetype, originalname, size: String(size) },
    //         Tagging: '',
    //     };
    //
    //     await this.client.putObject(data).promise();
    //
    //     return data.Key;
    // }

    // public streamFromS3(key: string, res: Response): void {
    //     const options: S3.Types.GetObjectRequest = {
    //         Bucket: this.Bucket,
    //         Key: key,
    //     };
    //
    //     const picStream = this.client.getObject(options).createReadStream();
    //
    //     picStream.on('error', (err: AWSError) => {
    //         console.log('picStream err', err);
    //         picStream.removeAllListeners();
    //
    //         if (err.statusCode === 404) {
    //             res.status(404).send();
    //         } else {
    //             res.status(500).send('UNKNOWN_ERROR');
    //         }
    //     });
    //     picStream.on('end', () => {
    //         picStream.removeAllListeners();
    //     });
    //
    //     picStream.pipe(res);
    //
    //     return;
    // }
}
