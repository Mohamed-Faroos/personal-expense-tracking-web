import type { EditExpensePayload } from '../../pages/Expenses/EditExpenseFromModal';
import axiosClient from '../index';

export interface ExpenseFilterPayload {
    startDate: Date | null;
    endDate: Date | null;
    expenseType: string;
};

export interface ExpenseAddPayload {
    title: string;
    amount: string;
    description: string;
    expenseType: string;
    date: Date | null;
};

export interface DeleteExpensePayload {
    id: string;
}

export const getExpenseStatsApi = async () => {
    const response = await axiosClient.get('/expense/stats');
    return response;
};

export const getExpenseTypesApi = async () => {
    const response = await axiosClient.get('/expense-type/all');
    return response;
};

export const getExpenseFilterApi = async (payload: ExpenseFilterPayload) => {
    const response = await axiosClient.post('/expense/filter', {
        startDate: payload.startDate,
        endDate: payload.endDate,
        expenseType: payload.expenseType
    });
    return response;
};

export const addExpenseApi = async (payload: ExpenseAddPayload) => {
    const response = await axiosClient.post('/expense/add', {
        title: payload.title,
        amount: payload.amount,
        description: payload.description,
        expenseType: payload.expenseType,
        date: payload.date
    });
    return response;
};

export const editExpenseApi = async (payload: EditExpensePayload) => {
    const response = await axiosClient.put('/expense/edit/' + payload._id, {
        title: payload.title,
        amount: payload.amount,
        description: payload.description,
        expenseType: payload.expenseType,
        date: payload.date
    });
    return response;
};

export const deleteExpenseApi = async (payload: DeleteExpensePayload) => {
    const response = await axiosClient.delete('/expense/delete/' + payload.id);
    return response;
};