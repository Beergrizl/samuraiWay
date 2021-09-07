import React from "react";
import {ProfileUserType} from "../components/profile/ProfileContainer";


export type likeCountType = {
    id: number,
    message: string,
    count: number,
}

export type ProfilePageType = {
    likesCount: Array<likeCountType>,
    newPostText: string,
    profile: any
}

export let initState ={
    newPostText: '',
    likesCount: [
        {id: 1, message: 'Wats up man?', count: 12},
        {id: 2, message: 'How are ya doing', count: 19}],
    profile: null
}
export type ActionTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewTextActionCreator>
| ReturnType<typeof setUserProfile>

export const profileReducer = (state: ProfilePageType = initState, action: ActionTypes):ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":{
            let newPost = {
                id: 1,
                message: state.newPostText,
                count: 0
            }
            return  {...state,
                likesCount : [...state.likesCount, newPost],
                newPostText : ''
            };
            /*stateCopy.likesCount = [...stateCopy.likesCount]
            stateCopy.likesCount.push(newPost);
            stateCopy.newPostText = ''
            return stateCopy;*/
    }
         case 'UPDATE-NEW-TEXT':{
             return {...state,
                 newPostText : action.newText};
            /*stateCopy.newPostText = action.newText;
            return stateCopy;*/
         }
        case 'SET-USER-PROFILE':{
            return {...state,
                profile : action.profile};
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const;
export const updateNewTextActionCreator = (text: string) => ({
    type: 'UPDATE-NEW-TEXT',
    newText: text
}) as const
export const setUserProfile = (profile: ProfileUserType ) => ({
    type: 'SET-USER-PROFILE',
    profile
}) as const