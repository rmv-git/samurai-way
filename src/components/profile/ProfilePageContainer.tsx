import React from "react";
import {PostType, UserProfileResponseType} from "../../types/types";
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, getUserProfileAC, newPostTextAC} from "../../redux/profile-reducer";

type MapStateToPropsType = {
    arrayPosts: PostType[];
    newPostText: string;
    profile: UserProfileResponseType;
}
type MapDispatchToPropsType = {
    addPost: () => void;
    updatePost: (value: string) => void;
    getUserProfile: (profile: UserProfileResponseType) => void;
}
export type ProfilePageContainerType = MapDispatchToPropsType & MapStateToPropsType;

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        newPostText: state.profileReducer.newPostText,
        arrayPosts: state.profileReducer.arrayPosts,
        profile: state.profileReducer.profile,
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
        getUserProfile: (profile: UserProfileResponseType) => {
            dispatch(getUserProfileAC(profile))
        }
    }
}

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
