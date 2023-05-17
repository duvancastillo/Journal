import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthLogin } from '../auth/routes/AuthLogin';
import { JournarRoutes } from '../journal/routes/JournarRoutes';
import { CheckingAuth } from '../ui/';
import { useCheck } from '../hooks';
export const AppRoutes = () => {
  const { status } = useCheck();

  if (status === 'checking') {
    return <CheckingAuth />;
  }
  return (
    <>
      <Routes>
        {status === 'authetication' ? (
          <Route path="/*" element={<JournarRoutes />} />
        ) : (
          <Route path="auth/*" element={<AuthLogin />} />
        )}
        <Route path="/*" element={<Navigate to="/auth/login " />} />
      </Routes>
    </>
  );
};
