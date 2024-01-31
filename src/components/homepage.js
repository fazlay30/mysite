import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
    const navigate = useNavigate();

    const handleInvestorClick = () => {
        navigate('/investor-login'); // This will navigate to the investor login page
    };

    const handleEntreClick = () => {
        navigate('/entre-login'); // This will navigate to the investor login page
    };

    return (
        <div className="homepage">
            <h1 className="website-name">IdeaMerge</h1>
            <div className="main-content">
                <p className="tagline">Dream. Merge. Achieve.</p>
                <div className="buttons">
                    <button className="investor-btn" onClick={handleInvestorClick}>
                       <span className="btn-text-small">I am an</span><br />
                       <span className="btn-text-large">Investor</span>
                    </button>
                    <button className="entrepreneur-btn" onClick={handleEntreClick}>
                       <span className="btn-text-small">I am an</span><br />
                       <span className="btn-text-large">Entrepreneur</span>
                    </button>
                </div>
            </div>
            <p className="bottom-text">
                You can create both account as an Investor and Entrepreneur with the same credentials.
            </p>
        </div>
    );
};

export default Homepage;