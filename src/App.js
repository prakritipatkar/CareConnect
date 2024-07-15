import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import HomePage from './pages/HomePage.js';
import BookingPage from './pages/BookingPage.js';
import LoginPage from './components/LoginPage.js';
import SignUpPage from './components/SignUpPage.js';
import FrontPage from './components/FrontPage.js';
import MyProfile from './components/MyProfile.js';
import DoctorLoginPage from './components/DoctorLoginPage.js';
import DoctorSignUpPage from './components/DoctorSignUpPage.js';
import LandingPage from './components/LandingPage.js';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
            <Route path="/" element={<Navigate to="/LandingPage" />} />
            <Route path="/LandingPage" element={<LandingPage />} />
                {/* <Route path="/" element={<Navigate to="/login" />} /> */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/book/:doctorId" element={<BookingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/FrontPage" element={<FrontPage />} />
                <Route path="/MyProfile" element={<MyProfile />} />
                <Route path="/DoctorLoginPage" element={<DoctorLoginPage />} />
                {/* <Route path="/DoctorSignupPage" element={<DoctorSignUpPage />} /> */}
            </Routes> 
        </div>
    ); 
};

export default App; 

