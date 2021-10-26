import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {addMessageActionCreator} from "../../Redux/dialog-reducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthredirect";


type MapStateToPropsDialogsType = {
    sendMessage: (newMessageBody: string) => void;
}

let mapStateToProps = (state: RootReduxStoreType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapStateToPropsDialogsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }
    }
}
export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)