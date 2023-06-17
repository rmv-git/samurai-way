import React from "react";
import {PostType, UserProfileResponseType} from "../../types/types";
import {ProfilePage} from "./ProfilePage";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {addPostAC, getUserProfileThunk, newPostTextAC} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {Preloader} from "../../features/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

    updatePost = (value: string) => {
        this.props.updatePost(value);
    }
    addPost = () => {
        this.props.addPost();
    }

    render() {

        // if (!this.props.isAuth) {
        //     return <Redirect to={'/login'}/>
        // }

        return (
            this.props.isFetching
                ? <Preloader/>
                : <ProfilePage {...this.props} updatePost={this.updatePost} addPost={this.addPost}/>
        )
    }
}

type MapStateToPropsType = {
    arrayPosts: PostType[];
    newPostText: string;
    profile: UserProfileResponseType;
    isFetching: boolean;
    // isAuth: boolean;
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        newPostText: state.profileReducer.newPostText,
        arrayPosts: state.profileReducer.arrayPosts,
        profile: state.profileReducer.profile,
        isFetching: state.appReducer.isFetching,
        // isAuth: state.authReducer.isAuth,
    }
}

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
export const ProfilePageContainer = withAuthRedirect(ConnectComponent(withRouterComponent));
