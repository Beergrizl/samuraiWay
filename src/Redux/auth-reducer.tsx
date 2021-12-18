import React from "react";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";


export let initState = {
    id: '',
    email: null,
    login: null,
    isAuth: false
}
export type AuthType = {
    id: string,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type AuthUserDataType = ReturnType<typeof setAuthUserData>

export const authReducer = (state: AuthType = initState, action: AuthUserDataType): AuthType => {
    switch (action.type) {

        case 'auth/SET-USER-DATA':
            return {
                id: action.data.userId,
                email: action.data.email,
                login: action.data.login,
                isAuth: action.data.isAuth
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string, email: string | null, login: string | null, isAuth: boolean) => {
    debugger
    return {
        type: 'auth/SET-USER-DATA',
        data: {userId, email, login, isAuth}
    } as const
}


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }

}
export const login = (email: string, password: string, rememberMe = false)
    : AppThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        dispatch(stopSubmit('login', {_error: response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'}))
    }

}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData('', null, null, false))
    }
}