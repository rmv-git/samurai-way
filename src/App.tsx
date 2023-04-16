import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {HeaderComponent} from "./components/header/Header";
import {ProfilePage} from "./components/profile/ProfilePage";
import {DialogsPage} from "./components/dialogs/DialogsPage";
import {Login} from "./components/login/Login";
import {Users} from "./components/users/Users";
import {FooterComponent} from "./components/footer/Footer";
import {Route} from "react-router-dom";

export const App = () => {
    return (
        <div className={"app-wrapper"}>
            <HeaderComponent/>
            <Navbar/>
            <FooterComponent/>
            <div className={"app-wrapper-content"}>
                <Route exact path={'/profile'}>
                    <ProfilePage/>
                </Route>
                <Route exact path={'/messages'}>
                    <DialogsPage/>
                </Route>
                <Login/>
                <Users/>
            </div>
        </div>
    );
}
