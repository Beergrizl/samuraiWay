import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainer  from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import UsersContainer from "./components/users/UsersContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {RootReduxStoreType} from "./Redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";

type mapStateToPropsType = {
    initialised: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType


class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialised){
            return <Preloader/>
        }
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
}

let mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => ({
    initialised: state.app.initialized
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)
