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
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field placeholder={'Login'} name={"email"} component={Input}
                        validate={[required]}/></div>
            <div><Field placeholder={'Password'} name={"password"} type={"password"} component={Input}
                        validate={[required]}/></div>
            <div><Field component={Input} name={"rememberMe"} type={'checkbox'}/></div>
            {error && <div className={style.formSummaryError}>
                {error}
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
const Login = ({login,isAuth}: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return < Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: RootReduxStoreType) => ({isAuth: state.auth.isAuth})
export default connect(mapStateToProps, {login})(Login)