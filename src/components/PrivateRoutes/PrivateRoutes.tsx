import { useAuth } from 'context/AuthProvider';
import React, { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesMap } from 'routesMap';

const PrivateRoutes: FC<PropsWithChildren> = ({ children }) => {
  const auth = useAuth();
  const { pathname } = useLocation();

  if (auth.user === null) {
    return (
      <Navigate to={RoutesMap.signIn} state={{ from: pathname }} replace />
    );
  }

  return <>{children}</>;
};

export default PrivateRoutes;
