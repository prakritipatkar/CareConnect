import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';  // Ensure the path is correct
import './SignUpPage.css';


const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            console.error("Error signing up with email and password", error);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-image">
                {/* <img src='' alt="Sign Up Illustration" /> */}
            </div>
            <div className="signup-form">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={handleFullNameChange}
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="admin@gmail.com"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" value={gender} onChange={handleGenderChange} required>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <button type="submit">Sign Up</button>
                    </div>
                    <div className="signup-footer">
                        <span>Already have an account? <a href="/login">Login</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
