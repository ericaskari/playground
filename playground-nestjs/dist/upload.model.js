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
exports.UploadModel = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const crypto_1 = require("crypto");
class UploadModel {
    constructor() {
        this.id = (0, crypto_1.randomUUID)();
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.size = 0;
    }
    static fromRequest(model) {
        return (0, class_transformer_1.plainToClass)(UploadModel, model, { exposeDefaultValues: true, strategy: 'exposeAll' });
    }
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UploadModel.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", Date)
], UploadModel.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", Date)
], UploadModel.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UploadModel.prototype, "fileId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadModel.prototype, "originalName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadModel.prototype, "mimeType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UploadModel.prototype, "size", void 0);
exports.UploadModel = UploadModel;
//# sourceMappingURL=upload.model.js.map