import { Outlet } from "react-router-dom";
import Navbar from "../../components/Quiz/NavBar";
import Footer from "../../components/Quiz/Footer";

export default function GuestLayout() {
    return (
        <div id="app-container" className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar />
            <div id="main-content" className="flex-1 p-4 mt-16">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
