import React, { useState } from 'react';
import './Login.css'; // Add your styles here or inline

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempted with:', username, password);
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic
        console.log('Forgot password clicked');
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="login-title">Login</h2>

                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button type="submit" className="login-btn">
                    Login
                </button>

                <button type="button" className="forgot-password-btn" onClick={handleForgotPassword}>
                    Forgot Password?
                </button>
            </form>
        </div>
    );
};

export default Login;
