import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import {mapStateToPropsType} from "./HeaderContainer";

export const Header = (props:mapStateToPropsType) => {
    return (

        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct01PK0ylQKeDyQyqzQFabAfyAHqrxuJ2mw&usqp=CAU "/>
            <div className={s.loginBlock}>
                {props.isAuth? props.login
  :<NavLink to={'./login'}>Login </NavLink>}
            </div>
        </header>

    );
}