import { useState } from "react";
import AddExpenseModal from "../../components/AddExpenseFromModal";
import Layout from "../../components/Layout";

const Expenses = () => {

    const [isOpenAddFrom, setIsOpenAddFrom] = useState<boolean>(false);
    const transactions = [
        { date: "Jan 1, 2024", items: [{ label: "Netflix", amount: "9.99 LKR", icon: "🎬", type: "expense" }, { label: "Pizza", amount: "25 LKR", icon: "🍕", type: "expense" }] },
        { date: "Dec 30, 2023", items: [{ label: "Transfer", amount: "+25 LKR", icon: "💸", type: "income" }] },
        { date: "Dec 26, 2023", items: [{ label: "Salary", amount: "+1224 LKR", icon: "💼", type: "income" }] },
        { date: "Dec 25, 2023", items: [{ label: "Hotel room", amount: "140 LKR", icon: "🏨", type: "expense" }, { label: "Candies", amount: "28 LKR", icon: "🍬", type: "expense" }, { label: "Trip to Norway", amount: "684 LKR", icon: "🌍", type: "expense" }] },
    ];

    return (
        <Layout pageName="Expenses">
            <div className="p-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Right - Sidebar */}
                    <div className="space-y-6 top-4">
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Filter Expenses</h2>
                            <p className="text-sm text-gray-500">Filter expenses with a specific date range and category.</p>
                        </div>

                        {/* Filters */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                <input
                                    type="date"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                                />
                            </div>
                            <div className="mt-5">
                                <label className="block text-sm font-medium text-gray-700">End Date</label>
                                <input
                                    type="date"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                                />
                            </div>
                            <div className="mt-5">
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <select
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                                >
                                    <option value="">All Categories</option>
                                    <option value="Food">Food</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Clothes">Clothes</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="mt-5">
                                <button className="w-full bg-black text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-800">
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Left - Transactions */}
                    <div className="col-span-2 space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Expense History</h2>
                            <button className="bg-black text-white px-4 py-2 rounded-full" onClick={() => { setIsOpenAddFrom(true) }}>Add Expense</button>
                        </div>

                        {transactions.map((section, i) => (
                            <div key={i}>
                                <p className="text-gray-500 text-sm mb-2">{section.date}</p>
                                <div className="space-y-3">
                                    {section.items.map((item, j) => (
                                        <div key={j} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">{item.icon}</span>
                                                <div>
                                                    <p className={`font-medium ${item.type === "income" ? "text-green-600" : "text-black"}`}>
                                                        {item.amount}
                                                    </p>
                                                    <p className="text-gray-500 text-sm">{item.label}</p>
                                                </div>
                                            </div>
                                            <button className="text-gray-400">⋮</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AddExpenseModal
                isOpen={isOpenAddFrom}
                onClose={() => setIsOpenAddFrom((prev) => !prev)} />
        </Layout>
    )
};

export default Expenses;