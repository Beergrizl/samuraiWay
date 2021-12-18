import React from "react";
import {UserType} from "../../Redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export type UsersComponentType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<number>
}


export let UsersComponent = ({
                                 onPageChanged,
                                 totalUsersCount,
                                 pageSize,
                                 currentPage,
                                 users,
                                 ...props
                             }: UsersComponentType) => {

    return <div>
        <Paginator onPageChanged={onPageChanged}
                   currentPage={currentPage}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
        {
            users.map((u) => <User user={u}
                                   key={u.id}
                                   followingInProgress={props.followingInProgress}
                                   follow={props.follow}
                                   unfollow={props.unfollow}
            />)
        }
    </div>
}
