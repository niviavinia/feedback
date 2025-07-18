import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="home"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#d0e7ff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
        Welcome to Home Page
      </h2>

      <Link
        to="register/"
        style={{
          textDecoration: 'none',
          padding: '10px 20px',
          backgroundColor: '#b22222',
          color: '#fff',
          borderRadius: '5px',
          fontWeight: 'bold',
          boxShadow: '4px',
        }}
      >
        Go to Register
      </Link>
    </div>
  );
}

export default Home;
