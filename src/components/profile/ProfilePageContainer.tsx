import React, {ChangeEvent} from "react";
import {PostType, UserProfileResponseType} from "../../types/types";
import {ProfilePage} from "./ProfilePage";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, getUserProfileAC, getUserProfileThunk, newPostTextAC} from "../../redux/profile-reducer";
import classes from "./ProfilePage.module.css";
import {ProfileDescription} from "./description/ProfileDescription";
import {Posts} from "./posts/Posts";

export class ProfilePageClassComponent extends React.Component<ProfilePageContainerType, any> {
    componentDidMount() {
        // const userID = 18933;
        const userID = 2;
        this.props.getUserProfileThunk(userID)
    }

    render() {
        return (
            <ProfilePage {...this.props} profile={this.props.profile}/>
        )
    }
}

type MapStateToPropsType = {
    arrayPosts: PostType[];
    newPostText: string;
    profile: UserProfileResponseType;
}
// type MapDispatchToPropsType = {
//     addPost: () => void;
//     updatePost: (value: string) => void;
//     getUserProfile: (profile: UserProfileResponseType) => void;
// }
// export type ProfilePageContainerType = MapDispatchToPropsType & MapStateToPropsType;

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        newPostText: state.profileReducer.newPostText,
        arrayPosts: state.profileReducer.arrayPosts,
        profile: state.profileReducer.profile,
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         addPost: () => {
//             dispatch(addPostAC())
//         },
//         updatePost: (value: string) => {
//             dispatch(newPostTextAC(value))
//         },
//         getUserProfile: (profile: UserProfileResponseType) => {
//             dispatch(getUserProfileAC(profile))
//         }
//     }
// }

export const ConnectComponent = connect(mapStateToProps, {
    addPost: addPostAC,
    updatePost: newPostTextAC,
    getUserProfileThunk,
});

export type ProfilePageContainerType = ConnectedProps<typeof ConnectComponent>;

export const ProfilePageContainer = ConnectComponent(ProfilePageClassComponent);
