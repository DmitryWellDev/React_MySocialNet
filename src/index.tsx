import './index.css';
import state, {RootStateType, subscribe} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import {updateNewPostText, addPost} from './redux/state'
import {BrowserRouter} from "react-router-dom";

export type RerenderEntireTreeType = (state: RootStateType) => void


 let RerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));

}



RerenderEntireTree(state)

subscribe(RerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
