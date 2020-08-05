import React, {FC} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {ActionsTypes, store, StoreType} from "./redux/state";


type PropsType = {
    store: StoreType
    // addPost: (newText: string) => void
    // updateNewPostText: (newText: string) => void
    // addMessage: (w: string) => void
    // updateNewMessageText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const App: FC<PropsType> = (props) => {
const state = props.store.getState()

    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar sitebar={state.sitebar}/>
            <div className='App-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage}
                                                              newPostMessageText={state.dialogsPage.newMessageText}
                                                              dispatch={props.store.dispatch.bind(props.store)}
                                                              // addMessage={props.store.addMessage.bind(props.store)}
                                                              // updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                                                              />}/>
                <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                              newPostText={state.profilePage.newPostText}
                                                              dispatch={props.store.dispatch.bind(props.store)}
                                                              // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                                                              />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;
