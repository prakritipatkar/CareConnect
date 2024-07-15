import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import './DoctorList.css';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './ChatbotConfig.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchDoctors = async () => {
            const doctorsCollection = collection(db, 'doctors');
            const doctorSnapshot = await getDocs(doctorsCollection);
            const doctorList = doctorSnapshot.docs.map(doc => doc.data());
            setDoctors(doctorList);
        };

        fetchDoctors();
    }, []);

    const filteredDoctors = doctors.filter(doctor =>
        doctor.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="doctor-list-container">
            <h2>Doctor List</h2>
            <input
                type="text"
                placeholder="Search by name or specialty"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <ul>
                {filteredDoctors.map((doctor, index) => (
                    <li key={index} className="doctor-card">
                        <div className="doctor-info">
                            <strong>Name:</strong> {doctor.fullName} <br />
                            <strong>Specialty:</strong> {doctor.specialty} <br />
                            <strong>License Number:</strong> {doctor.licenseNumber} <br />
                            <strong>Phone Number:</strong> {doctor.phoneNumber} <br />
                            <strong>Description:</strong> {doctor.description} <br />
                            <div className="doctor-availability">
                                <h4>Availability:</h4>
                                <ul>
                                    {doctor.availability.map((slot, slotIndex) => (
                                        <li key={slotIndex}>
                                            {new Date(slot.date).toLocaleDateString()} at {slot.time}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="chatbot-container">
                <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </div>
        </div>
    );
};

export default DoctorList;
