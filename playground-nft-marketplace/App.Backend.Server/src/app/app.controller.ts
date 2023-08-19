import { Controller, Get, OnApplicationBootstrap, } from '@nestjs/common';
import { LoggerService } from "./logger.service";
import { catchError, map } from "rxjs/operators";
import { HttpService } from "@nestjs/axios";
import { of } from "rxjs";


@Controller()
export class AppController implements OnApplicationBootstrap {
    constructor(private logger: LoggerService, private httpService: HttpService) {
        this.logger.setContext(AppController.name);
    }

    @Get('/healthcheck')
    getData() {
        return {};
    }

    @Get('/version')
    getVersion() {
        return this.httpService.get<Record<string, string>>('http://localhost/assets/app-version.json').pipe(
            map(obj => obj.data),
            map(obj => obj.version),
            catchError(err => of('unknown'))
        );
    }

    onApplicationBootstrap(): void {
        this.httpService.get<Record<string, string>>('http://localhost/assets/app-version.json').pipe(
            map(obj => obj.data),
            map(obj => obj.version),
            catchError(err => of('unknown'))
        ).subscribe(version => {
            this.logger.verbose(version);
        });
    }
}
