import React from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

type photosType = {
    small: string,
    large: string
}

export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    photos: photosType
}
export type InitStateType = {
    users: Array<UserType>
}

export let initState: InitStateType = {
    users: []
}
export type ActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>


export const usersReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

export const followAC = (userId: number) => (
    {type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => (
    {type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => (
    {type: SET_USERS, users} as const)