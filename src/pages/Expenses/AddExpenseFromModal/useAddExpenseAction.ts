import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { ExpenseTypeResponse } from "../../../state/expense/types";
import { type AppDispatch, type RootState } from "../../../state/store";
import { addExpense } from "../../../state/expense/addExpense";
import type { ExpenseAddPayload } from "../../../services/expenseService.ts";

const useAddExpenseAction = () => {

    const stateExpenseTypes: ExpenseTypeResponse[] = useSelector((state: RootState) => state.expense.types || []);
    const stateExpenseAdded: boolean = useSelector((state: RootState) => state.expense.expense_added || false);
    const stateExpenseAddLoading: boolean = useSelector((state: RootState) => state.expense.add_expense_loading || false);

    const dispatch = useDispatch<AppDispatch>()

    const [form, setForm] = useState<ExpenseAddPayload>({
        title: "",
        amount: "",
        description: "",
        expenseType: stateExpenseTypes[0]._id || "",
        date: new Date() as Date | null,
    });
    const [error, setError] = useState<string | null>(null);

    /**
     * The useEffect hook checks if an expense has been added successfully, and if so, it resets the
     * form state and clears any error messages.
     */
    useEffect(() => {
        if (stateExpenseAdded) {
            setForm({
                title: "",
                amount: "",
                description: "",
                expenseType: stateExpenseTypes[0]._id || "",
                date: new Date() as Date | null,
            });
            setError(null);
        }
    }, [stateExpenseAdded]);

    /**
     * The onChange function updates the form state with the new value based on the input element's
     * name.
     */
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    /**
     * The `onChangeEventDate` function updates the date value in a form state object.
     */
    const onChangeEventDate = (date: Date | null) => {
        setForm((prev) => ({
            ...prev,
            date: date
        }));
    }

    const onClickAddExpense = () => {
        const { title, amount, description, expenseType, date } = form;
        
        if (!title || !amount || !description || !expenseType || !date) {
            setError("Please fill in all fields.");
            return;
        }

        const expenseData = {
            title,
            amount,
            description,
            expenseType,
            date
        };

        dispatch(addExpense(expenseData));
    };

    return { stateExpenseTypes, stateExpenseAdded, stateExpenseAddLoading, form, error, onChange, onClickAddExpense, onChangeEventDate };
}

export default useAddExpenseAction;