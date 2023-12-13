import { lazy } from 'react';
import SuspensedComponent from 'components/SuspensedComponent';

const Component = lazy(() => import('./Locations'));

const Locations = () => {
  return (
    <SuspensedComponent>
      <Component />
    </SuspensedComponent>
  );
};

export default Locations;
