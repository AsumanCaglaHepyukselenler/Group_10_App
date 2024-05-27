import React, { useState } from "react";
import './loginForm.css';
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "123") {
            navigate("/Admin");
        } else if(username === "group10" && password === "123"){
            setIsLoggedIn(true)
            window.scrollTo(0, 0);
        }
        else
        {
            alert("Invalid username or password!");
        }
    };



    return (
        <div>  
        <div className="wrapper">
            <form onSubmit={handleLogin} className="logForm">
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        className="input-box-input"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    <FontAwesomeIcon icon={faUser} className="logIcon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-box-input"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <FontAwesomeIcon icon={faLock} className="logIcon" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account?<a href="/register">Register</a></p>
                </div>

            </form>
        </div>
        </div>
    )
}

export default LoginForm;
