import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{
      background: '#4a6fa5',
      padding: '1rem 0',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <nav>
        <ul style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '2rem'
        }}>
          <li>
            <Link to="/about" style={{
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              color: 'white',
              transition: 'all 0.3s ease',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Про мене
            </Link>
          </li>
          <li>
            <Link to="/my-city" style={{
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              color: 'white',
              transition: 'all 0.3s ease',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Моє місто
            </Link>
          </li>
          <li>
            <Link to="/my-future" style={{
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              color: 'white',
              transition: 'all 0.3s ease',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Моє майбутнє
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}