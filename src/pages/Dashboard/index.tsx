import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import Layout from "../../components/Layout";
import { Pie } from "react-chartjs-2";

const Dashboard = () => {
    // Register required Chart.js components
    ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

    const pieData1 = {
        "labels": [
            "FOOD",
            "TRAVELING",
            "ENTERTAINMENT",
            "OTHER",
            "FITNESS",
            "ROOM"
        ],
        "datasets": [
            {
                "data": [
                    950,
                    4200,
                    0,
                    1100,
                    2500,
                    15000
                ],
                "backgroundColor": [
                    "#FF6384",
                    "#36A2EB",
                    "#9966FF",
                    "#FF9F40",
                    "#FFCE56",
                    "#4BC0C0"
                ]
            }
        ]
    }

    return (
        <Layout pageName="Dashboard">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h2 className="text-md font-bold mb-4">This Month Total Expense</h2>
                    <h3 className="text-xl font-extrabold">60,000 LKR</h3>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h2 className="text-md font-bold mb-4">This Year Total Expense</h2>
                    <h3 className="text-xl font-extrabold">120,500 LKR</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h2 className="text-lg font-bold mb-4">Current Month Expense</h2>
                    <Pie id="monthly-chart" data={pieData1} />
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h2 className="text-lg font-bold mb-4">Current Month Vs Previous Month</h2>
                    <Pie id="monthly-chart" data={pieData1} />
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h2 className="text-lg font-bold mb-4">Current Month Vs Previous Month</h2>
                    <Pie id="monthly-chart" data={pieData1} />
                </div>
            </div>
        </Layout>
    )
};

export default Dashboard;