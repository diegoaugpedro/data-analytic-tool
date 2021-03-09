import React from 'react';
import "./login.css";
import { MdEmail, MdLock } from 'react-icons/md';

function Login() {
    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://www.take.net/files/uploads/2020/09/logo-header.svg" alt="Logo Take BLiP" />
            </div>
            <div className="login-right">
                <h1>Data Analytics Tool</h1>
                <div className="inputEmail">
                    <MdEmail />
                    <input type="text" placeholder="Digite seu e-mail" />
                </div>
                <div className="inputPassword">
                    <MdLock />
                    <input type="text" placeholder="Digite sua senha" />
                </div>
                <button type="submit">Acessar</button>
            </div>
        </div>
    );
}

export default Login;