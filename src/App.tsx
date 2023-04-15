import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {HeaderComponent} from "./components/header/Header";
import {ProfilePage} from "./components/profile/ProfilePage";
import {DialogsPage} from "./components/dialogs/DialogsPage";
import {Login} from "./components/login/Login";
import {Users} from "./components/users/Users";

export const App = () => {
    return (
        <div className={"app-wrapper"}>
            <HeaderComponent/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <ProfilePage/>
                <DialogsPage/>
                <Login/>
                <Users/>
            </div>
        </div>
    );
}
