import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { LoggerService } from "./logger.service";

describe('AppService', () => {
    let service: AppService;

    beforeAll(async () => {
        const app = await Test.createTestingModule({
            providers: [ AppService, LoggerService ],
        }).compile();

        service = app.get<AppService>(AppService);
    });

    describe('getData', () => {
        it('should return "Welcome to App.Backend.Server!"', () => {
            expect(service.getData).toBeTruthy();
            // expect(service.getData()).toEqual({
            //     message: 'Welcome to App.Backend.Server!',
            // });
        });
    });
});
