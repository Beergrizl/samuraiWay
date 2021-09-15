import React from "react";
import styles from "./users.module.css";
import userPhoto from './../../asets/images/images.jpg'
import {toggleFollowingInProgress, UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";




export type UsersComponentType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void,
    followingInProgress: Array<number>
}


export let UsersComponent = (props: UsersComponentType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                    // @ts-ignore
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                }
            )}
        </div>

        {
            props.users.map((u) => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'./profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </NavLink>
                    </div>
                <div> {u.followed
                    ? <button disabled={props.followingInProgress.some((id: number)=> id===u.id)} onClick={() => {
                        props.toggleFollowingInProgress(true, u.id);
                        axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                        withCredentials: true, headers:{
                        "API-KEY": "d3f5a5ec-7ebf-4ca3-ba3f-86a0fe38c919"}
                        } )
                            .then(response => {
                                if(response.data.resultCode === 0){
                                props.unfollow(u.id)
                                }
                                props.toggleFollowingInProgress(false, u.id);

                            })

                    }}> unFollow </button>
                    : <button disabled={props.followingInProgress.some((id: number)=> id===u.id)} onClick={() => {
                        props.toggleFollowingInProgress(true, u.id);
                        axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {},{
                            withCredentials: true, headers:{
                                "API-KEY": "d3f5a5ec-7ebf-4ca3-ba3f-86a0fe38c919"}
                        } )
                            .then(response => {
                                if(response.data.resultCode === 0){
                                    props.follow(u.id)}
                                props.toggleFollowingInProgress(false, u.id);
                            })
                    }}> Follow </button>}

                </div>
            </span>

                <span>
<span>
    <div> {u.name}</div>
    <div> {u.status}</div>
</span>
                    {/*<span>
                        <div> {'u.location.country'}</div>
                        <div> {'u.location.city'}</div>
                    </span>*/}

            </span>
            </div>)
        }
    </div>

}
