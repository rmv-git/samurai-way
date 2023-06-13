import React from 'react';
import {Field, Form, FormikProps} from "formik";

interface MyFormValues {
    email: string | null;
    password: string | null;
    rememberMe: boolean | null;
}

// Shape of form values
interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {
    message: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
export const Login = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, message } = props;
    return (
        <Form>
            <h1>{message}</h1>
            <Field type="email" name="email" />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <Field type="password" name="password" />
            {touched.password && errors.password && <div>{errors.password}</div>}

            <Field type="checkbox" name="checkbox" />

            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
    );
};
