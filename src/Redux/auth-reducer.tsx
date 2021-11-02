// @ts-ignore

import React from "react";
import {authAPI} from "../api/api";
import {AnyAction, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootReduxStoreType} from "./redux-store";
import {stopSubmit} from "redux-form";
// типизация


export let initState = {
    id: '',
    email: null,
    login: null,
    isAuth: false
}
export type AuthType = {
    id: string ,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
export type ActionTypes = AuthUserDataType | SubmitType;
type AuthUserDataType = ReturnType<typeof setAuthUserData>
type SubmitType = ReturnType<typeof stopSubmit>


export const authReducer = (state: AuthType = initState, action: AuthUserDataType): AuthType => {
    switch (action.type) {

        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}
// типизация
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    data: {userId, email, login, isAuth}
}) as const


export const getAuthUserData = () => {
    return (dispatch: Dispatch) =>
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data
                    dispatch(setAuthUserData(userId, email, login, true))
                }
            })
}
export const login = (email: string, password: string, rememberMe = false): ThunkAction<void, RootReduxStoreType, unknown, ActionTypes> => {
    return (dispatch) =>
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {


                    dispatch(stopSubmit('login', {_error: response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'}))
                }
            })
}

export const logout = () => {
    return (dispatch: Dispatch) =>
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
}