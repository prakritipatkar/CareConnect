import React, { useState, useEffect } from 'react';

const MyProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState({ day: '', month: '', year: '' });
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');
    const [savedProfile, setSavedProfile] = useState(null);

    // Load saved profile from local storage on component mount
    useEffect(() => {
        const savedProfileData = localStorage.getItem('userProfile');
        if (savedProfileData) {
            const profile = JSON.parse(savedProfileData);
            setSavedProfile(profile);
            setName(profile.name);
            setEmail(profile.email);
            setPhone(profile.phone);
            setAddress(profile.address);
            setGender(profile.gender);
            setDob(profile.dob);
            setPreview(profile.image);
        }
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'phone') {
            setPhone(value);
        } else if (name === 'address') {
            setAddress(value);
        } else if (name === 'gender') {
            setGender(value);
        }
    };

    const handleDobChange = (event) => {
        const { name, value } = event.target;
        setDob((prevDob) => ({ ...prevDob, [name]: value }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSave = () => {
        const profile = {
            name,
            email,
            phone,
            address,
            gender,
            dob,
            image: preview
        };
        localStorage.setItem('userProfile', JSON.stringify(profile));
        setSavedProfile(profile);
        alert('Profile saved successfully!');
    };

    const previousBookings = [
        // Example previous bookings data
        { id: 1, doctor: 'Dr. Smith', date: '2023-05-20', time: '10:00 AM' },
        { id: 2, doctor: 'Dr. Doe', date: '2023-06-15', time: '2:00 PM' }
    ];

    const upcomingBookings = [
        // Example upcoming bookings data
        { id: 1, doctor: 'Dr. Brown', date: '2023-07-10', time: '9:00 AM' }
    ];

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        }}>
            <h1>My Profile</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#f0f8ff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                width: '300px',
                marginBottom: '20px',
            }}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        style={{ padding: '10px', width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        style={{ padding: '10px', width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={handleInputChange}
                        style={{ padding: '10px', width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={address}
                        onChange={handleInputChange}
                        style={{ padding: '10px', width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={gender}
                        onChange={handleInputChange}
                        style={{ padding: '10px', width: '100%' }}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label>Date of Birth:</label>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <select
                            name="day"
                            value={dob.day}
                            onChange={handleDobChange}
                            style={{ padding: '10px', width: '30%' }}
                        >
                            <option value="">Day</option>
                            {[...Array(31)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                        <select
                            name="month"
                            value={dob.month}
                            onChange={handleDobChange}
                            style={{ padding: '10px', width: '30%' }}
                        >
                            <option value="">Month</option>
                            {[
                                'January', 'February', 'March', 'April', 'May', 'June',
                                'July', 'August', 'September', 'October', 'November', 'December'
                            ].map((month, index) => (
                                <option key={index + 1} value={month}>{month}</option>
                            ))}
                        </select>
                        <select
                            name="year"
                            value={dob.year}
                            onChange={handleDobChange}
                            style={{ padding: '10px', width: '30%' }}
                        >
                            <option value="">Year</option>
                            {[...Array(100)].map((_, index) => (
                                <option key={2023 - index} value={2023 - index}>{2023 - index}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="image">Profile Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ padding: '10px', width: '100%' }}
                    />
                    {preview && <img src={preview} alt="Profile Preview" style={{ marginTop: '10px', width: '100%', borderRadius: '10px' }} />}
                </div>
                <button onClick={handleSave} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px' }}>Save Profile</button>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                width: '80%',
                marginBottom: '20px',
            }}>
                <h2>Previous Bookings</h2>
                {previousBookings.length > 0 ? (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {previousBookings.map(booking => (
                            <li key={booking.id} style={{
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                margin: '10px 0',
                                borderRadius: '5px',
                                boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                                width: '100%',
                            }}>
                                {booking.doctor} - {booking.date} at {booking.time}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No previous bookings.</p>
                )}
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                width: '80%',
            }}>
                <h2>Upcoming Bookings</h2>
                {upcomingBookings.length > 0 ? (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {upcomingBookings.map(booking => (
                            <li key={booking.id} style={{
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                margin: '10px 0',
                                borderRadius: '5px',
                                boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                                width: '100%',
                            }}>
                                {booking.doctor} - {booking.date} at {booking.time}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No upcoming bookings.</p>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
