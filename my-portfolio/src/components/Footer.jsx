export default function Footer() {
    return (
      <footer style={{
        background: '#4a6fa5',
        color: 'white',
        padding: '1.5rem',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p>© {new Date().getFullYear()} Юлія Мотрич</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
            <a href="https://github.com/yulichka007" target="_blank" rel="noopener noreferrer" 
               style={{ color: 'white', textDecoration: 'none' }}>
              GitHub
            </a>
            <a href="https://web.telegram.org/a/?account=2" target="_blank" rel="noopener noreferrer" 
               style={{ color: 'white', textDecoration: 'none' }}>
              Telegram
            </a>
          </div>
        </div>
      </footer>
    );
  }