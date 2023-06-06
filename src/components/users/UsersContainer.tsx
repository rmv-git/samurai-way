import {connect} from "react-redux";
import {Users} from "./Users";
import {UserResponseType} from "../../types/types";
import {Dispatch} from "redux";
import {getUsersAC, followUserAC, unFollowUserAC} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    users: UserResponseType[],
    totalCount: number,
    currentPage: number,
    pageSize: number,
}
type MapDispatchToPropsType = {
    getUsers: (items: UserResponseType[], totalCount: number) => void;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
}
export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersReducer.items,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage,
        pageSize: state.usersReducer.pageSize,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        getUsers: (items: UserResponseType[], totalCount: number) => {
            dispatch(getUsersAC(items, totalCount))
        },
        follow: (userId: number) => {
            dispatch(followUserAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowUserAC(userId))
        },
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)