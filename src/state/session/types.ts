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
}

export const USER_LOGIN: string = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS: string = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR: string = 'USER_LOGIN_ERROR';
