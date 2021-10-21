import React from "react";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
import {MyPostsContainer, } from "./MyPost/MyPostConteiner";
import {mapStateToPropsType, ProfileUserType} from "./ProfileContainer";

export type ProfileInfoPropsType={
    status: string,
    updateStatus: (status: string) => void,
    profile: ProfileUserType
}


export const Profile = (props:ProfileInfoPropsType) => {
    return (
        <div >
            <ProfileInfo profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}/>
            <MyPostsContainer />

        </div>

    );
}