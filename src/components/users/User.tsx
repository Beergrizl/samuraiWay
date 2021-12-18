import React from "react";
import styles from "./users.module.css";
import userPhoto from './../../asets/images/images.jpg'
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";

export type UserComponentType = {
    user: UserType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<number>
}


export let User = ({user, followingInProgress, follow, unfollow}: UserComponentType) => {

    return <div>
            <span>
                <div>
                    <NavLink to={'./profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                </NavLink>
                    </div>
                <div> {user.followed
                    ? <button disabled={followingInProgress
                        .some((id: number) => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}> unFollow </button>
                    : <button disabled={followingInProgress
                        .some((id: number) => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}> Follow </button>}
                </div>
            </span>

        <span>
<span>
    <div> {user.name}</div>
    <div> {user.status}</div>
</span>
            {/*<span>
                        <div> {'user.location.country'}</div>
                        <div> {'user.location.city'}</div>
                    </span>*/}

            </span>
    </div>
}
