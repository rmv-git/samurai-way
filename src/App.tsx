import React from 'react';
import './App.css';
import {FooterComponent} from "./components/footer/Footer";
import {Route} from "react-router-dom";
import {
    ProfilePageContainer
} from "./components/profile/ProfilePageContainer";
import {DialogsPageContainer} from "./components/dialogs/DialogsPageContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import {HeaderContainer} from "./components/header/HeaderContainerComponent";
import {LoginContainer} from "./components/login/LoginContainer";
import {Navbar} from './components/navbar/Navbar';
import {appInitializingThunk} from "./redux/app-reducer";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "./redux/redux-store";

export class App extends React.Component <AppComponentType, any> {

    componentDidMount() {
        this.props.appInitializingThunk(this.props.isInitialized);
    }

    render() {
        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar/>
                <FooterComponent/>
                <div className={"app-wrapper-content"}>
                    <Route exact path={'/profile/:userId?'}>
                        <ProfilePageContainer/>
                    </Route>
                    <Route exact path={'/messages'}>
                        <DialogsPageContainer/>
                    </Route>
                    <Route exact path={'/login'}>
                        <LoginContainer/>
                    </Route>
                    <Route exact path={'/users'}>
                        <UsersContainer/>
                    </Route>
                </div>
            </div>
        );
    }
}

type MapStateToPropsType = {
    isInitialized: boolean;
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isInitialized: state.appReducer.isInitialized,
    }
}

export const ConnectComponent = connect(mapStateToProps, {appInitializingThunk});


export type AppComponentType = ConnectedProps<typeof ConnectComponent> & MapStateToPropsType;
export const AppContainer = ConnectComponent(App);
