import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {setUserProfile} from "../../Redux/profile-reducer";


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
    photos: PhotosProfileType
}

export type mapStateToPropsType = {
    profile: ProfileUserType
}
export type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileUserType) => void,
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component <ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => ({
    profile: state.profilePage.profile

})
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);