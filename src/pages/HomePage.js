import React from 'react';
import DoctorList from '../components/DoctorList.js';

const HomePage = () => {
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
            ]
        }
    ];

    return (
        <div>
            <h1>Welcome to CareConnect!</h1>
            <DoctorList doctors={doctors} />
        </div>
    );
};

export default HomePage;
