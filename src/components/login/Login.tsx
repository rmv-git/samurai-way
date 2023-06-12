import React from 'react';

export const Login = () => {
    return (
        <div>
            <h3>Login</h3>
            <div>
                <div>
                    Email: <input type={'email'}/>
                </div>
                <div>
                    Password: <input type={'password'}/>
                </div>
                <div>
                    RememberMe: <input type={'checkbox'}/>
                </div>
            </div>
        </div>
    );
};
