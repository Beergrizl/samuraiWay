import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import {mapStateToPropsType, ProfileUserType} from "../../ProfileContainer";
import ProfileStatus from "./ProfileStatus";
import {ProfileInfoPropsType} from "../../Profile";
import ProfileStatusHooks from "./ProfileStatusHooks";


export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div className={s.content}>
            <div className={s.description}>
                <img src={props.profile.photos.small}/>
            </div>
            <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>

    );
}