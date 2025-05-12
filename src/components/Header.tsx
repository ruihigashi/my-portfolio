import { Link } from 'react-router-dom';
import logo from '../assets/images/kina.jpg';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: '5vw',
          marginTop: '3vh',
          marginBottom: '1.5vh',
        }}
      >

        <div style={{ display: 'flex', alignItems: 'center', gap: '4vw' }}>
          <img
            src={logo}
            alt="logo"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1.5px solid rgb(181, 181, 181)'
            }}
          />
          <p
            style={{
              color: 'black',
              fontFamily: '"Playfair Display", serif',
              fontWeight: 'bold',
              marginRight: '3vw',
              marginLeft: '-2.5vw'
            }}
          >
            RUI
          </p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            marginRight: '3vw',
            borderRadius: '50%',
            height: '40px',
            width: '40px',
            border: '1.5px solid rgb(181,181,181)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white', 
            cursor: 'pointer',
            color: darkMode ? 'gold' : 'black', // アイコンの色を明示的に指定
            fontSize: '1.5vw', 
          }}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </div>
  );
}
