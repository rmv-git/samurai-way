import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Dialog.module.css";
import {UserType} from "../../../types/types";

type PropsType = {
    user: UserType;
}
export const Dialog = (props: PropsType) => {
    return (
        <div>
            <NavLink to={`/messages/${props.user.id}`} className={classes.link}>
                {props.user.name}
            </NavLink>
        </div>
    );
};
