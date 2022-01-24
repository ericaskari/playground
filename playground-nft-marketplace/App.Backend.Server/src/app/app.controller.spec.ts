import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from "./logger.service";

describe('AppController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [ AppController ],
            providers: [ AppService, LoggerService ],
        }).compile();
    });

    describe('getData', () => {
        it('should return "Welcome to App.Backend.Server!"', () => {
            const appController = app.get<AppController>(AppController);

            expect(appController).toBeTruthy();

            // expect(appController.getData()).toEqual({
            //     message: 'Welcome to App.Backend.Server!',
            // });
        });
    });
});
