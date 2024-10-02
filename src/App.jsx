import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./views/LoginScreen";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RoutesSec from "./routes/RoutesSec";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <RoutesSec />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
