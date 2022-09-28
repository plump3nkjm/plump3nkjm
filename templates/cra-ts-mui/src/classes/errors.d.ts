declare class BaseError extends Error {
    constructor(e: string);
}
export declare class NetworkError extends BaseError {
}
export declare class NotFoundError extends BaseError {
}
export declare class InternalServerError extends BaseError {
}
export {};
