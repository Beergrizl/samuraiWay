import React from "react";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
import {MyPostsContainer, } from "./MyPost/MyPostConteiner";
import {mapStateToPropsType} from "./ProfileContainer";




export const Profile = (props:mapStateToPropsType) => {
    return (
        <div >
            <ProfileInfo profile={props.profile} /*isAuth={props.isAuth}*//>
            <MyPostsContainer />

        </div>

    );
}