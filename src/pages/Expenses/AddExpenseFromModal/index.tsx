import React from "react";
import CloseIcon from "./../../../assets/Icons/close-black.svg"

interface AddExpenseModal {
    isOpen: boolean
    onClose?(): void
}

const AddExpenseModal: React.FC<AddExpenseModal> = ({ isOpen = false, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer"
                    onClick={onClose}
                >
                    <img src={CloseIcon} alt="Close" className="w-6 h-6" />
                </button>

                <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>

                {/* Form */}
                <form className="space-y-4">
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Amount <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="0.00 USD"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Bought a new iPhone"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
                            <option>Select category</option>
                            <option>Food</option>
                            <option>Travel</option>
                            <option>Shopping</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Event date
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full border rounded-lg px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <span className="absolute right-3 top-2.5 text-gray-400">📅</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white rounded-full py-2 font-medium hover:bg-gray-900"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddExpenseModal;
