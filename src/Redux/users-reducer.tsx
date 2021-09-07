import React from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_TOGGLE_IS_FETCHING ='SET_TOGGLE_IS_FETCHING';

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
    currentPage: number,
    isFetching: boolean
}

export let initState: InitStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}
export type ActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>



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
            case SET_TOGGLE_IS_FETCHING:{
                    return  { ...state, isFetching: action.isFetching}
            }

        default:
            return state;
    }
}

export const follow = (userId: number) => (
    {type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => (
    {type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => (
    {type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => (
    {type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => (
    {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => (
    {type:SET_TOGGLE_IS_FETCHING, isFetching} as const)