import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";
import {Nullable} from "../../types/types";

type PropsType = {
    isAuth: boolean,
    email: Nullable<string>,
    logOut: () => void,
}
export const HeaderComponent = (props: PropsType) => {

    return (
        <header className={classes.header}>
            Header
            <div style={{display: 'flex', flexFlow: 'row', color: 'white'}}>
                {props.isAuth
                    ? <div>
                        <span>{props.email}</span>
                        <button onClick={props.logOut}>Logout</button>
                    </div>
                    : <NavLink to={'/login'} style={{color: 'white'}}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    );
}