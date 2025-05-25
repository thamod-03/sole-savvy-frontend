import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllShoes from "./pages/AllShoes";
import ProductCategory from "./pages/ProductCategory";
import ScrollTop from "./components/ScrollTop";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import AdminLoginPage from "./pages/Admin/AdminLoginPage";
import OrdersLayout from "./pages/Admin/OrdersLayout";
import ShoeListLayout from "./pages/Admin/ShoeListLayout";
import AddShoeLayout from "./pages/Admin/AddShoeLayout";
import { AppContent } from "./context/AppContext";

const App = () => {
  const location = useLocation();
  const adminLocation = location.pathname;
  const { isAdminLogged } = useContext(AppContent);
  return (
    <div>
      {adminLocation === "/admin" ||
        adminLocation === "/admin/shoes" ||
        adminLocation === "/admin/add-shoe" || <Navbar />}
      <div>
        <Toaster position="top-right" reverseOrder={false} />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shoes" element={<AllShoes />} />
          <Route path="/shoes/:category" element={<ProductCategory />} />
          <Route path="/shoes/:category/:id" element={<ProductPage />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<AdminLoginPage />}>
            <Route index element={isAdminLogged && <OrdersLayout />} />
            <Route path="/admin/shoes" element={<ShoeListLayout />} />
            <Route path="/admin/add-shoe" element={<AddShoeLayout />} />
          </Route>
        </Routes>
      </div>
      {adminLocation === "/admin" ||
        adminLocation === "/admin/shoes" ||
        adminLocation === "/admin/add-shoe" || <Footer />}
    </div>
  );
};

export default App;
