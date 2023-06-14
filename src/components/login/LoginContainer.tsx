import React from "react";
import {Login} from "./Login";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {loginThunk} from "../../redux/auth-reducer";

export class LoginClassComponent extends React.Component<LoginContainerPropsType, any> {
    componentDidMount() {
    }

    render() {
        return (
            <Login {...this.props} />
        );
    }
}

type MapStateToPropsType = {

}

const maStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {

  }
}

const ConnectComponent = connect(maStateToProps, {loginThunk});

export type LoginContainerPropsType = ConnectedPropsType & MapStateToPropsType;
type ConnectedPropsType = ConnectedProps<typeof ConnectComponent>;

export const LoginContainer = ConnectComponent(LoginClassComponent);