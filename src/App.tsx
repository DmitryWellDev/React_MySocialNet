import React, {FC} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import AsideContainer from "./Components/Aside/AsideContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


type PropsType = {
    // store: ReduxStoreType
    // dispatch: (action: ActionsTypes) => void
}

const App: FC<PropsType> = (props) => {

    return (
        <div className="App-wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            <div className={'main'}>
                <div className={"App_friends-main"}>
                    <AsideContainer/>
                </div>
                <div className='App-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </div>
    );
}


export default App;
