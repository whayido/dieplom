"use client";

import { createAuthCookie } from "@/actions/auth.action";
import { LoginSchema } from "@/helpers/schemas";
import { LoginFormType } from "@/helpers/types";
import { Button, Input } from "@heroui/react";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const Login = () => {
  const router = useRouter();

  const initialValues: LoginFormType = {
    email: "admin@admin.com",
    password: "admin",
  };

  const handleLogin = useCallback(
    async (values: LoginFormType) => {
      // `values` contains email & password. You can use provider to connect user

      await createAuthCookie();
      router.replace("/");
    },
    [router]
  );

  return (
    <>
      <div className='text-center text-[25px] font-bold mb-6'>Войти</div>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}>
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <>
            <div className='flex flex-col w-1/2 gap-4 mb-4'>
              <Input
                variant='bordered'
                label='Эл. почта'
                type='email'
                value={values.email}
                isInvalid={!!errors.email && !!touched.email}
                errorMessage={errors.email}
                onChange={handleChange("email")}
              />
              <Input
                variant='bordered'
                label='Пароль'
                type='password'
                value={values.password}
                isInvalid={!!errors.password && !!touched.password}
                errorMessage={errors.password}
                onChange={handleChange("password")}
              />
            </div>

            <Button
              onPress={() => handleSubmit()}
              variant='flat'
              color='primary'
              >
                
              Войти
            </Button>
          </>
        )}
      </Formik>

      <div className='font-light text-slate-400 mt-4 text-sm'>
       Нет аккаунта?{" "}
        <Link href='/register' className='font-bold'>
          Создать аккаунт 
        </Link>
      </div>
    </>
  );
};
