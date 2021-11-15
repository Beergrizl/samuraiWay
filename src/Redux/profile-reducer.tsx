import React from "react";
import {ProfileUserType} from "../components/profile/ProfileContainer";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";


export type likeCountType = {
    id: number,
    message: string,
    count: number,
}

export type ProfilePageType = {
    likesCount: Array<likeCountType>,
    profile: any,
    status: string
}


export let initState = {
    likesCount: [
        {id: 1, message: 'Wats up man?', count: 12},
        {id: 2, message: 'How are ya doing', count: 19}],
    profile: null,
    status: ''
}
export type ActionTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export const profileReducer = (state: ProfilePageType = initState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 1,
                message: action.addNewPost,
                count: 0
            }
            return {
                ...state,
                likesCount: [...state.likesCount, newPost],
            };
        }

        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state
    }
}

export const addPostActionCreator = (addNewPost: string) => ({
    type: 'ADD-POST',
    addNewPost
}) as const;

export const setUserProfile = (profile: ProfileUserType) => ({
    type: 'SET-USER-PROFILE',
    profile
}) as const

export const setStatus = (status: string) => ({
    type: 'SET-STATUS',
    status
}) as const

export const getUserProfile = (userId: number) => (dispatch: Dispatch) =>
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })

export const getStatus = (userId: number) => (dispatch: Dispatch) =>
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
export const updateStatus = (status: string) => (dispatch: Dispatch) =>
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })