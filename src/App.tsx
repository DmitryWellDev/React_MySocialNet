import React from 'react';
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
import Login from "./Components/Login/Login";
import {Subscriptions} from "./Components/Subscriptions/Subscriptions";
import UserLogin from "./Components/Login/Login";
import LoginPage from "./Components/Login/LoginPage";

const App = () => {
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
                    <Route path='/login' render={() => <UserLogin/>}/>
                    <Route path='/subscriptions' render={() => <Subscriptions/>}/>
                    <Route path='/loginPage' render={() => <LoginPage/>}/>
                </div>
            </div>
        </div>
    );
}


export default App;
