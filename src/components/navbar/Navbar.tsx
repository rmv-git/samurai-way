import React from "react";
import "./Navbar.module.css";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.link}>
                <NavLink to={'/profile'}>
                    Profile
                </NavLink>
            </div>
            <div className={classes.link}>
                <NavLink to={'/messages'}>
                    Messages
                </NavLink>

            </div>
            <div className={classes.link}>
                <NavLink to={'/news'}>
                    News
                </NavLink>

            </div>
            <div className={classes.link}>
                <NavLink to={'/music'}>
                    Music
                </NavLink>

            </div>
            <div className={classes.link}>
                <NavLink to={'/settings'}>
                    Settings
                </NavLink>
            </div>
            <div className={classes.link}>
                <NavLink to={'/login'}>
                    Login
                </NavLink>
            </div>
            <div className={classes.link}>
                <NavLink to={'/users'}>
                    Users
                </NavLink>
            </div>
        </div>
    );
}