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
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Preloader} from "../../features/preloader/Preloader";

export class ProfilePageClassComponent extends React.Component<ProfilePageContainerType, any> {

    refreshProfile() {
        let id = Number(this.props.match.params.userId);
        if (!id) {
            return id = 18933;
        }
        this.props.getUserProfileThunk(id);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            this.props.isFetching
                ? <Preloader/>
                : <ProfilePage {...this.props}/>
        )
    }
}

type MapStateToPropsType = {
    arrayPosts: PostType[];
    newPostText: string;
    profile: UserProfileResponseType;
    isFetching: boolean;
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
        isFetching: state.appReducer.isFetching,
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

type PathParamType = {
    userId: string,
}

export type ProfilePageContainerType = ConnectedProps<typeof ConnectComponent> & RouteComponentProps<PathParamType>;
const withRouterComponent = withRouter(ProfilePageClassComponent);
export const ProfilePageContainer = ConnectComponent(withRouterComponent);
