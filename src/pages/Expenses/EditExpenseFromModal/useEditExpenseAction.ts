import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { ExpenseTypeResponse } from "../../../state/expense/types";
import { type AppDispatch, type RootState } from "../../../state/store";
import type { EditExpensePayload } from ".";
import { editExpense } from "../../../state/expense/editExpense";


const useEditExpenseAction = ({ expense }: { expense?: EditExpensePayload }) => {

    const stateExpenseTypes: ExpenseTypeResponse[] = useSelector((state: RootState) => state.expense.types || []);
    const stateExpenseEdited: boolean = useSelector((state: RootState) => state.expense.expense_edited || false);
    const stateExpenseEditLoading: boolean = useSelector((state: RootState) => state.expense.edit_expense_loading || false);

    const dispatch = useDispatch<AppDispatch>()
    const [form, setForm] = useState<EditExpensePayload>({
        _id: "",
        title: "",
        amount: "",
        description: "",
        expenseType: stateExpenseTypes[0]._id || "",
        date: new Date() as Date | null
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (expense) {
            setForm({
                _id: expense._id || "",
                title: expense.title || "",
                amount: expense.amount || "",
                description: expense.description || "",
                expenseType: expense.expenseType || stateExpenseTypes[0]._id || "",
                date: expense.date ? new Date(expense.date) : new Date() as Date | null
            });
        }
    }, [expense]);

    /**
     * The useEffect hook checks if an expense has been added successfully, and if so, it resets the
     * form state and clears any error messages.
     */
    useEffect(() => {
        if (stateExpenseEdited) {
            setForm({
                _id: "",
                title: "",
                amount: "",
                description: "",
                expenseType: stateExpenseTypes[0]._id || "",
                date: new Date() as Date | null,
            });
            setError(null);
        }
    }, [stateExpenseEditLoading]);

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
        const { _id, title, amount, description, expenseType, date } = form;

        if (!title || !amount || !description || !expenseType || !date) {
            setError("Please fill in all fields.");
            return;
        }

        const expenseData = {
            _id,
            title,
            amount,
            description,
            expenseType,
            date
        };

        dispatch(editExpense(expenseData));
    };

    return { stateExpenseTypes, stateExpenseEdited, stateExpenseEditLoading, form, error, onChange, onClickAddExpense, onChangeEventDate };
}

export default useEditExpenseAction;