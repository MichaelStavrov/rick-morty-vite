import React, { FC, CSSProperties } from 'react';
import {
  ElementProps,
  Button as MButton,
  ButtonProps as MButtonProps,
} from '@mantine/core';

interface ButtonProps
  extends MButtonProps,
    ElementProps<'button', keyof MButtonProps> {
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
    <MButton style={{ maxWidth: mw }} fullWidth type={type} {...rest}>
      {children}
    </MButton>
  );
};

export default Button;
