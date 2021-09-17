import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialog-reducer";




type MapStateToPropsDialogsType = {
    updateNewMessageBody: (body: string) => void;
    sendMessage: () => void;
}

let mapStateToProps = (state: RootReduxStoreType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth

    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapStateToPropsDialogsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
