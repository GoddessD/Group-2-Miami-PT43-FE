import React, { useState } from 'react';
import axios from 'axios';
import "../App.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post('https://your-backend-api.com/login', { email, password });
      const { token } = res.data;
      localStorage.setItem('token', token);
      setIsLoading(false);
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <div class="form-background">
      <form className='form-box' onSubmit={handleSubmit}>
        <div className="form-group ">
          <label htmlFor="email">Email </label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group  ">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Log In'}
        </button>
      </form>
    </div>
  )
}

export default Login;
