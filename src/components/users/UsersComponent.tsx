import React from "react";
import styles from "./users.module.css";
import userPhoto from './../../asets/images/images.jpg'
import {UserType} from "../../Redux/users-reducer";

export type UsersComponentType={
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    onPageChanged : (pageNumber: number) => void
    follow: (userId: number ) => void,
    unfollow: (userId: number) => void,
   }


export let UsersComponent = (props: UsersComponentType)=>{

    let pageCount =Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pageCount; i++){
        pages.push(i);
    }
        return <div>
            <div>
                {pages.map(p=>{
                    // @ts-ignore
                    return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>
                    }
                )}
            </div>

            {
                props.users.map((u) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div> {u.followed
                    ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}> unFollow </button>
                    : <button onClick={() => {
                        props.follow(u.id)
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
