import React from "react";
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (

    <div className={s.content}>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU'/>
        </div>

        <div className={s.description}>ava + description</div>

    </div>

);
}