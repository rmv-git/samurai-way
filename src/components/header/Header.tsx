import React from "react";
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainerComponent";
import classes from "./Header.module.css";

export const HeaderComponent = (props: HeaderContainerPropsType) => {

    return (
        <header className={classes.header}>
            Header
            <div style={{display: 'flex', flexFlow: 'row', color: 'white'}}>
                {props.isAuth
                    ? <span>Nickname</span>
                    : <NavLink to={'/login'} style={{color: 'white'}}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    );
}