import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
    UserType,

} from "../../Redux/users-reducer";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {UsersComponent} from "./UsersComponent";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

export type mapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean,
    followingInProgress: Array<number>
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component <UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true );

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <UsersComponent totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            currentPage={this.props.currentPage}
                            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                            followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUser: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/


export default connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingInProgress
    }
)(UsersContainer)