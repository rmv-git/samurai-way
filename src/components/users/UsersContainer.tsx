import React, {ComponentType} from "react";
import {connect, ConnectedProps} from "react-redux";
import {Users} from "./Users";
import {UserResponseType} from "../../types/types";
import {followUserThunk, getUsersThunk, selectPageThunk, unfollowUserThunk} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/redux-store";
import {Preloader} from "../../features/preloader/Preloader";
import {compose} from "redux";


export class UsersClassContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage)
    }

    selectPage = (page: number) => {
        this.props.selectPageThunk(page, this.props.currentPage)
    }

    render() {

        return (
            this.props.isFetching
                ? <Preloader/>
                : <Users
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    currentPage={this.props.currentPage}
                    selectPage={this.selectPage}
                    pageSize={this.props.pageSize}
                    follow={this.props.followUserThunk}
                    unfollow={this.props.unfollowUserThunk}
                />
        );
    }
}

type MapStateToPropsType = {
    users: UserResponseType[],
    totalCount: number,
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersReducer.items,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage,
        pageSize: state.usersReducer.pageSize,
        isFetching: state.appReducer.isFetching,
    }
}

const ConnectComponent = connect(mapStateToProps, {
    getUsersThunk,
    selectPageThunk,
    followUserThunk,
    unfollowUserThunk,
});

export type UsersContainerPropsType = ConnectedProps<typeof ConnectComponent>;
export const UsersContainer = compose<ComponentType>(ConnectComponent)(UsersClassContainer);
