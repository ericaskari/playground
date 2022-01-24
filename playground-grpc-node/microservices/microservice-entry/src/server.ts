import { Service } from 'typedi';

import http from 'http';
import https from 'https';

import { AppService } from './app';
import { EnvService } from './configs/env.service';
import { ServerSslConfigurationService } from './configs/server-ssl.configuration';
import { LoggerHelper } from './helpers/logger.helper';

@Service()
export class Server {
  constructor(
    private envService: EnvService,
    private appService: AppService,
    private loggerHelper: LoggerHelper,
    private serverSslConfigurationService: ServerSslConfigurationService
  ) {}

  start = async (): Promise<void> => {
    try {
      await this.preScript();
      await this.listen();
      await this.postScript();
    } catch (e) {
      this.loggerHelper.logRed('Error happened in Server Initialization', true, true);
      console.log(e);
    }
  };

  private listen = async (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      try {
        this.loggerHelper.logWhite('Running     Server ✅');
        const server = this.envService.USE_SSL ? https : http;
        server
          .createServer(this.serverSslConfigurationService.getServerOptions, this.appService.app)
          .listen(this.envService.PORT, () => {
            this.loggerHelper.logCyan(`Address     ${this.envService.getServerAddress()}`);
            this.loggerHelper.logCyan(`Environment ${this.envService.PRODUCTION ? 'Production' : 'Development'}`);

            resolve();
          });
      } catch (e) {
        reject(e);
      }
    });
  };

  private preScript = async () => {
    this.loggerHelper.logWhite('Running     Pre Scripts');
  };
  private postScript = async () => {
    this.loggerHelper.logWhite('Running     Post Scripts');
  };
}
