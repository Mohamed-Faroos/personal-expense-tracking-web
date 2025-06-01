import { useState } from "react";
import { MenuItems } from "../../lib/MenuItems";

import HamburgerIcon from "../../assets/Icons/humbergur.svg";
import CloseIcon from "../../assets/Icons/close.svg";
import { useLocation } from "react-router-dom";
import type { AppDispatch } from "../../state/store";
import { useDispatch } from "react-redux";
import { logout } from "../../state/session/userLogin";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const isCurrentUrl = (url: string) => location.pathname === url;

    /**
     * The `handleLogout` function dispatches a logout action.
     */
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className="bg-gray-900 text-white p-4 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl md:text-2xl font-bold ml-2">PET System</h1>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <img src={menuOpen ? CloseIcon : HamburgerIcon} alt="Menu Icon" />
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        {
                            MenuItems.map((item) => {
                                if (item.isLogout) {
                                    return (
                                        <li>
                                            <a onClick={handleLogout} className={"hover:bg-red-600 px-5 py-3 rounded-md cursor-pointer " + `${isCurrentUrl(item.link) ? " bg-red-500" : ""}`}>
                                                {item.name}
                                            </a>
                                        </li>
                                    )
                                }

                                return (
                                    <li>
                                        <a href={item.link} className={"hover:bg-gray-600 px-5 py-3 rounded-md " + `${isCurrentUrl(item.link) ? " bg-gray-500" : ""}`}>
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div
                    className={`md:hidden bg-gray-800 text-white p-4 absolute top-full left-0 w-full transition-transform duration-300 ease-in-out ${menuOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <ul className="space-y-2">
                        {
                            MenuItems.map((item) => {
                                if(item.isLogout) {
                                    return (
                                        <li>
                                            <a onClick={handleLogout}
                                                className={"block hover:bg-red-600 px-5 py-3 rounded-md cursor-pointer " + `${isCurrentUrl(item.link) ? " bg-red-500" : ""}`} >
                                                {item.name}
                                            </a>
                                        </li>
                                    )
                                }
                                return (
                                    <li>
                                        <a href={item.link}
                                            className={"block hover:bg-gray-600 px-5 py-3 rounded-md " + `${isCurrentUrl(item.link) ? " bg-gray-500" : ""}`} >
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
            }
        </header >
    )
}

export default Header;