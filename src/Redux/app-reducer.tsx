import React from "react";
import {getAuthUserData} from "./auth-reducer";
import {AppThunkType} from "./redux-store";


export let initState = {
    initialized: false
}
type initStateType = {
    initialized: boolean
}

type initializedSuccessType = ReturnType<typeof initializedSuccess>

export const appReducer = (state: initStateType = initState, action: initializedSuccessType): initStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}
export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'}) as const


export const initializeApp = (): AppThunkType  => (dispatch)=>{
            let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
            dispatch(initializedSuccess())
        })
    }

