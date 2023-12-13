import { HTMLInputTypeAttribute, ReactNode } from 'react';

export interface FieldParams {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  placeholder: string;
  initialValue?: string;
  autoFocus?: boolean;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
}

export type AuthFormType = 'signIn' | 'signUp';
