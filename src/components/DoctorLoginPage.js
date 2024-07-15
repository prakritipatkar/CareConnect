import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js'; // Correct import path
import Modal from 'react-modal';
import './DoctorLoginPage.css';

Modal.setAppElement('#root');

const DoctorLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();

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
            setModalMessage('Doctor login successful!');
            setModalIsOpen(true);
            setTimeout(() => {
                setModalIsOpen(false);
                navigate('/doctor-dashboard'); // Replace with the actual doctor dashboard route
            }, 3000);
        } catch (error) {
            setModalMessage(`Error: ${error.message}`);
            setModalIsOpen(true);
            setTimeout(() => {
                setModalIsOpen(false);
            }, 3000);
        }
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <img src="/doctor-login-image.jpg" alt="Doctor Login Illustration" />
            </div>
            <div className="login-form">
                <h2>Doctor Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="doctor@example.com"
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
                        <span>Don't have an account? <a href="/DoctorSignUpPage">Sign Up</a></span>
                    </div>
                </form>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Doctor Login Modal"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <h2>{modalMessage}</h2>
            </Modal>
        </div>
    );
};

export default DoctorLoginPage;
