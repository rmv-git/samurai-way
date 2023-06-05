import {connect} from "react-redux";
import {Users} from "./Users";
import {UserResponseType} from "../../types/types";
import {Dispatch} from "redux";
import {getUsersAC} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    users: UserResponseType[],
}
type MapDispatchToPropsType = {
    getUsers: (items: UserResponseType[]) => void;
}
export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersReducer.items,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        getUsers: (items: UserResponseType[]) => {
            dispatch(getUsersAC(items))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)