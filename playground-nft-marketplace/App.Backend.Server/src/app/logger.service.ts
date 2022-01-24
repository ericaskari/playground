import { Injectable, Scope } from '@nestjs/common';
import { Logger } from '@nestjs/common/services/logger.service';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends Logger {
    constructor() {
        super();
    }

    debug(message: any, context?: string): any {
        super.debug(message, context);
    }
}
