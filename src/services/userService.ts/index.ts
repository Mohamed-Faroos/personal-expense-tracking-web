import type { LoginRequestType } from '../../lib/types/user';
import axiosClient from '../index';

export const loginApi = async (payload: LoginRequestType) => {
    const response = await axiosClient.post('/auth/login', {
        email: payload.email,
        password: payload.password,
    });
    return response;
};