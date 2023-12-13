import React, { FC, ButtonHTMLAttributes, CSSProperties } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: 'link';
  mw?: CSSProperties['maxWidth'];
}

const Button: FC<ButtonProps> = ({
  type = 'button',
  children,
  view,
  mw,
  ...rest
}) => {
  return (
    <button
      style={{ maxWidth: mw }}
      className={`${styles.button} ${view === 'link' && styles.link}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
