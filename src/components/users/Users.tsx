import React from 'react';
import {UserResponseType} from "../../types/types";
import avatar from './../../assets/images/avatar_male_person.png';
import {UsersContainerPropsType} from "./UsersContainer";
import {API} from "../../api/API";
import {Pagination} from "../../features/pagination/Pagination";
import {store} from "../../redux/redux-store";

export class UsersClassComponent extends React.Component<UsersContainerPropsType, any> {

    componentDidMount() {
        API.getUsers(this.props.currentPage, this.props.pageSize).then(
            res => this.props.getUsers(res.items, res.totalCount)
        )
    }

    selectPage = (page: number) => {
        this.props.selectPage(page)
        API.getUsers(this.props.currentPage, this.props.pageSize).then(
            res => this.props.getUsers(res.items, res.totalCount)
        )
    }

    render() {

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
                <Pagination totalCount={this.props.totalCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            selectPage={this.selectPage}/>
            </div>
        );
    }
}
