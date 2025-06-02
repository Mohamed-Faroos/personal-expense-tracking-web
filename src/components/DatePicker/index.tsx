import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

interface CustomDatePickerProps {
    label: string;
    value: Date | null;
    placeholder?: string;
    isRequired?: boolean;
    onChange?: (date: Date | null) => void;
}
const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ label = "", value = null, placeholder = "Select date" , isRequired, onChange}) => {

    return (
        <div className="mt-2 w-full">
            <label className="block text-sm font-medium text-gray-700">{label}
                {isRequired && <span className="text-red-500">*</span>}
            </label>
            <DatePicker
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                selected={value}
                onChange={onChange}
                dateFormat="MM/dd/yyyy"
                placeholderText={placeholder}
            />
        </div>
    );
};

export default CustomDatePicker;
