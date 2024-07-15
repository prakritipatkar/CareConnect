import React from 'react';

const AppointmentList = ({ appointments }) => {
    return (
        <ul>
            {appointments.map((appointment, index) => (
                <li key={index}>
                    {appointment.name} - {appointment.date} at {appointment.time} with {appointment.doctor}
                </li>
            ))}
        </ul>
    );
};

export default AppointmentList;