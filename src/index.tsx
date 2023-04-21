import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./types/types";
import {store} from "./redux/store";

// ReactDOM.render(
//     <BrowserRouter>
//         <App state={state}
//         />
//     </BrowserRouter>,
//     document.getElementById('root')
// );

// export const renderThree = (state: StateType) => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App state={state} addPost={addPost} sendMessage={sendMessage}/>
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }
// renderThree(state);

export const renderThree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderThree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderThree(state)
});
