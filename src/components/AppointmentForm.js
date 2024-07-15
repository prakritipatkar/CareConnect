import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        doctor: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
            <input type="time" name="time" value={formData.time} onChange={handleChange} />
            <select name="doctor" value={formData.doctor} onChange={handleChange}>
                <option value="">Select Doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Doe">Dr. Doe</option>
                <option value="Dr. Brown">Dr. Brown</option>
            </select>
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default AppointmentForm;
