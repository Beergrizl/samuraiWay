import React from "react";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {logout} from "../../Redux/auth-reducer";
import {Header} from "./Header";


export type mapStateToPropsType = {

    login: string,
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    logout: () => void,
   // getAuthUserData: () => void,
}
export type authPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component <authPropsType> {

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state: RootReduxStoreType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

}) as mapStateToPropsType


export default connect(mapStateToProps, {logout})(HeaderContainer)