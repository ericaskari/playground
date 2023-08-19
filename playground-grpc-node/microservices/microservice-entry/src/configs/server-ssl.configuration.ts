import { Service } from 'typedi';

import { LoggerHelper } from '../helpers/logger.helper';
import fs from 'fs';
import https from 'https';

import { EnvService } from './env.service';

interface SslConfig {
  prod: boolean;
  enable: boolean;
  keyPath: string;
  certPath: string;
  httpModeOnFail: boolean;
}
@Service()
export class ServerSslConfigurationService {
  private sslConfiguration: SslConfig = {
    prod: this.envService.PRODUCTION,
    enable: this.envService.USE_SSL,
    keyPath: this.envService.SSL_KEY,
    certPath: this.envService.SSL_CERT,
    httpModeOnFail: true
  };

  constructor(private loggerHelper: LoggerHelper, private envService: EnvService) {}

  get getServerOptions(): https.ServerOptions {
    if (!this.sslConfiguration.enable) {
      return {};
    }
    const keyPath = this.sslConfiguration.keyPath;
    const certPath = this.sslConfiguration.certPath;

    const keyExist = fs.existsSync(keyPath);
    const certExist = fs.existsSync(certPath);
    if (!keyExist && this.sslConfiguration.enable) {
      this.loggerHelper.logRed(`Key  not found: ${keyPath}`);
    }
    if (!certExist && this.sslConfiguration.enable) {
      this.loggerHelper.logRed(`Cert not found: ${certPath}`);
    }
    if ((!keyExist || !certExist) && !this.sslConfiguration.httpModeOnFail) {
      console.log({ certPath, keyPath });
      console.log('We Can not find certificate/key');
      process.exit(1);
    }
    try {
      const loadedKey = fs.readFileSync(keyPath);
      const loadedCert = fs.readFileSync(certPath);
      this.loggerHelper.logGreen('SSL         ACTIVE 👮‍️');
      return {
        key: loadedKey,
        cert: loadedCert
      };
    } catch (e) {
      if (keyExist && certExist) {
        this.loggerHelper.logRed('Error while loading existing certificate/key');
      }
      console.log(Object.keys(e));
      console.log(Object.values(e));
      process.exit(1);
    }
  }
}
