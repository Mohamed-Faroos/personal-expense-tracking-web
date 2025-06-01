import type { AnyAction } from 'redux-saga';
import { GET_EXPENSE_STATS, GET_EXPENSE_STATS_SUCCESS, GET_EXPENSE_STATS_ERROR, type ExpenseState, GET_EXPENSE_TYPES, GET_EXPENSE_TYPES_SUCCESS, GET_EXPENSE_TYPES_ERROR, GET_FILTER_EXPENSE, GET_FILTER_EXPENSE_SUCCESS, GET_FILTER_EXPENSE_ERROR } from './types';

const initialState: ExpenseState = {
	stats: {},
	types: [],
	filtered_expense: undefined,
	loading: false,
	error: null,
	loading_types: false,
	types_error: null,
	loading_filter: false,
	filter_error: null,
};

const expenseReducer = (state = initialState, action: AnyAction): ExpenseState => {
	switch (action.type) {
		case GET_EXPENSE_STATS:
			return { ...state, loading: true, error: null };
		case GET_EXPENSE_STATS_SUCCESS:
			return { ...state, stats: action.payload, loading: false, error: null };
		case GET_EXPENSE_STATS_ERROR:
			return { ...state, loading: false, error: action.payload };
		case GET_EXPENSE_TYPES:
			return { ...state, loading_types: true, types_error: null };
		case GET_EXPENSE_TYPES_SUCCESS:
			return { ...state, types: action.payload, loading_types: false, types_error: null };
		case GET_EXPENSE_TYPES_ERROR:
			return { ...state, loading_types: false, types_error: action.payload };
		case GET_FILTER_EXPENSE:
			return { ...state, loading_filter: true, filter_error: null };
		case GET_FILTER_EXPENSE_SUCCESS:
			return { ...state, filtered_expense: action.payload, loading_filter: false, filter_error: null };
		case GET_FILTER_EXPENSE_ERROR:
			return { ...state, loading_filter: false, filter_error: action.payload };
		default:
			return state;
	}
};

export default expenseReducer;
