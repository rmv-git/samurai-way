import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {MessageType, PostType, UserType} from "./types/types";

const arrayPosts: Array<PostType> = [
    {id: 1, text: 'First post', likesCount: 2},
    {id: 2, text: 'Hello', likesCount: 3},
    {id: 3, text: 'Text', likesCount: 4},
];

const arrayUsers: Array<UserType> = [
    {id: 1, name: 'Viktor'},
    {id: 2, name: 'Dimych'},
    {id: 3, name: 'Diana'},
    {id: 4, name: 'Valera'},
];
const arrayMessages: Array<MessageType> = [
    {id: 1, text: 'asdadsfsdf'},
    {id: 2, text: 'sdfsdffdg'},
    {id: 3, text: 'sdfsdf'},
    {id: 4, text: 'sdfsdfdf'},
];

ReactDOM.render(
    <BrowserRouter>
        <App arrayMessages={arrayMessages}
             arrayUsers={arrayUsers}
             arrayPosts={arrayPosts}
        />
    </BrowserRouter>,
    document.getElementById('root')
);
