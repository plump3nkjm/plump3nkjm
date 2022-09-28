class BaseError extends Error {
    constructor(e: string) {
        super(e);
        this.name = new.target.name // newで呼び出された時にその名前を代入
    }
}

export class NetworkError extends BaseError {}
export class NotFoundError extends BaseError {}
export class InternalServerError extends BaseError {}
