import { StorageEngine } from 'multer';
import { Request } from 'express';
declare global {
    namespace Express {
        namespace MulterS3 {
            interface File extends Multer.File {
                bucket: string;
                key: string;
                acl: string;
                contentType: string;
                contentDisposition: null;
                storageClass: string;
                serverSideEncryption: null;
                metadata: any;
                location: string;
                etag: string;
            }
        }
    }
}
export declare class S3Storage implements StorageEngine {
    private opts;
    s3: any;
    getBucket: (req: any, file: any, cb: any) => void;
    getKey: any;
    getAcl: (req: any, file: any, cb: any) => void;
    getContentType: (req: any, file: any, cb: any) => void;
    getMetadata: any;
    getCacheControl: (req: any, file: any, cb: any) => void;
    getContentDisposition: (req: any, file: any, cb: any) => void;
    getContentEncoding: (req: any, file: any, cb: any) => void;
    getStorageClass: (req: any, file: any, cb: any) => void;
    getSSE: (req: any, file: any, cb: any) => void;
    getSSEKMS: (req: any, file: any, cb: any) => void;
    constructor(opts: any);
    _handleFile(req: Request, file: Express.Multer.File, cb: (error?: any, info?: Partial<Express.Multer.File>) => void): void;
    _removeFile(req: any, file: any, cb: any): void;
}
