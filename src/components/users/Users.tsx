import React, {useEffect} from 'react';
import {UserResponseType} from "../../types/types";
import avatar from './../../assets/images/avatar_male_person.png';
import {UsersContainerPropsType} from "./UsersContainer";
import {API} from "../../api/API";

export const Users = (props: UsersContainerPropsType) => {

    useEffect(() => {
        API.getUsers().then(
            res => props.getUsers(res.items, res.totalCount)
        )
    }, []);

    let allPages = Math.ceil(props.totalCount / props.pageSize);

    let ArrayPages: Array<number> = [];

    for (let i = 1; i <= allPages; i++) {
        ArrayPages.push(i)
    }

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
            <div>
                {ArrayPages.map(page => <button>{page}</button>)}
            </div>
        </div>
    );
};
