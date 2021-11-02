import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formControls/FormControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootReduxStoreType} from "../../Redux/redux-store";
import style from './../common/formControls/FormControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={"email"} component={Input}
                        validate={[required]}/></div>
            <div><Field placeholder={'Password'} name={"password"} type={"password"} component={Input}
                        validate={[required]}/></div>
            <div><Field component={Input} name={"rememberMe"} type={'checkbox'}/></div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export type PropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void,
    isAuth: boolean
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const Login = (props: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return < Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: RootReduxStoreType) => ({isAuth: state.auth.isAuth})
export default connect(mapStateToProps, {login})(Login)