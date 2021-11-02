import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';




type HeaderPropsType={
    login: string,
    isAuth: boolean,
    logout: () => void
}
export const Header = (props:HeaderPropsType) => {
    return (

        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct01PK0ylQKeDyQyqzQFabAfyAHqrxuJ2mw&usqp=CAU " alt={''}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>
                    :<NavLink to={'./login'}>Login </NavLink>}
            </div>
        </header>

    );
}