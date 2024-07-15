import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
    const navigate = useNavigate();
    const [city, setCity] = useState('');

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const navigateToHome = () => {
        navigate('/home');
    };

    return (
        <div className="front-page">
            <div className="welcome-section">
                <h1>Welcome to CareConnect</h1>
                <p>Select your city to find the best doctors near you</p>
                <div className="city-dropdown">
                    <label htmlFor="city">Select your city:</label>
                    <select id="city" value={city} onChange={handleCityChange}>
                        <option value="">--Select a city--</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Houston">Houston</option>
                        <option value="Phoenix">Phoenix</option>
                        {/* Add more cities as needed */}
                    </select>
                </div>
                <button onClick={navigateToHome}>Search</button>
            </div>
        </div>
    );
};

export default FrontPage;

