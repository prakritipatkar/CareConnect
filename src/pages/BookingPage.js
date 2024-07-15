import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
    const { doctorId } = useParams();
    
    const doctors = [
        { 
            id: 1, 
            name: 'Dr. Smith', 
            specialty: 'Cardiologist', 
            contact: '123-456-7890', 
            availability: [
                { day: 'Monday', time: '9:00 AM - 12:00 PM' },
                { day: 'Wednesday', time: '2:00 PM - 5:00 PM' },
                { day: 'Friday', time: '9:00 AM - 12:00 PM' }
            ],
            awards: 'Best Cardiologist 2020, Excellence in Cardiac Care 2021',
            feedback: [
                'Dr. Smith is amazing! He saved my life.',
                'Excellent care and attention to detail. Highly recommend.',
                'Very professional and caring. Best cardiologist in the area.'
            ]
        },
        { 
            id: 2, 
            name: 'Dr. Doe', 
            specialty: 'Dermatologist', 
            contact: '987-654-3210', 
            availability: [
                { day: 'Tuesday', time: '10:00 AM - 1:00 PM' },
                { day: 'Thursday', time: '3:00 PM - 6:00 PM' }
            ],
            awards: 'Top Dermatologist 2019, Skin Care Expert 2020',
            feedback: [
                'Dr. Doe is the best dermatologist I have ever visited.',
                'She really understands skin issues. Highly recommend her services.',
                'Professional and thorough. My skin has never looked better.'
            ]
        },
        { 
            id: 3, 
            name: 'Dr. Brown', 
            specialty: 'Pediatrician', 
            contact: '456-789-0123', 
            availability: [
                { day: 'Monday', time: '8:00 AM - 11:00 AM' },
                { day: 'Wednesday', time: '1:00 PM - 4:00 PM' },
                { day: 'Friday', time: '8:00 AM - 11:00 AM' }
            ],
            awards: 'Best Pediatrician 2018, Child Care Excellence 2019',
            feedback: [
                'Dr. Brown is fantastic with kids!',
                'My children love visiting Dr. Brown. She is very caring and patient.',
                'The best pediatrician in town. Highly recommend her.'
            ]
        }
    ];

    const selectedDoctor = doctors.find(doctor => doctor.id === parseInt(doctorId));
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleTimeSlotChange = (event) => {
        setSelectedTimeSlot(event.target.value);
    };

    const handleEmailChange = (event) => {
        setUserEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setFeedbackMessage('');
        
        try {
            await axios.post('http://localhost:5000/send-email', {
                doctorName: selectedDoctor.name,
                timeSlot: selectedTimeSlot,
                userEmail: userEmail
            });
            setFeedbackMessage(`Appointment booked with ${selectedDoctor.name} on ${selectedTimeSlot}. Confirmation email sent to ${userEmail}`);
        } catch (error) {
            console.error('Error sending email:', error);
            setFeedbackMessage('Failed to book appointment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8ff', textAlign: 'center'}}>
            <div style={{ margin: '0 auto', maxWidth: '600px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h2 style={{ color: '#4CAF50' }}>Book Appointment with {selectedDoctor.name}</h2>
                <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
                <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
                <marquee style={{ color: '#FF4500', fontWeight: 'bold', marginBottom: '20px' }}>{selectedDoctor.awards}</marquee>
                <h4>Availability:</h4>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {selectedDoctor.availability.map((slot, index) => (
                        <li key={index} style={{ marginBottom: '10px' }}>
                            {slot.day}: {slot.time}
                        </li>
                    ))}
                </ul>
                <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                    <h4>Choose a time slot:</h4>
                    <select value={selectedTimeSlot} onChange={handleTimeSlotChange} required style={{ padding: '5px', width: '100%', marginBottom: '20px' }}>
                        <option value="" disabled>Select a time slot</option>
                        {selectedDoctor.availability.map((slot, index) => (
                            <optgroup key={index} label={slot.day}>
                                {slot.time.split('-').map((time, subIndex) => (
                                    <option key={subIndex} value={`${slot.day}, ${time.trim()}`}>
                                        {time.trim()}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                    <h4>Enter your email:</h4>
                    <input 
                        type="email" 
                        value={userEmail} 
                        onChange={handleEmailChange} 
                        required 
                        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
                    />
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px' }} disabled={isSubmitting}>
                        {isSubmitting ? 'Booking...' : 'Book Appointment'}
                    </button>
                </form>
                {feedbackMessage && <p style={{ marginTop: '20px', color: feedbackMessage.includes('Failed') ? 'red' : 'green' }}>{feedbackMessage}</p>}
                <h4>Customer Feedback:</h4>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {selectedDoctor.feedback.map((feedback, index) => (
                        <li key={index} style={{ backgroundColor: '#f9f9f9', padding: '10px', margin: '10px 0', borderRadius: '5px', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
                            {feedback}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BookingPage;

