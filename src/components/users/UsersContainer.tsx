import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    setUsersAC,
    unfollowAC,
    followAC,
    UserType,
    setCurrentPageAC,
    setTotalUsersCountAC
} from "../../Redux/users-reducer";
import {RootReduxStoreType} from "../../Redux/redux-store";
import axios from "axios";
import {UsersComponent} from "./UsersComponent";


export type mapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUser: (users: Array<UserType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPI extends React.Component <UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items/*[{
                id: 1,
                photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F80%2FArtemy_Lebedev_2020.png&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%259B%25D0%25B5%25D0%25B1%25D0%25B5%25D0%25B4%25D0%25B5%25D0%25B2%2C_%25D0%2590%25D1%2580%25D1%2582%25D0%25B5%25D0%25BC%25D0%25B8%25D0%25B9_%25D0%2590%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B5%25D0%25B5%25D0%25B2%25D0%25B8%25D1%2587&tbnid=9q1s0qT1MwAMiM&vet=12ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ..i&docid=cI3LEoM7wJP5NM&w=707&h=635&q=%D0%B0%D1%80%D1%82%D0%B5%D0%BC%D0%B8%D0%B9%20%D0%BB%D0%B5%D0%B1%D0%B5%D0%B4%D0%B5%D0%B2&ved=2ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ',
                followed: true,
                fullName: 'Artem',
                status: 'I am React developer',
                location: {city: 'Minsk', country: 'Belarus'}
            },
                {
                    id: 2,
                    photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F80%2FArtemy_Lebedev_2020.png&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%259B%25D0%25B5%25D0%25B1%25D0%25B5%25D0%25B4%25D0%25B5%25D0%25B2%2C_%25D0%2590%25D1%2580%25D1%2582%25D0%25B5%25D0%25BC%25D0%25B8%25D0%25B9_%25D0%2590%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B5%25D0%25B5%25D0%25B2%25D0%25B8%25D1%2587&tbnid=9q1s0qT1MwAMiM&vet=12ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ..i&docid=cI3LEoM7wJP5NM&w=707&h=635&q=%D0%B0%D1%80%D1%82%D0%B5%D0%BC%D0%B8%D0%B9%20%D0%BB%D0%B5%D0%B1%D0%B5%D0%B4%D0%B5%D0%B2&ved=2ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ',
                    followed: false,
                    fullName: 'Victor',
                    status: 'I am react mentor',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F80%2FArtemy_Lebedev_2020.png&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%259B%25D0%25B5%25D0%25B1%25D0%25B5%25D0%25B4%25D0%25B5%25D0%25B2%2C_%25D0%2590%25D1%2580%25D1%2582%25D0%25B5%25D0%25BC%25D0%25B8%25D0%25B9_%25D0%2590%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B5%25D0%25B5%25D0%25B2%25D0%25B8%25D1%2587&tbnid=9q1s0qT1MwAMiM&vet=12ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ..i&docid=cI3LEoM7wJP5NM&w=707&h=635&q=%D0%B0%D1%80%D1%82%D0%B5%D0%BC%D0%B8%D0%B9%20%D0%BB%D0%B5%D0%B1%D0%B5%D0%B4%D0%B5%D0%B2&ved=2ahUKEwjo3fnbpbbyAhX5xbsIHag9AysQMygAegUIARDDAQ',
                    followed: true,
                    fullName: 'Dimych',
                    status: 'I am school owner',
                    location: {city: 'Moscow', country: 'Russia'}
                },]*/)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
            })

    }

    render() {

        return <UsersComponent totalUsersCount={this.props.totalUsersCount}
                               pageSize={this.props.pageSize}
                               onPageChanged={this.onPageChanged}
                               users={this.props.users}
                               follow={this.props.follow}
                               unfollow={this.props.unfollow}
                               currentPage={this.props.currentPage}

        />
    }
}

let mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)