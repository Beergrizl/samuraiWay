import React from "react";
import {ProfileInfo} from "./MyPost/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostConteiner";




export const Profile = () => {
    return (
        <div >
            <ProfileInfo/>
            <MyPostsContainer />

        </div>

    );
}