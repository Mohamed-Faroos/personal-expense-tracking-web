import type { AnyAction } from 'redux-saga';
import { GET_EXPENSE_STATS, GET_EXPENSE_STATS_SUCCESS, GET_EXPENSE_STATS_ERROR, type ExpenseState, GET_EXPENSE_TYPES, GET_EXPENSE_TYPES_SUCCESS, GET_EXPENSE_TYPES_ERROR, GET_FILTER_EXPENSE, GET_FILTER_EXPENSE_SUCCESS, GET_FILTER_EXPENSE_ERROR, ADD_EXPENSE, ADD_EXPENSE_SUCCESS, ADD_EXPENSE_ERROR, ADD_EXPENSE_CLEAR, EDIT_EXPENSE, EDIT_EXPENSE_SUCCESS, EDIT_EXPENSE_ERROR, EDIT_EXPENSE_CLEAR } from './types';

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
	expense_added: false,
	add_expense_loading: false,
	add_expense_error: null,
	expense_edited: false,
	edit_expense_loading: false,
	edit_expense_error: null,
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
		case ADD_EXPENSE:
			return { ...state, add_expense_loading: true, add_expense_error: null };
		case ADD_EXPENSE_SUCCESS:
			return { ...state, expense_added: true, add_expense_loading: false, add_expense_error: null };
		case ADD_EXPENSE_ERROR:
			return { ...state, add_expense_loading: false, add_expense_error: action.payload };
		case ADD_EXPENSE_CLEAR:
			return { ...state, add_expense_loading: false, add_expense_error: null, expense_added: false };
		case EDIT_EXPENSE:
			return { ...state, add_expense_loading: true, add_expense_error: null };
		case EDIT_EXPENSE_SUCCESS:
			return { ...state, expense_edited: true, edit_expense_loading: false, edit_expense_error: null };
		case EDIT_EXPENSE_ERROR:
			return { ...state, edit_expense_loading: false, edit_expense_error: action.payload };
		case EDIT_EXPENSE_CLEAR:
			return { ...state, edit_expense_loading: false, edit_expense_error: null, expense_edited: false };
		default:
			return state;
	}
};

export default expenseReducer;
