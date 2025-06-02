import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../state/store";
import type { ExpenseResponse, ExpenseTypeResponse, FilterExpenseResponse } from "../../state/expense/types";
import { getFilteredExpense } from "../../state/expense/filterExpenseHistory";
import type { EditExpensePayload } from "./EditExpenseFromModal";
import { deleteExpense } from "../../state/expense/deleteExpense";
import { getExpenseStats } from "../../state/expense/getExpenseStats";

const useExpenseAction = () => {
    const stateExpenseTypes: ExpenseTypeResponse[] = useSelector((state: RootState) => state.expense.types || []);
    const stateFilteredExpense: FilterExpenseResponse[] = useSelector((state: RootState) => Array.isArray(state.expense?.filtered_expense) ? state.expense.filtered_expense : []);
    const stateFilterExpenseLoading: boolean = useSelector((state: RootState) => state.expense.loading_filter || false);
    const stateExpenseAdded: boolean = useSelector((state: RootState) => state.expense.expense_added || false);
    const stateExpenseEdited: boolean = useSelector((state: RootState) => state.expense.expense_edited || false);
    const stateExpenseDeleted: boolean = useSelector((state: RootState) => state.expense.expense_deleted || false);

    const [isOpenAddFrom, setIsOpenAddFrom] = useState<boolean>(false);
    const [isOpenEditFrom, setIsOpenEditFrom] = useState<boolean>(false);
    const [form, setForm] = useState<{
        startDate: Date | null;
        endDate: Date | null;
        expenseType: string;
    }>({
        startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        expenseType: ""
    });
    const [editingExpense, setEditingExpense] = useState<EditExpensePayload>({    
        _id: "",
        title: "",
        amount: "",
        description: "",
        expenseType: "",
        date: new Date() as Date | null,
    });
    const [deletingExpenseId, setDeletingExpenseId] = useState<string>("");


    const expenseIcons = [
        { name: "FOOD", icon: "🍔" },
        { name: "TRAVELING", icon: "🚗" },
        { name: "ENTERTAINMENT", icon: "⚽" },
        { name: "FITNESS", icon: "🏋️" },
        { name: "ROOM", icon: "🏠" },
        { name: "OTHER", icon: "📦" }
    ];

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (form.startDate !== null && form.endDate !== null) {
            if (stateFilteredExpense.length === 0) {
                onClickApplyFilters();
            }
        }
    }, [form])

    /* load added data successfull message */
    useEffect(() => {
        if (stateExpenseAdded || stateExpenseEdited || stateExpenseDeleted) {
            setForm({
                startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
                expenseType: ""
            });
            dispatch(getFilteredExpense({
                startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
                expenseType: ""
            }));
            dispatch(getExpenseStats());
        }
    }, [stateExpenseAdded, stateExpenseEdited, stateExpenseDeleted])

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
     * The `onChangeStartDate` function updates the `startDate` property in the form state with the
     * provided date value.
     * */
    const onChangeStartDate = (date: Date | null) => {
        setForm((prev) => ({
            ...prev,
            startDate: date
        }));
    }

    /**
     * The `onChangeEndDate` function updates the `startDate` field in a form object with the provided
     * date value.*/
    const onChangeEndDate = (date: Date | null) => {
        setForm((prev) => ({
            ...prev,
            endDate: date
        }));
    }

    const onClickApplyFilters = () => {
        dispatch(getFilteredExpense({
            startDate: form.startDate,
            endDate: form.endDate,
            expenseType: form.expenseType
        }));
    }

    const getIconByName = (name: string): string | undefined => {
        const iconEntry = expenseIcons.find((icon) => icon.name === name);
        return iconEntry?.icon;
    };

    const onClickEdit = (expense: ExpenseResponse) => {
        setEditingExpense({
            _id: expense._id,
            title: expense.title,
            amount: expense.amount.toString(),
            description: expense.description || "",
            expenseType: expense.expenseType._id,
            date: new Date(expense.date)
        })
        setIsOpenEditFrom(true);
    };

    const onClickDelete = (id:string) => {
        setDeletingExpenseId(id);
    };

    const onCancelDelete = () => {
        setDeletingExpenseId("");
    };

    const onConfirmDelete = () => {
        if (deletingExpenseId) {
            dispatch(deleteExpense({ id: deletingExpenseId }));
            setDeletingExpenseId("");
        }
    };

    return {
        stateExpenseTypes, stateFilterExpenseLoading, stateFilteredExpense, form, isOpenAddFrom, isOpenEditFrom, editingExpense, deletingExpenseId,
        setIsOpenEditFrom, getIconByName, setIsOpenAddFrom, onChange, onChangeStartDate, onChangeEndDate, onClickApplyFilters, onClickEdit,
        onClickDelete, onCancelDelete, onConfirmDelete
    };
}

export default useExpenseAction;