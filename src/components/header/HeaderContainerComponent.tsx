import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {authAC, getAuthDataAC, isAuthThunk, logoutThunk} from "../../redux/auth-reducer";
import {HeaderComponent} from "./Header";
import {Nullable} from "../../types/types";

export class HeaderClassComponent extends React.Component<HeaderContainerPropsType, any> {

    componentDidMount() {
        this.props.isAuthThunk(this.props.id, this.props.login, this.props.email);
    }

    logOut = () => {
        this.props.logoutThunk();
    }

    render() {
        return <HeaderComponent
            email={this.props.email}
            isAuth={this.props.isAuth}
            logOut={this.logOut}
        />;
    }
}

type MapStateToPropsType = {
    isAuth: boolean,
    id: Nullable<number>,
    login: Nullable<string>,
    email: Nullable<string>,
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
        id: state.authReducer.id,
        login: state.authReducer.login,
        email: state.authReducer.email,
    }
}


export type HeaderContainerPropsType = ConnectedProps<typeof ConnectComponent> & MapStateToPropsType;

const ConnectComponent = connect(mapStateToProps, {
    authAC,
    getAuthDataAC,
    logoutThunk,
    isAuthThunk,
});
export const HeaderContainer = ConnectComponent(HeaderClassComponent);
