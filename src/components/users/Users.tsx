import React from 'react';
import {UserResponseType} from "../../types/types";
import avatar from './../../assets/images/avatar_male_person.png';
import {UsersContainerPropsType} from "./UsersContainer";
import {API} from "../../api/API";

export class UsersClassComponent extends React.Component<UsersContainerPropsType, any> {

    componentDidMount() {
        API.getUsers().then(
            res => this.props.getUsers(res.items, res.totalCount)
        )
    }

    render() {

        let allPages = Math.ceil(this.props.totalCount / this.props.pageSize);

        let ArrayPages: Array<number> = [];

        for (let i = 1; i <= allPages; i++) {
            ArrayPages.push(i)
        }

        return (
            <div>
                {
                    this.props.users.map((user: UserResponseType) =>
                        <div key={user.id}>
                            <div>
                                {user.name}
                            </div>
                            <span>{user.id}</span>
                            <div>
                                <img style={{width: '64px', height: '64px'}}
                                     src={user.photos.small ? user.photos.large : avatar}
                                />
                            </div>
                            <div>
                                {user.followed
                                    ? <button
                                        onClick={() => API.unfollow(user.id).then(res => this.props.unfollow(user.id))}>UNFOLLOW</button>
                                    : <button
                                        onClick={() => API.follow(user.id).then(res => this.props.follow(user.id))}>FOLLOW</button>
                                }
                            </div>
                        </div>
                    )
                }
                <div>
                    {ArrayPages.map((page, index) => <button key={index}>{page}</button>)}
                </div>
            </div>
        );
    }
}
