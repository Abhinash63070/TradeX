import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('https://tradex-backend-4qt7.onrender.com/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, username, password })
        });
        const data = await res.json();
        setMessage(data.message);
        if (data.message && data.message.toLowerCase().includes('success')) {
            setTimeout(() => navigate('/'), 1500); // Redirect to home page
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <img src="/media/images/logo.png" alt="TradeX Logo" className="signup-logo" style={{ width: '160px', height: 'auto' }} />
                <h2>Create new account</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="signup-input"
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                        className="signup-input"
                    />
                    <div className="signup-password-wrapper" style={{ position: 'relative', width: '100%' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="signup-input"
                        />
                        <button
                            type="submit"
                            className="signup-show-hide"
                            onClick={() => setShowPassword(!showPassword)}
                            tabIndex={-1}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>
                {message && <p className="signup-message">{message}</p>}
                <p className="signup-login-link">
                    Already have an account? <a href="/signin">Sign in</a>
                </p>

            </div>
        </div>
    );
}

export default Signup;