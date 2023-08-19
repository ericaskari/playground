//  INFO: https://khalilstemmler.com/articles/enterprise-typescript-nodejs/handling-errors-result-class/
//  INFO: https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/
export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: T;
  private readonly _value: T;

  public constructor(isSuccess: boolean, error?: T, value?: T) {
    if (isSuccess && error) {
      throw new Error(`InvalidOperation: A result cannot be
        successful and contain an error`);
    }
    if (!isSuccess && !error) {
      throw new Error(`InvalidOperation: A failing result
        needs to contain an error message`);
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this._value = value;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      return this.error;
    }

    return this._value;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, null, value);
  }

  public static fail<U>(error: any): Result<U> {
    return new Result<U>(false, error);
  }
}
