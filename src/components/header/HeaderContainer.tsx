import React from "react";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../Redux/redux-store";
import {getAuthUserData} from "../../Redux/auth-reducer";
import {Header} from "./Header";


export type mapStateToPropsType = {
    login: string,
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    getAuthUserData: () => void,
}
export type authPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component <authPropsType> {
    componentDidMount() {

        this.props.getAuthUserData()

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


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)