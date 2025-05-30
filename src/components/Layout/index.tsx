import Header from "../Header";

interface LayoutProps {
    children: React.ReactNode;
    pageName: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageName = "" }) => {

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
            <footer className="bg-gray-800 text-white text-center py-4 fixed bottom-0 w-full">
                <p className="text-sm">Developed by Faroos</p>
            </footer>
        </div>
    );
};

export default Layout;
