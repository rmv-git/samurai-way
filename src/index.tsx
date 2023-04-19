import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, sendMessage, state} from "./redux/state";
import {StateType} from "./types/types";

// ReactDOM.render(
//     <BrowserRouter>
//         <App state={state}
//         />
//     </BrowserRouter>,
//     document.getElementById('root')
// );

export const renderThree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} sendMessage={sendMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderThree(state);