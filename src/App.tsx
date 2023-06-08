import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {HeaderComponent} from "./components/header/Header";
import {Login} from "./components/login/Login";
import {FooterComponent} from "./components/footer/Footer";
import {Route} from "react-router-dom";
import {ProfilePageContainer} from "./components/profile/ProfilePageContainer";
import {DialogsPageContainer} from "./components/dialogs/DialogsPageContainer";
import {NavbarContainer} from "./components/navbar/NavbarContainer";
import {UsersContainer} from "./components/users/UsersContainer";

export const App = () => {
    return (
        <div className={"app-wrapper"}>
            <HeaderComponent/>
            <NavbarContainer/>
            <FooterComponent/>
            <div className={"app-wrapper-content"}>
                <Route exact path={'/profile'}>
                    <ProfilePageContainer/>
                </Route>
                <Route exact path={'/messages'}>
                    <DialogsPageContainer/>
                </Route>
                <Login/>
                <Route exact path={'/users'}>
                    <UsersContainer />
                </Route>
            </div>
        </div>
    );
}
