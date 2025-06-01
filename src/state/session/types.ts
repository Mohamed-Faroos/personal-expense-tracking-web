export interface SessionState {
    user?: {
        userId?: string;
        email?: string;
        firstName?: string;
        lastName?: string;
        accessToken?: string;
    };
    loading?: boolean;
    error?: string | null;
    isUnauthorized?: boolean;
}

export const USER_LOGIN: string = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS: string = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR: string = 'USER_LOGIN_ERROR';

export const UNAUTHORIZED_ERROR_FOUND: string = 'UNAUTHORIZED_ERROR_FOUND';
export const UNAUTHORIZED_ERROR_CLEAR: string = 'UNAUTHORIZED_ERROR_CLEAR';

export const RESET_STATE: string = 'RESET_STATE';
