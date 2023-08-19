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
var EnvironmentService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentService = void 0;
const envalid_1 = require("envalid");
const common_1 = require("@nestjs/common");
const dotenv_1 = require("dotenv");
let EnvironmentService = EnvironmentService_1 = class EnvironmentService {
    constructor() {
        this.logger = new common_1.Logger('EnvironmentService');
        this.variables = (0, envalid_1.cleanEnv)(process.env, EnvironmentService_1.spec);
        console.log('NODE_ENV: ', process.env.NODE_ENV);
        (0, dotenv_1.config)();
    }
    init() {
        const allowedKeys = Object.keys(EnvironmentService_1.spec);
        const appEnvs = Object.entries(process.env)
            .filter(([key]) => key.startsWith('APP_'))
            .map(([key]) => key)
            .filter((key) => !allowedKeys.includes(key));
        for (const appEnv of appEnvs) {
            this.logger.warn(`environment variable "${appEnv}" is not in use. please remove.`);
        }
    }
    static get getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new EnvironmentService_1();
        return this.instance;
    }
    get isLocalDevelopment() {
        return this.variables.NODE_ENV === 'development';
    }
    get isProduction() {
        return this.variables.NODE_ENV === 'production';
    }
};
EnvironmentService.instance = null;
EnvironmentService.spec = {
    NODE_ENV: (0, envalid_1.str)({ devDefault: 'development', choices: ['test', 'development', 'production'] }),
    APP_S3_BUCKET_NAME: (0, envalid_1.str)({
        devDefault: 'bucket1',
        default: 'bucket1',
    }),
    APP_S3_BUCKET_REGION: (0, envalid_1.str)({ devDefault: 'eu-west-1', default: 'eu-west-1' }),
    APP_S3_BUCKET_DIRECTORY: (0, envalid_1.str)({ devDefault: 'local', default: 'production' }),
};
EnvironmentService = EnvironmentService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EnvironmentService);
exports.EnvironmentService = EnvironmentService;
//# sourceMappingURL=environment.service.js.map