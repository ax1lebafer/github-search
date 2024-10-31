import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import { appRoutes } from "./lib/appRoutes.tsx";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainPage />} path={appRoutes.HOME} />
    </Routes>
  );
}

export default AppRoutes;
