import React, {useContext} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import {AuthContext} from "../context/Context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    const login = (event: any) => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Enter login'/>
                <MyInput type="password" placeholder='Enter password'/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;