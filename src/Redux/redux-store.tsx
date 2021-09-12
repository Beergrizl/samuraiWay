import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

export let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
     usersPage: usersReducer,
    auth: authReducer
})

export type RootReduxStoreType = ReturnType<typeof reducer>;
export let store: Store = createStore(reducer);

