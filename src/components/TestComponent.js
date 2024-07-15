import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';

const TestComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('10:00');

    return (
        <div>
            <h2>Test DatePicker and TimePicker</h2>
            <div>
                <label>Date Picker</label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy/MM/dd"
                />
            </div>
            <div>
                <label>Time Picker</label>
                <TimePicker
                    value={selectedTime}
                    onChange={(time) => setSelectedTime(time)}
                />
            </div>
        </div>
    );
};

export default TestComponent;
