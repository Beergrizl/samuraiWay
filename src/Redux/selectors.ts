import {RootReduxStoreType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";

export const getUsers1 = (state: RootReduxStoreType) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsers1,(users:UserType[]) => {
    return users.filter(u => true)
})

export const getPageSize = (state: RootReduxStoreType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: RootReduxStoreType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: RootReduxStoreType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: RootReduxStoreType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: RootReduxStoreType) => {
    return state.usersPage.followingInProgress
}