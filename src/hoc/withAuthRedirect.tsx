import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean;
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
    }
}

export function withAuthRedirect <T> (Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {

        const {isAuth, ...restProps} = props;

        if (!props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return <Component {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}