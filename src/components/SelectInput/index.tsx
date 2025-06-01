import React from 'react';
import type { ExpenseTypeResponse } from '../../state/expense/types';

interface SelectInputProps {
    label: string;
    value: string | null;
    name?: string;
    isRequired: boolean;
    options?: ExpenseTypeResponse[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectInput: React.FC<SelectInputProps> = ({ label = "", value = null, name="", options, isRequired = false, onChange }) => {

    return (
        <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700">
                {label}
                {isRequired && <span className="text-red-500">*</span>}
            </label>
            <select
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                onChange={onChange}
                name={name}
                defaultValue={value || ""}
            >
                <option value="">All Category</option>
                {
                    options?.map((option) => (
                        <option key={option._id} value={option._id}>
                            {option.name}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

export default SelectInput;
