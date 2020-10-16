import React, {FC} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from './Components/Profile/Profile';
import {Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import UsersContainer from "./Components/Users/UsersContainer";


type PropsType = {
    // store: ReduxStoreType
    // dispatch: (action: ActionsTypes) => void
}

const App: FC<PropsType> = (props) => {

    return (
        <div className="App-wrapper">
            <Header/>
            <NavbarContainer/>
            <div className='App-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}


export default App;
