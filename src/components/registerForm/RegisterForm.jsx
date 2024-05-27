import React from "react";
import './registerForm.css'; // Import the CSS file for register form styling

const RegisterForm = () => {
    return(
        <div className="wrapper">
            <form action="" className="registerForm">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" className="input-box-input" required />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" className="input-box-input" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" className="input-box-input" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" className="input-box-input" required />
                </div>
                <button type="submit">Register</button>
                <div className="login-link">
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;
