import axiosClient from '../index';

export interface ExpenseFilterPayload {
    startDate: Date | null;
    endDate: Date | null;
    category: string;
};

export const getExpenseStatsApi = async () => {
    const response = await axiosClient.get('/expense/stats');
    return response;
};

export const getExpenseTypesApi = async () => {
    const response = await axiosClient.get('/expense-type/all');
    return response;
};

export const getExpenseFilterApi = async (payload:ExpenseFilterPayload) => {
    const response = await axiosClient.post('/expense/filter', {
        startDate: payload.startDate,
        endDate: payload.endDate,
        category: payload.category
    });
    return response;
};