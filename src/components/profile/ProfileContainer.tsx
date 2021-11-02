import React from "react";
import {Profile} from "./Profile";

import {connect} from "react-redux";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthredirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
type PhotosProfileType = {
    small: string,
    large: string
}
type ContactsType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    "mainLink": null
}
export  type ProfileUserType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosProfileType,

}

export type mapStateToPropsType = {
    profile: ProfileUserType,
    status: string,
    authorizedUserId: string,
    auth:boolean
}
export type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void
}

export type OwnProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(Number(userId));
        this.props.getStatus(Number(userId))

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}/>
        );
    }
}


let mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    auth: state.auth.isAuth

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)