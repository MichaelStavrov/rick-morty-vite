import ErrorBoundary from 'components/ErrorBoundary';
import React, { FC, PropsWithChildren, Suspense } from 'react';

const SuspensedComponent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback='Loading...'>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default SuspensedComponent;
