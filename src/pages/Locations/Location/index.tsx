import { lazy } from 'react';
import SuspensedComponent from 'components/SuspensedComponent';

const Component = lazy(() => import('./Location'));

const Location = () => {
  return (
    <SuspensedComponent>
      <Component />
    </SuspensedComponent>
  );
};

export default Location;
