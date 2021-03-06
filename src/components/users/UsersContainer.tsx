import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow,
    UserType,
} from "../../Redux/users-reducer";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {UsersComponent} from "./UsersComponent";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthredirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers1, getUsersSuperSelector
} from "../../Redux/selectors";


export type mapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean,
    followingInProgress: Array<number>,
    }
export type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component <UsersPropsType> {
    componentDidMount() {
        const{currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
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
                            followingInProgress={this.props.followingInProgress}
                           />
        </>
    }
}

/*let mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
let mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => {
    return {
        //users: getUsers1(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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


export default compose<React.ComponentType>(connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers
    }),
    //withAuthRedirect
)(UsersContainer)