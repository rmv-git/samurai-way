import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {authAC} from "../../redux/auth-reducer";
import {HeaderComponent} from "./Header";

export class HeaderClassComponent extends React.Component<HeaderContainerPropsType, any> {

    componentDidMount() {
    }

    render() {
        return <HeaderComponent {...this.props}/>;
    }
};

type MapStateToPropsType = {
    isAuth: boolean;
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
    }
}


export type HeaderContainerPropsType = ConnectedProps<typeof ConnectComponent>;

const ConnectComponent = connect(mapStateToProps, {
    authAC
});
export const HeaderContainer = ConnectComponent(HeaderClassComponent);