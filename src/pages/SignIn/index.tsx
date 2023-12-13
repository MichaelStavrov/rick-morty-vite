import { lazy } from 'react';
import SuspensedComponent from 'components/SuspensedComponent';

const Component = lazy(() => import('./SignIn'));

const SignIn = () => {
  return (
    <SuspensedComponent>
      <Component />
    </SuspensedComponent>
  );
};

export default SignIn;
