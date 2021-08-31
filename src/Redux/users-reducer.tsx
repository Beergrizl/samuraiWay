import React from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

export let initState: InitStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
}
export type ActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>


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
                ...state, users: action.users
            }
            case SET_CURRENT_PAGE:{
            return  { ...state, currentPage: action.currentPage}
            }
            case SET_TOTAL_USERS_COUNT:{
            return  { ...state, totalUsersCount: action.count}
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
export const setCurrentPageAC = (currentPage: number) => (
    {type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => (
    {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const)
