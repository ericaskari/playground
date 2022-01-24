import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';

import { LoggerHelper } from '../helpers/logger.helper';

import { Result } from './result.handler';

interface ErrorHandlerMiddleWare {
  (err: unknown, req: Request, res: Response, next: NextFunction): void;
}

@Service()
export class ApiErrorHandler {
  constructor(private loggerHelper: LoggerHelper) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  apiErrorHandler: ErrorHandlerMiddleWare = (err, req, res, next): void => {
    console.log(err);
    if (err instanceof Result) {
      if (err.error instanceof ApiError) {
        this.loggerHelper.logRed('Handled Error Happened');
        res.status(err.error.code).json({
          message: err.error.message,
          description: err.error.description
        });
        return;
      }
    }
    this.loggerHelper.logRed('Unhandled Error Happened', true, true);
    res.status(500).json('something went wrong');
  };
}

export class ApiError {
  constructor(public code: number, public message: string, public description: { [reason: string]: string }) {}

  static badRequest(message = 'Bad Request', description?: { [reason: string]: string }): ApiError {
    return new ApiError(400, message, description);
  }
}
export interface DomainError {
  message: string;
  error?: any;
}
/**
 * @desc General application errors (few of these as possible)
 * @http 500
 */

export namespace AppError {
  export class UnexpectedError extends Result<DomainError> {
    public constructor(err: any) {
      super(false, {
        message: `An unexpected error occurred.`,
        error: err
      });
    }

    public static create(err: any): UnexpectedError {
      return new UnexpectedError(err);
    }
  }
}
