import { useDispatch, useSelector } from "react-redux";
import ErrorPopup from "../ErrorPopup";
import Header from "../Header";
import type { AppDispatch, RootState } from "../../state/store";
import type { SessionState } from "../../state/session/types";
import { logout } from "../../state/session/userLogin";

interface LayoutProps {
    children: React.ReactNode;
    pageName: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageName = "" }) => {
    const stateSession: SessionState = useSelector((state: RootState) => state.session);
    const dispatch = useDispatch<AppDispatch>();
    /**
         * The `handleLogout` function dispatches a logout action.
         */
        const handleLogout = () => {
            dispatch(logout());
        };
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <Header />

            {/* Main Content Section */}
            <main className="my-5 xl:mx-40 md:mx-10 sm:mx-5 px-4 flex-grow pb-20">
                <h1 className="text-2xl font-bold mb-6">{pageName}</h1>
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
