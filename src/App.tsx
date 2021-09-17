import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import UsersContainer from "./components/users/UsersContainer";
import {Login} from "./components/login/Login";


const App = () => {


    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    );
}


export default App;
