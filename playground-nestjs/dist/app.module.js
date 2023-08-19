"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const platform_express_1 = require("@nestjs/platform-express");
const s3_service_1 = require("./s3.service");
const environment_service_1 = require("./environment.service");
const multer_s3_storage_service_1 = require("./multer-s3-storage.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.registerAsync({
                useExisting: multer_s3_storage_service_1.MulterS3StorageService,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, s3_service_1.S3Service, multer_s3_storage_service_1.MulterS3StorageService, environment_service_1.EnvironmentService],
        exports: [s3_service_1.S3Service],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map