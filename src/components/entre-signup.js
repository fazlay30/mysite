import React, { useState } from 'react';
import './investor-signup.css';

const EntreSignUp = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        // Add here the logic to handle the submission of the form
      };

  return (
    <div className="signup-container">
      <h1 className="website-name">IdeaMerge</h1>
      <h2>Entrepreneur Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Middle Name (Optional)" />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" required />
        <input 
          type="password" 
          placeholder="Password" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          required 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="checkbox-container">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms"> <a href='/page'>I agree to the Terms and Conditions</a> </label>
        </div>
        <button type="submit">Create Your Account</button>
      </form>
    </div>
  );
};

export default EntreSignUp;