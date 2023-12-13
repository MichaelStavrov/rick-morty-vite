import { lazy } from 'react';
import SuspensedComponent from 'components/SuspensedComponent';

const Component = lazy(() => import('./StartPage'));

const StartPage = () => {
  return (
    <SuspensedComponent>
      <Component />
    </SuspensedComponent>
  );
};

export default StartPage;
