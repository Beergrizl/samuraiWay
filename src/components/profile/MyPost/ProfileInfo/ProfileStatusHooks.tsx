import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import {mapStateToPropsType} from "../../ProfileContainer";


type StatusType = {
    status: string,
    updateStatus: (status: string) => void
}

const ProfileStatusHooks =(props: StatusType)=> {

       let[editMode,setEditMode]  =useState(false)
       let[status,setStatus]  =useState(props.status)

    useEffect(()=>{
       setStatus(props.status)
    },[props.status])

    const activateEditMode=()=>{
           setEditMode(true)
    }
    const deactivateEditMode=()=>{
           setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '__________'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}  autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>)
}


export default ProfileStatusHooks;