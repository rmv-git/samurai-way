import React from 'react';
import {UserResponseType} from "../../types/types";
import avatar from './../../assets/images/avatar_male_person.png';
import {Pagination} from "../../features/pagination/Pagination";

type PropsType = {
    users: UserResponseType[];
    totalCount: number;
    pageSize: number;
    currentPage: number;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    selectPage: (page: number) => void;
}

export const Users = (props: PropsType) => {
    return (
        <div>
            {
                props.users.map((user: UserResponseType) =>
                    <div key={user.id}>
                        <div>
                            {user.name}
                        </div>
                        <span>{user.id}</span>
                        <div>
                            <img style={{width: '64px', height: '64px'}}
                                 src={user.photos.small ? user.photos.large : avatar}
                                 alt={'profile_image'}
                            />
                        </div>
                        <div>
                            {user.followed
                                ? <button
                                    onClick={() => props.unfollow(user.id)}>UNFOLLOW</button>
                                : <button
                                    onClick={() => props.follow(user.id)}>FOLLOW</button>
                            }
                        </div>
                    </div>
                )
            }
            <Pagination totalCount={props.totalCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        selectPage={props.selectPage}/>
        </div>
    );
}
