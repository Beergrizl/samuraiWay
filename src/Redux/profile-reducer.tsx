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
    | ReturnType<typeof deletePost>


export const profileReducer = (state: ProfilePageType = initState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case "DELETE-POST": {
            return {
                ...state, likesCount: state.likesCount
                    .filter(p => p.id != action.postId)
            }
        }

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

export const deletePost = (postId: number) => ({
    type: 'DELETE-POST',
    postId
}) as const

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}