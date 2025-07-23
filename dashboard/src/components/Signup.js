import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('https://tradex-backend-4qt7.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      const data = await res.json();
      if (data.success) {
        setMessage('Signup successful! Please sign in.');
        setTimeout(() => navigate("/signin"), 1500);
      } else {
        setMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      <button type="submit" disabled={submitting}>
        {submitting ? "Signing Up..." : "Sign Up"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Signup;