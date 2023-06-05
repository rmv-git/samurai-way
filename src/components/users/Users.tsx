import React, {useEffect} from 'react';
import axios from "axios";
import {UserResponseType, UsersResponseType} from "../../types/types";
import avatar from './../../assets/images/avatar_male_person.png';
import {getUsersAC} from "../../redux/users-reducer";
import {UsersContainerPropsType} from "./UsersContainer";

export const Users = (props: UsersContainerPropsType) => {

    useEffect(() => {
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(res => getUsersAC(res.data.items))
    }, []);

    return (
        <div>
            {
                props.users.map((user: UserResponseType) =>
                    <div>
                        <div>
                            {user.name}
                        </div>
                        <span>{user.id}</span>
                        <div>
                            <img style={{width: '64px', height: '64px'}}
                                 src={user.photos.small ? user.photos.large : avatar}/>
                        </div>
                        <div>
                            <button>FOLLOW</button>
                            <button>UNFOLLOW</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};
