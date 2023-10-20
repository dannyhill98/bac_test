import { useState } from 'react';
import '../css/login.style.css';

function LoginView() {
    const [JWToken, setJWToken] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(username == "" || password == "") {setJWToken(""); return};

        fetch(import.meta.env.VITE_API_URL + "Generate_Token", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => response.json())
            .then(data => { setJWToken(data.JWToken); })
            .catch((error) => {
                setJWToken("");
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div className="login-container">
                <form className="login-form">
                    <div className="login-input-container">
                        <label className="login-input-label" htmlFor="username_input">Username</label>
                        <input className="login-input" id="username_input" type="text" placeholder="Enter your username" onInput={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="login-input-container">
                        <label className="login-input-label " htmlFor="password_input">Password</label>
                        <input className="login-input" id="password_input" type="password" placeholder="Enter your password" onInput={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="login-button-container">
                        <button className="login-button" onClick={handleSubmit} >Login</button>
                    </div>
                </form>
                <div className="token-view">
                    <code>{JWToken}</code>
                </div>
            </div>
        </>
    )
}

export default LoginView;