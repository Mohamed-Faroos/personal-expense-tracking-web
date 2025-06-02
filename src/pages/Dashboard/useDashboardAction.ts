import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getExpenseStats } from "../../state/expense/getExpenseStats";
import type { RootState } from "../../state/store";
import type { ExpenseState } from "../../state/expense/types";
import { getExpenseTypes } from "../../state/expense/getExpenseTypes";

const useDashboardAction = () => {
    const stateExpense: ExpenseState = useSelector((state: RootState) => state.expense);
    const dispatch = useDispatch();

    /* In this case, it is being used to dispatch actions to fetch expense statistics and
    expense types when the component mounts. */
    useEffect(() => {
        dispatch(getExpenseStats());
        if (stateExpense.types && stateExpense.types.length === 0) {
            dispatch(getExpenseTypes());
        }

    }, []);

    return { stateExpense }
}

export default useDashboardAction;