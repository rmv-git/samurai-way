import React from 'react';
import {Field, Form, Formik} from "formik";

interface MyFormValues {
    email: string | null;
    password: string | null;
    rememberMe: boolean | null;
}

export const Login = () => {

    const initialValues: MyFormValues = {email: null, rememberMe: null, password: null};

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                console.log({values, actions});
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
        >
            <Form>
                <div>
                    <label htmlFor="Email">Email</label>
                    <Field id="email" type={'email'} name="email" placeholder="Email"/>
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <Field id="password" type={'password'} name="password" placeholder="Password"/>
                </div>
                <div>
                    <label htmlFor="RemeberMe">RemeberMe</label>
                    <Field id="checkbox" type={'checkbox'} name="rememberMe"/>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};
