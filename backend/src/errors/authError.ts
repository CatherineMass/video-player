import { BaseError } from './baseError';

class AuthenticationError extends BaseError {
    constructor() {
        super(401, 'Not authorized.');
    }
}

const createAuthError = () => {
    return new AuthenticationError();
};

export { createAuthError, AuthenticationError };
