import { Link } from 'react-router-dom';
import logo from '../assets/images/kina.jpg';

export default function Header() {
  return (
    
    <div style={{ background: '#f0f0f0',  backgroundColor: 'white'}}>
      <nav style={{ display: 'flex', gap: '7vw', justifyContent: 'left', marginLeft:'2vw'}}>
      <img src={logo} className='headerLogo' alt='logo' />
      <p style={{color: 'black', fontFamily: '"Playfair Display", serif'}}>RUI</p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
