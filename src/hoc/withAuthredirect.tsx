import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootReduxStoreType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {ProfileUserType} from "../components/profile/ProfileContainer";

type mapStateToPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootReduxStoreType): mapStateToPropsType => {
  return {
      isAuth: state.auth.isAuth
  }
}

export  function withAuthRedirect<T>(Component: ComponentType<T>){

    function RedirectComponent(props: mapStateToPropsType) {
        let {isAuth, ...resProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...resProps as T}/>
    }

    let ConnectedAuthRedirectComponent =connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}