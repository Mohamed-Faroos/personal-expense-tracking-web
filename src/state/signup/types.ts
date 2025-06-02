import type { SignUpRequestType } from "../../contants/types/user";

export const USER_SIGN_UP: string = 'USER_SIGN_UP';
export const USER_SIGN_UP_SUCCESS: string = 'USER_SIGN_UP_SUCCESS';
export const USER_SIGN_UP_ERROR: string = 'USER_SIGN_UP_ERROR';
export const USER_SIGN_UP_CLEAR: string = 'USER_SIGN_UP_CLEAR';

export interface SignUpState {
    success?: boolean;
    loading?: boolean;
    error?: string | null;
}

export interface UserSignupAction {
    type: typeof USER_SIGN_UP;
    payload: SignUpRequestType;
}