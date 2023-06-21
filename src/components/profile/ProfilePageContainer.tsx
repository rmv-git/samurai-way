import React, {ComponentType} from "react";
import {PostType, UserProfileResponseType} from "../../types/types";
import {ProfilePage} from "./ProfilePage";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    addPostAC,
    getUserProfileThunk,
    getUserStatusThunk,
    newPostTextAC,
    updateUserStatusThunk
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Preloader} from "../../features/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {arrayPostsSl, errorSl, isFetchingSl, profileSl, statusSl} from "../../selectors/Seleletors";

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

    addPost = (value: string) => {
        this.props.addPost(value);
    }
    updateStatus = (value: string) => {
        this.props.updateUserStatusThunk(value);
    }

    render() {

        return (
            this.props.isFetching
                ? <Preloader/>
                : <ProfilePage {...this.props}
                               addPost={this.addPost}
                               error={this.props.error}
                               updateUserStatus={this.updateStatus}/>
        )
    }
}

type MapStateToPropsType = {
    arrayPosts: PostType[];
    profile: UserProfileResponseType;
    isFetching: boolean;
    status: string;
    error: string[];
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        arrayPosts: arrayPostsSl(state),
        profile: profileSl(state),
        isFetching: isFetchingSl(state),
        status: statusSl(state),
        error: errorSl(state),
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

export const ProfilePageContainer = compose<ComponentType>(
    withRouter,
    withAuthRedirect,
    ConnectComponent,
)(ProfilePageClassComponent);