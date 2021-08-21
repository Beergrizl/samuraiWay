import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setUsersAC, unfollowAC, followAC, UserType, InitStateType} from "../../Redux/users-reducer";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {Users} from "./Users";


type mapStateToPropsType={
    users: Array<UserType>
}

type mapDispatchToPropsType={
    follow: (userId: number ) => void,
    unfollow: (userId: number) => void,
    setUser: (users: Array<UserType>)=> void
}

export type UsersPropsType= mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType=> {
    return {
        follow: (userId: number ) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUser: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)