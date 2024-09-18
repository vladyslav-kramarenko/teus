import React from 'react';
import {Link} from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1 className={"moving-gradient-text"}>404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="home-link">Go back to Home</Link>
        </div>
    );
};

export default NotFoundPage;
