

import {RootReduxStoreType} from "./redux-store";

export const getUsers1 = (state: RootReduxStoreType) => {
    return state.usersPage.users
}
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