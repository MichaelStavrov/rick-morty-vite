import React, { FC } from 'react';

import AuthForm from '../../components/AuthForm';
import { signInFields } from './fields';
import { useAuth } from 'context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutesMap } from '@/routesMap';

interface SignInpProps {
  // onSubmit: (values: Record<string, string>) => void;
}

const SignIn: FC<SignInpProps> = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const onSubmit = (values: Record<string, string>) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const name = formData.get('name')?.toString();

    if (!name) return;

    auth.signIn({ name }, () => {
      navigate(state?.from ?? RoutesMap.home);
    });
  };

  return <AuthForm onSubmit={onSubmit} fields={signInFields} type='signIn' />;
};

export default SignIn;
