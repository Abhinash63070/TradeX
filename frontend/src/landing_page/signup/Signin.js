import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('https://tradex-backend-4qt7.onrender.com/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            setMessage('Signin successful!');
            window.location.href = "http://localhost:3000"; // Redirect to dashboard app
        } else {
            setMessage(data.message || 'Signin failed');
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <img src="/media/images/logo.svg" alt="Zerodha Logo" className="signin-logo" />
                <h2>Sign in to Zerodha</h2>
                <form onSubmit={handleSubmit} className="signin-form">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="signin-input"
                    />
                    <div className="signin-password-wrapper" style={{ position: 'relative', width: '100%' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="signin-input"
                        />
                        <button
                            type="button"
                            className="signin-show-hide"
                            onClick={() => setShowPassword(!showPassword)}
                            tabIndex={-1}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <button type="submit" className="signin-btn">Sign In</button>
                </form>
                {message && <p className="signin-message">{message}</p>}
                <p className="signin-signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </div>
    );
}

export default Signin;
