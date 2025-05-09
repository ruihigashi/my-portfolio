
export default function Header() {
  return (
    <header style={{ padding: '0.5vh', border:'2px solid rgb(188, 188, 188)', backgroundColor: 'white'}}>
      <p style={{color: 'black', margin: '2vh', fontFamily: '"Playfair Display", serif'}}>RUI HIGASHI</p>
      <nav style={{ display: 'flex', justifyContent: 'center',marginBottom: '15vh'}}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '15vh'}}>Portfolio</h1>
      </nav>
    </header>
  );
}
