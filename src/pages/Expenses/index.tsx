import Layout from "../../components/Layout";
import AddExpenseModal from "./AddExpenseFromModal";
import CustomDatePicker from "../../components/DatePicker";
import SelectInput from "../../components/SelectInput";
import useExpenseAction from "./useExpenseAction";
import PrimaryButton from "../../components/PrimaryButton";

const Expenses = () => {

    const { stateExpenseTypes, stateFilteredExpense, stateFilterExpenseLoading, form, isOpenAddFrom, getIconByName,
        setIsOpenAddFrom, onChange, onChangeStartDate, onChangeEndDate, onClickApplyFilters } = useExpenseAction()

    const renderExpenseList = () => {
        if (stateFilterExpenseLoading) {
            return (
                <div className="flex  justify-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                </div>
            );
        }

        if (stateFilteredExpense.length === 0) {
            return (
                <div className="flex justify-center h-screen mt-30">
                    <p className="text-gray-500 text-lg">No expenses found for the selected filters.</p>
                </div>
            );
        }

        return stateFilteredExpense.map((section, i) =>
            <div key={i}>
                <p className="text-gray-500 text-sm mb-2">{section.date}</p>
                <div className="space-y-3">
                    {section.expenses.map((item, j) => (
                        <div key={j} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                            <div className="flex items-center gap-3">
                                {
                                    item?.expenseType?.label &&
                                    <span className="text-xl">{getIconByName(item.expenseType.label)}</span>
                                }
                                <div>
                                    <p className={`font-medium text-black`}>
                                        {item.title}
                                    </p>
                                    <p className="text-gray-500 text-md">{item.amount.toLocaleString()} LKR</p>
                                    <p className="text-gray-500 text-sm">{item.description}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="cursor-pointer text-white bg-zinc-800 px-4 py-2 rounded-md shadow-sm hover:bg-zinc-600"
                                    onClick={() => console.log(`Edit expense: ${item._id}`)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="cursor-pointer text-white bg-red-600 px-4 py-2 rounded-md shadow-sm hover:bg-red-500"
                                    onClick={() => console.log(`Delete expense: ${item._id}`)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    };

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
                            <CustomDatePicker
                                label="Start Date"
                                value={form.startDate}
                                isRequired={true}
                                onChange={onChangeStartDate}
                            />
                            <CustomDatePicker
                                label="End Date"
                                value={form.endDate}
                                isRequired={true}
                                onChange={onChangeEndDate}
                            />
                            <SelectInput
                                label="Category"
                                name="category"
                                value={null}
                                options={stateExpenseTypes}
                                onChange={onChange}
                            />
                            <div className="mt-5">
                                <PrimaryButton
                                    label="Apply Filters"
                                    onClick={onClickApplyFilters}
                                    fullWidth={true}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Left - Transactions */}
                    <div className="col-span-2 space-y-4" >
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Expense History</h2>
                            <PrimaryButton
                                label="Add Expense"
                                onClick={() => setIsOpenAddFrom(true)}
                                fullWidth={false}
                                className=" px-3 rounded "
                            />

                        </div>
                        <div className="col-span-2 space-y-4 px-4 mt-5" style={{ maxHeight: '500px', height: "auto", overflowY: 'auto' }}>
                            {renderExpenseList()}
                        </div>
                    </div>
                </div>
            </div>
            <AddExpenseModal
                isOpen={isOpenAddFrom}
                onClose={() => setIsOpenAddFrom((prev) => !prev)}
            />
        </Layout>
    )
};

export default Expenses;