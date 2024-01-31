import React from 'react';
import './investor-login.css';
import { Link } from 'react-router-dom';

const InvestorLogin = () => {
  return (
    <div className="login-container">
        <h1 className="website-name">IdeaMerge</h1>
        <h2>Log in as an Investor</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        <p>Don't have an account? <Link to="/investor-signup">Create a new account</Link></p>
    </div>
  );
};

export default InvestorLogin;