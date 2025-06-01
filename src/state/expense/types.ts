export interface ExpenseDataset {
    data?: number[];
    backgroundColor?: string[];
}

export interface ExpenseDataSetGroup {
    labels?: string[];
    datasets?: ExpenseDataset[];
}

export interface ExpenseStatsResponse {
    currentMonthExpense?: ExpenseDataSetGroup;
    previousMonthExpense?: ExpenseDataSetGroup;
    currentYearExpense?: ExpenseDataSetGroup;
    currentMonthTotal?: number;
    currentYearTotal?: number;
}

export interface ExpenseTypeResponse {
    _id: string;
    label: string;
    name: string;
}

export interface ExpenseState {
    stats?: ExpenseStatsResponse;
    types?: ExpenseTypeResponse[];
    loading?: boolean;
    error?: string | null;
    loading_types?: boolean,
	types_error?: string | null;
}

export const GET_EXPENSE_STATS: string = 'GET_EXPENSE_STATS';
export const GET_EXPENSE_STATS_SUCCESS: string = 'GET_EXPENSE_STATS_SUCCESS';
export const GET_EXPENSE_STATS_ERROR: string = 'GET_EXPENSE_STATS_ERROR';

export const GET_EXPENSE_TYPES: string = 'GET_EXPENSE_TYPES';
export const GET_EXPENSE_TYPES_SUCCESS: string = 'GET_EXPENSE_TYPES_SUCCESS';
export const GET_EXPENSE_TYPES_ERROR: string = 'GET_EXPENSE_TYPES_ERROR';