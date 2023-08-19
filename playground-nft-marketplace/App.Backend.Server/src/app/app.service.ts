import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";

@Injectable()
export class AppService {
    constructor(private httpService: HttpService) {

    }

    getData(): { message: string } {
        return { message: 'Welcome to App.Backend.Server!' };
    }

}
