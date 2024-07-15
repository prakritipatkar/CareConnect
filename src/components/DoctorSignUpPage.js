import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import Modal from 'react-modal';
import { auth, db } from '../firebase.js';
import './DoctorSignUpPage.css';

const daysOfWeek = [
    { value: 'monday', label: 'Monday' },
    { value: 'tuesday', label: 'Tuesday' },
    { value: 'wednesday', label: 'Wednesday' },
    { value: 'thursday', label: 'Thursday' },
    { value: 'friday', label: 'Friday' },
    { value: 'saturday', label: 'Saturday' },
    { value: 'sunday', label: 'Sunday' }
];

const DoctorSignUpPage = () => {
    const [fullName, setFullName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [availability, setAvailability] = useState([{ day: '', startTime: '', endTime: '' }]);
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
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await addDoc(collection(db, "doctors"), {
                fullName,
                specialty,
                licenseNumber,
                phoneNumber,
                gender,
                description,
                email,
                availability,
                userId: user.uid
            });
            setModalMessage('Doctor account created successfully!');
            setModalIsOpen(true);
            setTimeout(() => {
                setModalIsOpen(false);
                navigate('/doctor-login');
            }, 3000);
        } catch (error) {
            setModalMessage(`Error: ${error.message}`);
            setModalIsOpen(true);
            setTimeout(() => {
                setModalIsOpen(false);
            }, 3000);
        }
    };

    const handleAvailabilityChange = (index, field, value) => {
        const newAvailability = [...availability];
        newAvailability[index][field] = value;
        setAvailability(newAvailability);
    };

    const addAvailabilitySlot = () => {
        setAvailability([...availability, { day: '', startTime: '', endTime: '' }]);
    };

    return (
        <div className="signup-container">
            <div className="signup-image">
                <img src="https://wallpaperaccess.com/full/3787708.jpg" alt="Doctor Sign Up Illustration" />
            </div>
            <div className="signup-form">
                <h2>Doctor Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="specialty">Specialty</label>
                        <input
                            type="text"
                            id="specialty"
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                            placeholder="Specialty"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="licenseNumber">License Number</label>
                        <input
                            type="text"
                            id="licenseNumber"
                            value={licenseNumber}
                            onChange={(e) => setLicenseNumber(e.target.value)}
                            placeholder="License Number"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            required
                        />
                    </div>
                    <div className="availability-container">
                        <label>Availability</label>
                        {availability.map((slot, index) => (
                            <div key={index} className="availability-slot">
                                <select
                                    value={slot.day}
                                    onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)}
                                    className="day-picker"
                                >
                                    <option value="">Select Day</option>
                                    {daysOfWeek.map((day) => (
                                        <option key={day.value} value={day.value}>{day.label}</option>
                                    ))}
                                </select>
                                <input
                                    type="time"
                                    value={slot.startTime}
                                    onChange={(e) => handleAvailabilityChange(index, 'startTime', e.target.value)}
                                    className="time-picker"
                                    placeholder="Start Time"
                                />
                                <input
                                    type="time"
                                    value={slot.endTime}
                                    onChange={(e) => handleAvailabilityChange(index, 'endTime', e.target.value)}
                                    className="time-picker"
                                    placeholder="End Time"
                                />
                            </div>
                        ))}
                        <button type="button" onClick={addAvailabilitySlot}>Add Another Slot</button>
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
                        <input type="submit" value="Sign Up" />
                    </div>
                    <div className="signup-footer">
                        <span>Already have an account? <a href="/doctor-login">Login</a></span>
                    </div>
                </form>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Notification Modal"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <h2>{modalMessage}</h2>
            </Modal>
        </div>
    );
};

export default DoctorSignUpPage;
