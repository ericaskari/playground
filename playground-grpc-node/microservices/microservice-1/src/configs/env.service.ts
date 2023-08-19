import dotenv from 'dotenv';
import { Service } from 'typedi';
dotenv.config();

@Service()
export class EnvService {
  constructor() {
    this.configSSLVariables();
    this.configLocalServerVariables();
  }
  USE_SSL: boolean;
  SSL_KEY: string;
  SSL_CERT: string;

  SERVER_ADDRESS: string;
  FRONTEND_ADDRESS: string;
  PORT: number;

  PRODUCTION: boolean;

  private configSSLVariables = (): void => {
    this.USE_SSL = process.env.USE_SSL === 'true';
    this.SSL_KEY = process.env.SSL_KEY ? process.env.SSL_KEY : 'certificates/localhost.key';
    this.SSL_CERT = process.env.SSL_CERT ? process.env.SSL_CERT : 'certificates/localhost.cert';
  };
  private configLocalServerVariables = (): void => {
    this.SERVER_ADDRESS = process.env.SERVER_ADDRESS ? process.env.SERVER_ADDRESS : '0.0.0.0';
    this.PORT = process.env.PORT ? parseInt(process.env.PORT, 10) || 8000 : 8000;
    this.PRODUCTION = process.env.PRODUCTION === 'true';
    this.FRONTEND_ADDRESS = process.env.FRONTEND_ADDRESS ? process.env.FRONTEND_ADDRESS : 'localhost';
  };

  getServerAddress = (): string => {
    return `${this.USE_SSL ? 'https://' : 'http://'}${process.env.SERVER_ADDRESS}:${this.PORT}`;
  };
}
