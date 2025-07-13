import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('http://localhost:3002/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        setMessage('Signin successful!');
        navigate("/dashboard");
      } else {
        setMessage(data.message || 'Signin failed');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit" disabled={submitting}>
        {submitting ? "Signing In..." : "Sign In"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Signin;