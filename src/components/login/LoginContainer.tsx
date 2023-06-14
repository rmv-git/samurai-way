import React from "react";
import {Login} from "./Login";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {loginThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

export class LoginClassComponent extends React.Component<LoginContainerPropsType, any> {
    componentDidMount() {
    }

    render() {

        if (this.props.isAuth) {
            return <Redirect to={`/profile`}/>
        }

        return (
            <Login {...this.props} />
        )

            ;
    }
}

type MapStateToPropsType = {
    isAuth: boolean;
}

const maStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
    }
}

const ConnectComponent = connect(maStateToProps, {loginThunk});

export type LoginContainerPropsType = ConnectedPropsType & MapStateToPropsType;
type ConnectedPropsType = ConnectedProps<typeof ConnectComponent>;

export const LoginContainer = ConnectComponent(LoginClassComponent);