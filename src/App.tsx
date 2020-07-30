import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import state, {addMessage, RootStateType, updateNewMessageText} from "./redux/state";


export type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: (w: string) => void
    updateNewMessageText: (newText: string) => void
}


function App(props: AppPropsType) {

    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar sitebar={props.state.sitebar}/>
            <div className='App-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                              addMessage={addMessage}
                                                              updateNewMessageText={updateNewMessageText}
                                                              newPostMessageText={state.dialogsPage.newMessageText}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              addPost={props.addPost}
                                                              updateNewPostText={props.updateNewPostText}
                                                              newPostText={state.profilePage.newPostText}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;
