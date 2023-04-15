import React from "react";
import "./Navbar.module.css";
import classes from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.link}>
                <a href={'/profile'}>
                    Profile
                </a>
            </div>
            <div className={classes.link}>
                <a href={'/messages'}>
                    Messages
                </a>

            </div>
            <div className={classes.link}>
                <a href={'/news'}>
                    News
                </a>

            </div>
            <div className={classes.link}>
                <a href={'/music'}>
                    Music
                </a>

            </div>
            <div className={classes.link}>
                <a href={'/settings'}>
                    Settings
                </a>
            </div>
            <div className={classes.link}>
                <a href={'/login'}>
                    Login
                </a>
            </div>
            <div className={classes.link}>
                <a href={'/users'}>
                    Users
                </a>
            </div>
        </div>
    );
}