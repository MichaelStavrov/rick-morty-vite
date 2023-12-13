import { FieldParams } from 'components/AuthForm/types';

export const signInFields: FieldParams[] = [
  {
    type: 'text',
    name: 'name',
    label: 'Имя',
    placeholder: 'Имя',
    initialValue: '',
    autoFocus: true,
    errorMessage: 'Поле обязательно',
    required: true,
    // icon: <div>@</div>,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Ваш пароль',
    initialValue: '',
    errorMessage: 'Поле обязательно',
    required: true,
  },
];
