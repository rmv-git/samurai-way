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
import {MessageType, PostType, UserType} from "./types/types";

type PropsType = {
    arrayMessages: Array<MessageType>;
    arrayUsers: Array<UserType>;
    arrayPosts: Array<PostType>;
}
export const App = (props: PropsType) => {
    return (
        <div className={"app-wrapper"}>
            <HeaderComponent/>
            <Navbar/>
            <FooterComponent/>
            <div className={"app-wrapper-content"}>
                <Route exact path={'/profile'}>
                    <ProfilePage arrayPosts={props.arrayPosts}/>
                </Route>
                <Route exact path={'/messages'}>
                    <DialogsPage arrayMessages={props.arrayMessages}
                                 arrayUsers={props.arrayUsers}/>
                </Route>
                <Login/>
                <Users/>
            </div>
        </div>
    );
}
