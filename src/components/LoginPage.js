// src/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';
import Modal from 'react-modal';
import './LoginPage.css';

Modal.setAppElement('#root');

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setModalMessage('Account created successfully!');
            setModalIsOpen(true);
            setTimeout(() => {
                setModalIsOpen(false);
                navigate('/FrontPage');
            }, 1000);
            navigate('/');
        } catch (error) {
            setModalMessage(`Error: ${error.message}`);
            setModalIsOpen(true);
            setTimeout(() => {
                setModalIsOpen(false);
            }, 1000);
            console.error("Error logging in with email and password", error);
        }
    };

    return (
        <div className="login-container">
            <h2><i>&copy;CareConnect</i></h2>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                    <button type="submit">Login</button>
                </div>
                <div className="login-footer">
                    <span>Don't have an account? <a href="/signup">Sign Up</a></span>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;             
