import { Link } from 'react-router-dom';
import logo from '../assets/images/kina.jpg';

export default function Header() {
  return (
    
    <div style={{backgroundColor: 'white'}}>
      <nav style={{ 
        display: 'flex', 
        gap: '6vw', 
        justifyContent: 'left', 
        marginLeft:'3vw', 
        marginTop: '2vh', 
        marginBottom: '1vh',
        alignItems: 'center'
        }}>
      <img src={logo} 
      className='headerLogo' 
      alt='logo' 
      style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover',
            border :'1px solid rgb(188, 188, 188)'
          }}/>
      <p style={{
        color: 'black', 
        fontFamily: '"Playfair Display", serif', 
        marginLeft:'-4vw',
        }}>RUI</p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>

      <button
      style={{
        padding: '0.5em 1em',
        border: '1px solid #ccc',
        borderRadius: '6px',
        cursor: 'pointer',
        backgroundColor: '#f5f5f5'
      }}
      onClick={() => {
        document.body.classList.toggle('dark-mode');
      }}
      >
        Dark Mode
    </button>
      </nav>
    </div>
  );
}
