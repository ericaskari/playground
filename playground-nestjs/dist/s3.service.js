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
exports.S3Service = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const common_1 = require("@nestjs/common");
const environment_service_1 = require("./environment.service");
let S3Service = class S3Service {
    constructor(environmentService) {
        this.environmentService = environmentService;
        this.s3ClientConfig = {
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
        this.s3client = new client_s3_1.S3Client(Object.assign({ region: 'eu-west-1' }, (this.environmentService.isLocalDevelopment ? this.s3ClientConfig : {})));
    }
    get s3Client() {
        return this.s3client;
    }
};
S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService])
], S3Service);
exports.S3Service = S3Service;
//# sourceMappingURL=s3.service.js.map