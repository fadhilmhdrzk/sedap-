import { AiOutlineUser } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { AiOutlineBorderLeft } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { MdFastfood } from "react-icons/md";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li><NavLink id="menu-1" to="/" className={menuClass}><MdOutlineDashboardCustomize className="mr-4 text-xl" />Dashboard</NavLink></li>
        <li><NavLink id="menu-2" to="/Orders" className={menuClass}><AiOutlineBorderLeft className="mr-4 text-xl" />Orders</NavLink></li>
        <li><NavLink id="menu-3" to="/Customers" className={menuClass}><IoMdPeople className="mr-4 text-xl" />Customers</NavLink></li>
        <li><NavLink to="/error-400" className={menuClass}><MdErrorOutline />Error 400</NavLink></li>
        <li><NavLink to="/error-401" className={menuClass}><MdErrorOutline />Error 401</NavLink></li>
        <li><NavLink to="/error-403" className={menuClass}><MdErrorOutline />Error 403</NavLink></li>
        <li><NavLink to="/user" className={menuClass}><AiOutlineUser />User</NavLink></li>
        <li><NavLink to="/products" className={menuClass}><MdFastfood />Products</NavLink></li>
        <li><NavLink to="/Notes" className={menuClass}><MdFastfood />Notes</NavLink></li>
      </ul>
    </div>
  );
}
