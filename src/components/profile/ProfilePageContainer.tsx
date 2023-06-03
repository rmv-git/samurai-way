import React from "react";
import {PostType} from "../../types/types";
import {addPostAC} from "../../types/actions";
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    arrayPosts: PostType[];
}
type MapDispatchToPropsType = {
    addPost: (value: string) => void;
}
export type ProfilePageContainerType = MapDispatchToPropsType & MapStateToPropsType;

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        arrayPosts: state.profileReducer.arrayPosts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (value: string) => {
            dispatch(addPostAC(value))
        },
    }
}

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
