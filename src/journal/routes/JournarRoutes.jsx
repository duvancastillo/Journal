import { Navigate, Route, Routes } from "react-router-dom";
import { JournarPage } from "../page/JournarPage";

export const JournarRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<JournarPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
