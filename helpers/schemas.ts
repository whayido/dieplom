import { object, ref, string } from "yup";

export const LoginSchema = object().shape({
  email: string()
    .email("Это поле должно содержать адрес электронной почты")
    .required("Требуется электронная почта"),
  password: string().required("Требуется ввести пароль"),
});

export const RegisterSchema = object().shape({
  name: string().required("Требуется указать имя"),
  email: string()
    .email("Это поле должно содержать адрес электронной почты")
    .required("Требуется электронная почта"),
  password: string().required("Требуется ввести пароль"),
  confirmPassword: string()
    .required("Требуется подтвердить пароль")
    .oneOf([ref("password")], "Пароли должны совпадать"),
});
