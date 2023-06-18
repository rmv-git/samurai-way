import React from "react";
import {PostType, UserProfileResponseType} from "../../types/types";
import {ProfilePage} from "./ProfilePage";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    addPostAC,
    getUserProfileThunk,
    getUserStatusThunk,
    newPostTextAC, updateUserStatusThunk
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Preloader} from "../../features/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export class ProfilePageClassComponent extends React.Component<ProfilePageContainerType, any> {

    refreshProfile() {
        let id = this.props.match.params.userId;
        if (!id) {
            id = String(18933);
        }
        this.props.getUserProfileThunk(Number(id));
        this.props.getUserStatusThunk(Number(id));
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    updatePost = (value: string) => {
        this.props.updatePost(value);
    }
    addPost = () => {
        this.props.addPost();
    }
    updateStatus = (value: string) => {
        this.props.updateUserStatusThunk(value);
    }

    render() {

        return (
            this.props.isFetching
                ? <Preloader/>
                : <ProfilePage {...this.props}
                               updatePost={this.updatePost}
                               addPost={this.addPost}
                               updateUserStatus={this.updateStatus}/>
        )
    }
}

type MapStateToPropsType = {
    arrayPosts: PostType[];
    newPostText: string;
    profile: UserProfileResponseType;
    isFetching: boolean;
    status: string;
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        newPostText: state.profileReducer.newPostText,
        arrayPosts: state.profileReducer.arrayPosts,
        profile: state.profileReducer.profile,
        isFetching: state.appReducer.isFetching,
        status: state.profileReducer.status,
    }
}

export const ConnectComponent = connect(mapStateToProps, {
    addPost: addPostAC,
    updatePost: newPostTextAC,
    getUserProfileThunk,
    getUserStatusThunk,
    updateUserStatusThunk,
});

type PathParamType = {
    userId: string,
}

export type ProfilePageContainerType = ConnectedProps<typeof ConnectComponent> & RouteComponentProps<PathParamType>;
const withRouterComponent = withRouter(ProfilePageClassComponent);
export const ProfilePageContainer = withAuthRedirect(ConnectComponent(withRouterComponent));
