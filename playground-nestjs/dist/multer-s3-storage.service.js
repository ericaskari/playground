"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterS3StorageService = void 0;
const common_1 = require("@nestjs/common");
const s3_service_1 = require("./s3.service");
const crypto_1 = require("crypto");
const environment_service_1 = require("./environment.service");
let MulterS3StorageService = class MulterS3StorageService {
    constructor(s3Service, environmentService) {
        this.s3Service = s3Service;
        this.environmentService = environmentService;
    }
    createMulterOptions() {
        return {
            storage: new S3Storage({
                s3: this.s3Service.s3Client,
                metadata: function (req, file, cb) {
                    cb(null, file);
                },
                key: function (req, file, cb) {
                    cb(null, (0, crypto_1.randomUUID)());
                },
                bucket: this.environmentService.variables.APP_S3_BUCKET_NAME,
            }),
        };
    }
};
MulterS3StorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [s3_service_1.S3Service, environment_service_1.EnvironmentService])
], MulterS3StorageService);
exports.MulterS3StorageService = MulterS3StorageService;
//# sourceMappingURL=multer-s3-storage.service.js.map