import { plainToClass, Transform, Type } from 'class-transformer';
import { IsDate, IsNumber, IsObject, IsString, IsUUID } from 'class-validator';
import { randomUUID } from 'crypto';

export class UploadModel {
    @IsUUID()
    id: string = randomUUID();

    @IsDate()
    @Transform(({ value }) => new Date(value))
    createdAt: Date = new Date();

    @IsDate()
    @Transform(({ value }) => new Date(value))
    updatedAt: Date = new Date();

    @IsUUID()
    fileId!: string;

    @IsString()
    originalName!: string;

    @IsString()
    mimeType!: string;

    @IsNumber()
    size: number = 0;

    public static fromRequest(model: Partial<UploadModel>): UploadModel {
        return plainToClass(UploadModel, model, { exposeDefaultValues: true, strategy: 'exposeAll' });
    }
}
