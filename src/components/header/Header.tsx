import React from "react";
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainerComponent";
import classes from "./Header.module.css";

type PropsType = {
    isAuth: boolean;
    id: number | null;
    email: string | null;
    login: string | null;
}
export const HeaderComponent = (props: PropsType) => {

    return (
        <header className={classes.header}>
            Header
            <div style={{display: 'flex', flexFlow: 'row', color: 'white'}}>
                {props.isAuth
                    ? <span>{props.email}</span>
                    : <NavLink to={'/login'} style={{color: 'white'}}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    );
}