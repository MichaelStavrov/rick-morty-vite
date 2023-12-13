import { lazy } from 'react';
import SuspensedComponent from 'components/SuspensedComponent';

const Component = lazy(() => import('./Episodes'));

const Episodes = () => {
  return (
    <SuspensedComponent>
      <Component />
    </SuspensedComponent>
  );
};

export default Episodes;
