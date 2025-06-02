import { useDispatch, useSelector } from "react-redux";
import ErrorPopup from "../ErrorPopup";
import Header from "../Header";
import type { AppDispatch, RootState } from "../../state/store";
import type { SessionState } from "../../state/session/types";
import { logout } from "../../state/session/userLogin";
import type { ExpenseState } from "../../state/expense/types";

interface LayoutProps {
    children: React.ReactNode;
    pageName: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageName = "" }) => {
    const stateSession: SessionState = useSelector((state: RootState) => state.session);
    const stateExpense: ExpenseState = useSelector((state: RootState) => state.expense);
    const MonthlyExpenseLimit = 10000;
    const currentMonthTotal = stateExpense.stats?.currentMonthTotal || 0;
    const dispatch = useDispatch<AppDispatch>();
    /**
         * The `handleLogout` function dispatches a logout action.
         */
    const handleLogout = () => {
        dispatch(logout());
    };

    const renderWarnings = () => {
        if (currentMonthTotal >= 0.9 * MonthlyExpenseLimit) {
            return (
                <div className="bg-yellow-200 text-yellow-800 p-4 rounded mb-6">
                    <p className="text-sm font-medium">
                        Warning: You have reached 90% of your monthly expense limit!
                    </p>
                </div>
            );
        }
        return null;
    }
    
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <Header />

            {/* Main Content Section */}
            <main className="my-5 xl:mx-40 md:mx-10 sm:mx-5 px-4 flex-grow pb-20">
                <h1 className="text-2xl font-bold mb-6">{pageName}</h1>
                {renderWarnings()}
                {children}
            </main>

            {/* Footer Section */}
            <footer className="bg-zinc-900 text-white text-center py-4 fixed bottom-0 w-full">
                <p className="text-sm">Developed by Faroos</p>
            </footer>

            <ErrorPopup
                isOpen={stateSession.isUnauthorized || false}
                title="Unauthorized Access"
                description="Your session has expired. please log in again."
                buttonLabel="Sign Out"
                onButtonClick={handleLogout}
            />
        </div>
    );
};

export default Layout;
