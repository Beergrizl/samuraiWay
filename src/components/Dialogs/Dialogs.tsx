import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./DialogItem/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType } from '../../Redux/dialog-reducer';
import { Redirect } from 'react-router-dom';


type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType,
    isAuth: boolean
}



export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage
    let dialogElement = state.dialogsData.map(d => <Dialog name={d.name} key={d.id} id={d.id}/>)
    let messageElement = state.messageData.map(m => <Message title={m.message} key={m.id}/>)
    let newMessageBody = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = () => {
        if (newMessageBody.current) {
            let body = newMessageBody.current.value
            props.updateNewMessageBody(body);

        }
    }

if (!props.isAuth) return <Redirect to ={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>
                    <div><textarea onChange={onMessageChange}
                                   ref={newMessageBody}
                        /*value={props.newMessageDialog}*//></div>
                </div>
                <div>
                    <button onClick={addMessage}> Add message</button>
                </div>
                {messageElement}
            </div>
        </ div>
    )
}