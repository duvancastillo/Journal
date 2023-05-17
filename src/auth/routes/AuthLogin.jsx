import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegistrePage } from '../pages';

export const AuthLogin = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="registre" element={<RegistrePage />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};
