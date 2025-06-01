import axiosClient from '../index';

export const getExpenseStatsApi = async () => {
    const response = await axiosClient.get('/expense/stats');
    return response;
};

export const getExpenseTypesApi = async () => {
    const response = await axiosClient.get('/expense-type/all');
    return response;
};