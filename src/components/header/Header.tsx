import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";
import {HeaderContainerPropsType} from "./HeaderContainerComponent";

export const HeaderComponent = (props: HeaderContainerPropsType) => {

    return (
        <header className={classes.header}>
            Header
            <div style={{display: 'flex', flexFlow: 'row', color: 'white'}}>
                {props.isAuth
                    ? <div>
                        <span>{props.email}</span>
                        <button onClick={() => props.logoutThunk()}>Logout</button>
                    </div>
                    : <NavLink to={'/login'} style={{color: 'white'}}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    );
}