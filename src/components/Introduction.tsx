import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={{ padding: '2vw', background: '#f0f0f0', border:'2px solid rgb(188, 188, 188)', borderTop: 'none',  backgroundColor: 'white'}}>
      <nav style={{ display: 'flex', gap: '7vw', justifyContent: 'center' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
