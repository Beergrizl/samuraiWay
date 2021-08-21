import React from "react";


export type likeCountType = {
    id: number,
    message: string,
    count: number,
}

export type ProfilePageType = {
    likesCount: Array<likeCountType>,
    newPostText: string
}

export let initState ={
    newPostText: '',
    likesCount: [
        {id: 1, message: 'Wats up man?', count: 12},
        {id: 2, message: 'How are ya doing', count: 19}]
}
export type ActionTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewTextActionCreator>

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
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const;
export const updateNewTextActionCreator = (text: string) => ({
    type: 'UPDATE-NEW-TEXT',
    newText: text
}) as const