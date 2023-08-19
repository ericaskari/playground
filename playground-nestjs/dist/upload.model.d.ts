export declare class UploadModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    fileId: string;
    originalName: string;
    mimeType: string;
    size: number;
    static fromRequest(model: Partial<UploadModel>): UploadModel;
}
