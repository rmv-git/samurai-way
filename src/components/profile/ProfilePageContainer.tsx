import React from "react";
import {PostType} from "../../types/types";
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, newPostTextAC} from "../../redux/profile-reducer";

type MapStateToPropsType = {
    arrayPosts: PostType[];
    newPostText: string;
}
type MapDispatchToPropsType = {
    addPost: () => void;
    updatePost: (value: string) => void;
}
export type ProfilePageContainerType = MapDispatchToPropsType & MapStateToPropsType;

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        newPostText: state.profileReducer.newPostText,
        arrayPosts: state.profileReducer.arrayPosts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updatePost: (value: string) => {
            dispatch(newPostTextAC(value))
        },
    }
}

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
