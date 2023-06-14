import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {authAC, getAuthDataAC, logoutThunk} from "../../redux/auth-reducer";
import {HeaderComponent} from "./Header";
import {API} from "../../api/API";

export class HeaderClassComponent extends React.Component<HeaderContainerPropsType, any> {

    componentDidMount() {
        API.auth().then(
            res => {
                if (res.data.resultCode === 0) {
                    this.props.getAuthDataAC(res.data.data.id, res.data.data.login, res.data.data.email);
                    this.props.authAC(true);
                }
            }
        )
    }

    render() {
        return <HeaderComponent {...this.props}/>;
    }
};

type MapStateToPropsType = {
    isAuth: boolean;
    id: number | null;
    login: string | null;
    email: string | null;
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
});
export const HeaderContainer = ConnectComponent(HeaderClassComponent);