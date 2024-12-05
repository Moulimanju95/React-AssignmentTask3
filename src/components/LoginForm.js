import {useState} from 'react';
import React from 'react';
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`UserName : ${username} , Password : ${password}`);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          className="input-field"
          value={username}
          placeholder="UserName"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          className="input-field"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginForm;
