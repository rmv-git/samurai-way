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

export class ProfilePageClassComponent extends React.Component<any, any> {
    componentDidMount() {

    }

    render() {
        return (
            <div className={classes.content}>
                <ProfileDescription/>
                <Posts posts={this.props.arrayPosts}/>
                <div>
                <textarea value={this.props.newPostText}
                          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => this.props.updatePost(event.currentTarget.value)}/>
                    <button onClick={() => this.props.addPost()}>Add</button>
                </div>
            </div>
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
    addPostAC,
    newPostTextAC,
    getUserProfileThunk,
});

export type ProfilePageContainerType = ConnectedProps<typeof ConnectComponent>;

export const ProfilePageContainer = ConnectComponent(ProfilePageClassComponent);
