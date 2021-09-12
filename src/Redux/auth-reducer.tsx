import React from "react";

export type AuthType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

export let initState ={
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export type ActionTypes = ReturnType<typeof setAuthUserData>

export const authReducer = (state: any = initState, action: ActionTypes):AuthType => {
    switch (action.type) {

        case 'SET-USER-DATA':
            return {...state,
                ...action.data,
                isAuth: true

        }
        default:
            return state
    }
}

export const setAuthUserData = (data: AuthType) => ({
    type: 'SET-USER-DATA',
     data
}) as const
