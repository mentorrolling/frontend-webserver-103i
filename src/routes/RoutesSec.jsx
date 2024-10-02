import { Routes, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import NotFoundScreen from "../views/NotFoundScreen";
import ProductoScreen from "../views/ProductoScreen";
import ProductAdminScreen from "../views/ProductAdminScreen";

import NavBarApp from "../components/NavBarApp";

const RoutesSec = () => {
  return (
    <>
      <NavBarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/producto/:id" element={<ProductoScreen />} />
        <Route path="/admin" element={<ProductAdminScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
};

export default RoutesSec;
