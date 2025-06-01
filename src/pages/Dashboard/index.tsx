import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Pie } from "react-chartjs-2";

import Layout from "../../components/Layout";
import useDashboardAction from "./useDashboardAction";

const Dashboard = () => {
    // Register required Chart.js components
    ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

    const { stateExpense } = useDashboardAction();

    const renderUI = () => {
        if (stateExpense.loading) {
            return (
                <div className="flex  justify-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                </div>
            );
        }

        return (
            <>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-5">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-md font-bold mb-4">This Month Total Expense</h2>
                        <h3 className="text-xl font-extrabold">{stateExpense.stats?.currentMonthTotal?.toLocaleString()} LKR</h3>
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-md font-bold mb-4">This Year Total Expense</h2>
                        <h3 className="text-xl font-extrabold">{stateExpense.stats?.currentYearTotal?.toLocaleString()} LKR</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-lg font-bold mb-4">Current Month Expenses</h2>
                        {
                            stateExpense.stats?.currentMonthExpense && (
                                <Pie
                                    id="monthly-chart"
                                    data={{
                                        labels: stateExpense.stats?.currentMonthExpense?.labels || [],
                                        datasets: (stateExpense.stats?.currentMonthExpense?.datasets || []).map(dataset => ({
                                            data: dataset.data,
                                            backgroundColor: dataset.backgroundColor,
                                        }))
                                    }}
                                />
                            )
                        }
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-lg font-bold mb-4">Current Month Expenses</h2>
                        {
                            stateExpense.stats?.previousMonthExpense && (
                                <Pie
                                    id="monthly-chart"
                                    data={{
                                        labels: stateExpense.stats?.previousMonthExpense?.labels || [],
                                        datasets: (stateExpense.stats?.previousMonthExpense?.datasets || []).map(dataset => ({
                                            data: dataset.data,
                                            backgroundColor: dataset.backgroundColor,
                                        }))
                                    }}
                                />
                            )
                        }
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-lg font-bold mb-4">This Year Expenses</h2>
                        {
                            stateExpense.stats?.currentYearExpense && (
                                <Pie
                                    id="monthly-chart"
                                    data={{
                                        labels: stateExpense.stats?.currentYearExpense?.labels || [],
                                        datasets: (stateExpense.stats?.currentYearExpense?.datasets || []).map(dataset => ({
                                            data: dataset.data,
                                            backgroundColor: dataset.backgroundColor,
                                        }))
                                    }}
                                />
                            )
                        }
                    </div>
                </div>
            </>
        )
    }
    return (
        <Layout pageName="Dashboard">
            {renderUI()}
        </Layout>
    )
};

export default Dashboard;