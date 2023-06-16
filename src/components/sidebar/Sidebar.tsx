import React from 'react';
import {UserResponseType} from "../../types/types";
import avatar_male from '../../assets/images/avatar_male_person.png';
import {NavLink} from "react-router-dom";
import styles from './Sidebar.module.css';

type PropsType = {
    arrayUsers: UserResponseType[];
}
export const Sidebar = (props: PropsType) => {
    return (
        <div className={styles.wrapper}>
            {
                props.arrayUsers.map((user: UserResponseType) => user.followed && <div key={user.id}>
                        <NavLink to={`/profile/${user.name}`}>
                            {
                                user.photos.small
                                    ? <img className={styles.img}
                                           src={user.photos.small}
                                           alt={'avatar_male_images'}/>
                                    : <img className={styles.img}
                                           src={avatar_male}
                                           alt={'avatar_male_images'}/>
                            }
                            <div>{user.name}</div>
                        </NavLink>
                    </div>
                )
            }
        </div>
    );
};
