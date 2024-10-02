import { Routes, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import NotFoundScreen from "../views/NotFoundScreen";
import ProductoScreen from "../views/ProductoScreen";

const RoutesSec = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/producto/:id" element={<ProductoScreen />} />

      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default RoutesSec;
