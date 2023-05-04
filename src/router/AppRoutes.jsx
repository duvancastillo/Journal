import { Route, Routes } from "react-router-dom";
import { AuthLogin } from "../auth/routes/AuthLogin";
import { JournarRoutes } from "../journal/routes/JournarRoutes";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="auth/*" element={<AuthLogin />} />

        <Route path="/*" element={<JournarRoutes />} />
      </Routes>
    </>
  );
};
