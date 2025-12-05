import { Error } from "./error";

export class Result<TValue = void> {
    public readonly isSuccess: boolean;
    public readonly isFailure: boolean;

    public readonly error: Error;
    public readonly value?: TValue;

    private constructor(isSuccess: boolean, value?: TValue, error: Error = Error.None) {
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;

        this.error = error;
        this.value = value;
    }

    public static success<TValue>(value: TValue): Result<TValue> {
        return new Result<TValue>(true, value, Error.None);
    }

    public static failure<TValue>(error: Error): Result<TValue> {
        return new Result<TValue>(false, undefined, error);
    }
}
