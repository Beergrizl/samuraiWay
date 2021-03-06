import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./DialogItem/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from '../../Redux/dialog-reducer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/formControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";

export type FormDataType = {
    newMessageBody: string
}
export type DialogsPropsType = {
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogsPageType,
}
export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage
    let dialogElement = state.dialogsData.map(d => <Dialog name={d.name} key={d.id} id={d.id}/>)
    let messageElement = state.messageData.map(m => <Message title={m.message} key={m.id}/>)

    let addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
                {messageElement}
            </div>
        </ div>
    )
}
let maxLength20=maxLengthCreator(20)
export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea}
                        placeholder={'enter your message'}
                        name={'newMessageBody'}
                        validate={[required, maxLength20]}
            /></div>
            <div>
                <button> Add message</button>
            </div>
        </form>)
}
const AddMessageReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)