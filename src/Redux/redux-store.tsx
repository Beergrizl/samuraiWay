import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";

export let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
     usersPage: usersReducer
})

export type RootReduxStoreType = ReturnType<typeof reducer>;
export let store: Store = createStore(reducer);

