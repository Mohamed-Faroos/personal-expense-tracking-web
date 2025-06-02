export interface SignUpState {
    success?: boolean;
    loading?: boolean;
    error?: string | null;
}

export const USER_SIGN_UP: string = 'USER_SIGN_UP';
export const USER_SIGN_UP_SUCCESS: string = 'USER_SIGN_UP_SUCCESS';
export const USER_SIGN_UP_ERROR: string = 'USER_SIGN_UP_ERROR';
export const USER_SIGN_UP_CLEAR: string = 'USER_SIGN_UP_CLEAR';

