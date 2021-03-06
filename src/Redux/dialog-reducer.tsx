import React from "react";


export type ActionTypes = ReturnType<typeof addMessageActionCreator>

export let initialState: DialogsPageType = {
    dialogsData: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Tania'},
        {id: 3, name: 'Mitia'},
        {id: 4, name: 'Vasia'},
        {id: 5, name: 'Natasha'},
        {id: 6, name: 'Gena'},
    ],
    messageData: [
        {id: 1, message: 'How are ya doing'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yo'},
    ]

}
export type dialogsDataType = {
    id: number,
    name: string
}

export type messageDataType = {
    id: number,
    message: string,


}
export type DialogsPageType = {
    dialogsData: Array<dialogsDataType>,
    messageData: Array<messageDataType>,

}

export const dialogReducer = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messageData: [...state.messageData, {id: 4, message: body}]
            } as DialogsPageType
        default:
            return state
    }
}
export const addMessageActionCreator = (newMessageBody: string) => ({
    type: 'ADD-MESSAGE',
    newMessageBody
}) as const
