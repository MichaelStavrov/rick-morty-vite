import React, { FC, PropsWithChildren } from 'react';
import AuthProvider from 'context/AuthProvider';
import DataProvider from 'context/DataProvider';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthProvider>
      <DataProvider>{children}</DataProvider>
    </AuthProvider>
  );
};

export default Providers;
