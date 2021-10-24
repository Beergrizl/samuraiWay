import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import  thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

export let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
     usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type RootReduxStoreType = ReturnType<typeof reducer>;
export let store: Store = createStore(reducer, applyMiddleware(thunkMiddleware));

