import { IoMdPeople } from "react-icons/io";
import { AiOutlineBorderLeft } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import ListMenu from "./ListMenu";
import { MdErrorOutline } from "react-icons/md";


export default function Sidebar() {

    return (
        <div
            id="sidebar"
            className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
        >
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span
                    id="logo-title"
                    className="font-poppins font-extrabold text-[48px] text-gray-900"
                >
                    Sedap{" "}
                    <b id="logo-dot" className="text-hijau">
                        .
                    </b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">
                    Modern Admin Dashboard
                </span>
            </div>

            {/* List Menu */}
            <ListMenu />
            {/* <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
                        <NavLink id="menu-1" to="/" className={menuClass}>
                            <MdOutlineDashboardCustomize className="mr-4 text-xl" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-2" to="/Orders" className={menuClass}>
                            <AiOutlineBorderLeft className="mr-4 text-xl" />
                            Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-3" to="/Customers" className={menuClass}>
                            <IoMdPeople className="mr-4 text-xl" />
                            Customers
                        </NavLink>
                    </li>
                </ul>
            </div> */}
            


            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div
                    id="footer-card"
                    className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
                >
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div
                            id="add-menu-button"
                            className="text-gray-600 flex items-center p-2 mt-3 bg-white rounded-md space-x-2"
                        >
                            <span>Add Menus</span>
                        </div>
                    </div>
                    <img
                        id="footer-avatar"
                        className="w-20 rounded-full"
                        src="https://avatar.iran.liara.run/public/28"
                    />
                </div>
                <span id="footer-brand" className="font-bold text-gray-400">
                    Sedap Restaurant Admin Dashboard
                </span>
                <p id="footer-copyright" className="font-light text-gray-400">
                    &copy; 2025 All Right Reserved
                </p>
            </div>
        </div>
    );
}
