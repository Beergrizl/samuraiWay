import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {BrowserRouter, HashRouter, Route, withRouter} from 'react-router-dom';
//import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
//import ProfileContainer  from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import UsersContainer from "./components/users/UsersContainer";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {RootReduxStoreType, store} from "./Redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
    import('./components/Dialogs/DialogsContainer')
        .then(({DialogsContainer}) => ({default: DialogsContainer})),
);
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

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
        if (!this.props.initialised) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={withSuspense(DialogsContainer) }/>
                    <Route path='/profile/:userId?' render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                            <ProfileContainer/>
                        </React.Suspense>
                    }}/>
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
let AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)
const SamuraiJSApp = () => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default SamuraiJSApp