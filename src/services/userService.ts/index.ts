import type { LoginRequestType, SignUpRequestType } from '../../contants/types/user';
import axiosClient from '../index';

export const loginApi = async (payload: LoginRequestType) => {
    const response = await axiosClient.post('/auth/login', {
        email: payload.email,
        password: payload.password,
    });
    return response;
};

export const registerApi = async (payload: SignUpRequestType) => {
    const response = await axiosClient.post('/auth/register', {
        email: payload.email,
        password: payload.password,
        firstName: payload.fistName,
        lastName: payload.lastName,
    });
    return response;
};