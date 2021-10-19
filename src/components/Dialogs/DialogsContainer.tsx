import React from 'react';
import {Dialogs, DialogsPropsType} from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialog-reducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthredirect";


type MapStateToPropsDialogsType = {
    updateNewMessageBody: (body: string) => void;
    sendMessage: () => void;
}

let mapStateToProps = (state: RootReduxStoreType) => {
    return {
        dialogsPage: state.dialogsPage,
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
let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
