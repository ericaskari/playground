import { HttpModule, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from "./logger.service";

@Module({
    imports: [ HttpModule ],
    controllers: [ AppController ],
    providers: [ AppService, LoggerService ],
})
export class AppModule {
}
