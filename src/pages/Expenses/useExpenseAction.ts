import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../state/store";
import type { ExpenseTypeResponse, FilterExpenseResponse } from "../../state/expense/types";
import { getFilteredExpense } from "../../state/expense/filterExpenseHistory";

const useExpenseAction = () => {
    const stateExpenseTypes: ExpenseTypeResponse[] = useSelector((state: RootState) => state.expense.types || []);
    const stateFilteredExpense: FilterExpenseResponse[] = useSelector((state: RootState) => Array.isArray(state.expense?.filtered_expense) ? state.expense.filtered_expense : []);
    const stateFilterExpenseLoading: boolean = useSelector((state: RootState) => state.expense.loading_filter || false);


    const [isOpenAddFrom, setIsOpenAddFrom] = useState<boolean>(false);
    const [form, setForm] = useState<{
        startDate: Date | null;
        endDate: Date | null;
        category: string;
    }>({
        startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        category: ""
    });

    const expenseIcons = [
        { name: "FOOD", icon: "🍔" },
        { name: "TRAVELING", icon: "🚗" },
        { name: "SHOPPING", icon: "🛍️" },
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
            category: form.category
        }));
    }

    const getIconByName = (name: string): string | undefined => {
        const iconEntry = expenseIcons.find((icon) => icon.name === name);
        return iconEntry?.icon;
    };

    return {
        stateExpenseTypes, stateFilterExpenseLoading, stateFilteredExpense, form, isOpenAddFrom, getIconByName,
        setIsOpenAddFrom, onChange, onChangeStartDate, onChangeEndDate, onClickApplyFilters
    };
}

export default useExpenseAction;