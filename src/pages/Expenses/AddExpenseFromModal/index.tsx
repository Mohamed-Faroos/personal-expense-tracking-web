import React from "react";
import Modal from "react-modal";

import TextInput from "../../../components/TextInput";
import SelectInput from "../../../components/SelectInput";
import useAddExpenseAction from "./useAddExpenseAction";
import CustomDatePicker from "../../../components/DatePicker";
import PrimaryButton from "../../../components/PrimaryButton";
import CloseIcon from "./../../../assets/Icons/close-black.svg"

interface AddExpenseModal {
    isOpen: boolean
    onClose?(): void
}

const AddExpenseModal: React.FC<AddExpenseModal> = ({ isOpen = false, onClose }) => {

    const { stateExpenseTypes, stateExpenseAdded, stateExpenseAddLoading, form, error, onChange, onClickAddExpense, onChangeEventDate } = useAddExpenseAction();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative"
            overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            ariaHideApp={false}
        >
            {/* Close Button */}
            <button
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer"
                onClick={onClose}
            >
                <img src={CloseIcon} alt="Close" className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-semibold mb-4">Add Expense</h2>

            <div className="space-y-4">
                <div className="flex gap-2">
                    <div className="flex-1">
                        <TextInput
                            label="Title"
                            placeholder="e.g., Dinner outing"
                            type="text"
                            name="title"
                            isRequired={true}
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="flex-1">
                        <TextInput
                            label="Amount"
                            placeholder="e.g., 50.00"
                            type="number"
                            name="amount"
                            isRequired={true}
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={onChange}
                            value={form.amount}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <TextInput
                        label="Description"
                        placeholder="e.g., Dinner with john"
                        type="text"
                        name="description"
                        isRequired={true}
                        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        onChange={onChange}
                        value={form.description}
                    />
                </div>
                <div>
                    <SelectInput
                        label="Category"
                        name="expenseType"
                        isRequired={true}
                        value={form.expenseType}
                        options={stateExpenseTypes}
                        showDefault={false}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <CustomDatePicker
                        label="Start Date"
                        value={form.date}
                        isRequired={true}
                        onChange={onChangeEventDate}
                    />
                </div>
                {
                    error && (
                        <div className="text-red-500 text-sm mt-2">
                            {error}
                        </div>
                    )
                }
                {
                    stateExpenseAdded && (
                        <div className="text-green-500 text-bold text-sm mt-2">
                            Expense added successfully!
                        </div>
                    )
                }
                <PrimaryButton
                    label="Add Expense"
                    onClick={onClickAddExpense}
                    fullWidth={true}
                    disabled={stateExpenseAddLoading}
                />
            </div>
        </Modal>
    );
}

export default AddExpenseModal;
