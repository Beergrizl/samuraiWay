import React from 'react';
import s from './../Dialogs.module.css'





type messagePropsType = {
    title: string
}
export const Message = (props: messagePropsType) => {
    return        <div className={s.message}> {props.title} </div>

}
