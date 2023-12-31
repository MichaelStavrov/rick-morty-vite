import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'context/AuthProvider';
import { RoutesMap } from '@/routesMap';
import Button from 'components/Button';
import styles from './AuthStatus.module.scss';

const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.user === null) {
    return <span>Вы не залогинены</span>;
  }

  const handleSignOut = () => {
    auth.signOut(() => navigate(RoutesMap.signIn));
  };

  return (
    <div className={styles.container}>
      <span> Здравствуйте, {auth.user.name}!</span>
      <Button variant='outline' onClick={handleSignOut}>
        Выйти из профиля
      </Button>
    </div>
  );
};

export default AuthStatus;
