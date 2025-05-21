import React from "react";
import { useState } from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import Error400 from './pages/Error400';
import Error401 from './pages/Error401';
import Error403 from './pages/Error403';
import AddCustomers from "./pages/AddCustomers";
import AddOrders from "./pages/AddOrders";
import { Suspense } from "react";
import GuestLayout from "./layouts/Quiz/GuestLayout";
import About from "./pages/Quiz/About";
import Produk from "./pages/Quiz/Produk";
import Home from "./pages/Quiz/Home";
import Testimonial from "./pages/Quiz/Testimonial";
import CekProduk from "./pages/Quiz/cekProduk";

// import Loading from "./components/Loading";
// import NotFound from "./pages/NotFound";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import Login from './pages/Auth/Login';
// import Register from './pages/Auth/Register';
// import Forgot from './pages/Auth/Forgot';
// import MainLayout from './layouts/MainLayout';
// import AuthLayout from './layouts/AuthLayout';
// import Dashboard from "./pages/Dashboard";

const Loading = React.lazy(() => import("./components/Loading"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customers"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Login = React.lazy(() => import("./pages/Auth/Login"))
const Register = React.lazy(() => import("./pages/Auth//Register"))
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"))
const User = React.lazy(() => import("./pages/Auth/User"))

function App() {
  const [count, setCount] = useState(0);


  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/error-400" element={<Error400 />} />
          <Route path="/error-401" element={<Error401 />} />
          <Route path="/error-403" element={<Error403 />} />
          <Route path="/add-customer" element={<AddCustomers />} />
          <Route path="/add-order" element={<AddOrders />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Routes AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Produk" element={<Produk />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/cekProduk" element={<CekProduk />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;
