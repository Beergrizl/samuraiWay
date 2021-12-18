import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import { authReducer, setAuthUserData} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer, stopSubmit} from 'redux-form';
import {appReducer, initializedSuccess} from "./app-reducer";

export let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})







export type RootReduxStoreType = ReturnType<typeof reducer>;
export let store: Store = createStore(reducer, applyMiddleware(thunkMiddleware));

 type AppActionTypes = ReturnType<typeof setAuthUserData>
    | ReturnType<typeof stopSubmit>
    | ReturnType<typeof initializedSuccess>

    export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootReduxStoreType, unknown, AppActionTypes>


