import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
//import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
//import {ActionTypes, ReducersFromStoreType, RootStateType, StoreType} from "./Redux/Store";

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";
//import {RootReduxStoreType} from "./Redux/redux-store";

/*type AppType = {

    store: RootReduxStoreType
}*/


const App = (/*props: AppType*/) => {


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}


export default App;
