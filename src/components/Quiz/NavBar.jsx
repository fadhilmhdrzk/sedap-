import { BiCartAlt, BiSearch } from "react-icons/bi";
import { MdOutlineFastfood } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const menuClass = ({ isActive }) =>
        `relative px-4 py-2 rounded-md transition-all ${isActive
            ? "text-merah font-extrabold border-t-4 border-red-500"
            : "text-gray-600 hover:text-merah hover:bg-merah-200 hover:font-extrabold"
        }`;


    return (
        <nav className="bg-white shadow-md px-8 py-5 w-full fixed top-0 z-50">
            <div className="flex justify-between items-center">

                <div className="flex items-center text-2xl font-poppins font-bold">
                    <MdOutlineFastfood className="text-3xl text-hitam mr-2" />
                    Sedap<b className="text-merah">.</b>
                </div>

                <ul className="flex space-x-6 items-center">
                    <li><NavLink to="/Home" className={menuClass}>Home</NavLink></li>
                    <li><NavLink to="/About" className={menuClass}>About</NavLink></li>
                    <li><NavLink to="/Produk" className={menuClass}>Produk</NavLink></li>
                    <li><NavLink to="/Testimonial" className={menuClass}>Testimonial</NavLink></li>

                    <div id="icons-container" className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition">
                            <BiSearch className="text-xl text-gray-700 hover:text-hijau cursor-pointer" />
                        </div>
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition">
                                <BiCartAlt className="text-xl text-gray-700 hover:text-red   cursor-pointer" />
                            </div>
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                                2
                            </span>
                        </div>
                    </div>


                    <div>
                        <NavLink to="/Login" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Login/Register</NavLink>
                    </div>
                </ul>
            </div>
        </nav >
    );
}
