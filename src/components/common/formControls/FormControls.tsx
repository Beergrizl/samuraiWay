import React, {FC} from "react";

import style from './FormControls.module.css'
import {WrappedFieldProps} from "redux-form/lib/Field";







export const Textarea: FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
            <div><textarea {...input} {...props}/></div>
            {hasError && <span> {meta.error}</span>}
        </div>
    )
}


export const Input: FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
            <div><input {...input} {...props}/></div>
            {hasError && <span> {meta.error}</span>}
        </div>
    )
}