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
import {StateType} from "./types/types";

type PropsType = {
    state: StateType;
    addPost: (value: string) => void;
    sendMessage: (value: string) => void;
}
export const App = (props: PropsType) => {
    return (
        <div className={"app-wrapper"}>
            <HeaderComponent/>
            <Navbar/>
            <FooterComponent/>
            <div className={"app-wrapper-content"}>
                <Route exact path={'/profile'}>
                    <ProfilePage arrayPosts={props.state.profilePage.arrayPosts} addPost={props.addPost}/>
                </Route>
                <Route exact path={'/messages'}>
                    <DialogsPage arrayMessages={props.state.dialogsPage.arrayMessages}
                                 arrayUsers={props.state.dialogsPage.arrayUsers}
                                 sendMessage={props.sendMessage}/>
                </Route>
                <Login/>
                <Users/>
            </div>
        </div>
    );
}
