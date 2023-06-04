import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

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

/*export const renderThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderThree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderThree(state)
});*/
