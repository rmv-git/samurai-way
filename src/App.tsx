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
import {ActionsType} from "./types/actions";
import {RootStateType} from "./redux/redux-store";
import {ProfilePageContainer} from "./components/profile/ProfilePageContainer";
import {DialogsPageContainer} from "./components/dialogs/DialogsPageContainer";

type PropsType = {
    state: RootStateType;
    dispatch: (action: ActionsType) => void;
}
export const App = (props: PropsType) => {
    return (
        <div className={"app-wrapper"}>
            <HeaderComponent/>
            <Navbar arrayUsers={props.state.sidebarReducer.arrayUsers}/>
            <FooterComponent/>
            <div className={"app-wrapper-content"}>
                <Route exact path={'/profile'}>
                    <ProfilePageContainer arrayPosts={props.state.profileReducer.arrayPosts}
                                 dispatch={props.dispatch}
                    />
                </Route>
                <Route exact path={'/messages'}>
                    <DialogsPageContainer arrayMessages={props.state.dialogsReducer.arrayMessages}
                                 arrayUsers={props.state.dialogsReducer.arrayUsers}
                                 dispatch={props.dispatch}
                    />
                </Route>
                <Login/>
                <Users/>
            </div>
        </div>
    );
}
