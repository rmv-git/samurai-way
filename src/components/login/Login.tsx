import React from "react";
import {LoginContainerPropsType} from "./LoginContainer";
import {Field, Form} from "react-final-form";

export const Login = (props: LoginContainerPropsType) => {

    const required = (value: string) => (value ? undefined : "Required");


    const login = (values: { email: string, password: string, rememberMe: boolean }) => {
        props.loginThunk(values.email, values.password, values.rememberMe)
    }

    return (
        <div>
            <Form
                onSubmit={login}
                render={({handleSubmit, submitting, values}) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="email" validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>Email</label>
                                    <input {...input} type="text" placeholder="Email"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="password" validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>Password</label>
                                    <input {...input} type="password" placeholder="Password"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name={"rememberMe"} type={"checkbox"} validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <label>Remember Me</label>
                                    <input {...input} type={"checkbox"} defaultChecked={false}/>
                                </div>
                            )}
                        </Field>
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Login
                            </button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}
