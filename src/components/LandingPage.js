// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handlePatientLogin = () => {
    navigate('/Login');
  };

  const handleDoctorLogin = () => {
    navigate('/doctorLoginPage');
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to CareConnect</h1>
        <h2 style={styles.subtitle}>Connecting Patients with Healthcare Professionals</h2>
        <div style={styles.buttons}>
          <button onClick={handlePatientLogin} style={styles.button}>
            Login as Patient
          </button>
          <button onClick={handleDoctorLogin} style={styles.button}>
            Login as Doctor
          </button>
        </div>
        <div style={styles.infoSection}>
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>Easy Appointment Booking</h3>
            <p style={styles.infoText}>
              Book appointments with your preferred doctors with just a few clicks.
            </p>
          </div>
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>24/7 Support</h3>
            <p style={styles.infoText}>
              Our team is available round the clock to assist you with any queries.
            </p>
          </div>
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>Secure and Private</h3>
            <p style={styles.infoText}>
              We ensure that all your data and health records are kept secure and private.
            </p>
          </div>
        </div>
        <div style={styles.footer}>
          <p style={styles.footerText}>© 2024 CareConnect. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    backgroundImage: 'url("https://i.pinimg.com/originals/eb/dc/db/ebdcdbe8282e3ac942d819f8b3e61d66.jpg")', // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    paddingTop: '10%',
    paddingBottom: '5%',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '40px',
  },
  buttons: {
    marginBottom: '50px',
  },
  button: {
    margin: '10px',
    padding: '15px 30px',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'left',
  },
  infoTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  infoText: {
    fontSize: '1rem',
  },
  footer: {
    marginTop: '50px',
  },
  footerText: {
    fontSize: '0.9rem',
  },
};

export default LandingPage;

