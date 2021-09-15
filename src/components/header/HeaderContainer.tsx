import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {AuthType, setAuthUserData} from "../../Redux/auth-reducer";
import {Header} from "./Header";

export type mapStateToPropsType ={
    login: string,
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    setAuthUserData: ( auth: AuthType) => void,
}
export type authPropsType = mapStateToPropsType & mapDispatchToPropsType
class HeaderContainer extends React.Component <authPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
if (response.data.resultCode === 0) {
   // let {id, login, email} = response.data.data
    this.props.setAuthUserData(response.data.data)
}
            })
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)