import { BaseError } from './baseError';

class NotFoundError extends BaseError {
    propertyName: string;

    constructor(propertyName: string) {
        super(404, `${propertyName} not found.`);

        this.propertyName = propertyName;
    }
}

const createNotFoundError = (propertyName: string) => {
    return new NotFoundError(propertyName);
};

export { createNotFoundError, NotFoundError };