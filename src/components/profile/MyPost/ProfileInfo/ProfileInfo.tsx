import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import {mapStateToPropsType, ProfileUserType} from "../../ProfileContainer";
import ProfileStatus from "./ProfileStatus";
import {ProfileInfoPropsType} from "../../Profile";


export const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (

    <div className={s.content}>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU'/>
        </div>

        <div className={s.description}>
            <img src={props.profile.photos.small}/>
            ava + description</div>
<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>

);
}