export default function AboutMe() {
    return (
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        margin: '2rem auto'
      }}>
        <h1 style={{
          color: '#166088',
          textAlign: 'center',
          marginBottom: '2rem',
          position: 'relative',
          paddingBottom: '0.5rem'
        }}>
          Про мене
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <img 
            src="/profile.jpg" 
            alt="Юлія Мотрич"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #4fc3f7'
            }}
          />
          <div>
            <h2 style={{ color: '#166088', marginBottom: '0.5rem' }}>Привіт! Я Юлія Мотрич</h2>
            <p>Студентка НУБіП, майбутній Frontend-розробник</p>
          </div>
        </div>
  
        <section style={{ marginBottom: '2rem' }}>
          <h2>Моя освіта та цінності</h2>
          <p>
            Навчаюсь на факультеті Інформаційних технологій. Вірю, що технології можуть зробити світ кращим.
            Люблю вчитися новому та вирішувати складні задачі.
          </p>
        </section>
  
        <section style={{ marginTop: '2rem' }}>
          <h2>Мої проєкти</h2>
          
          {}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#166088', marginBottom: '1rem' }}>HTML + CSS</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="https://github.com/yulichka007/html-css-landing" target="_blank" rel="noopener noreferrer"
                 style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#f8f9fa',
                  padding: '1rem',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease',
                  minWidth: '150px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌐</div>
                  <p>Лендінг сторінка</p>
                </div>
              </a>
            </div>
          </div>
  
          {}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#166088', marginBottom: '1rem' }}>JavaScript</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="https://github.com/yulichka007/js-easy" target="_blank" rel="noopener noreferrer"
                 style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#f8f9fa',
                  padding: '1rem',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease',
                  minWidth: '150px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
                  <p>JS додаток</p>
                </div>
              </a>
            </div>
          </div>

          {}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#166088', marginBottom: '1rem' }}>React</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="https://github.com/yulichka007/react-first-lab" target="_blank" rel="noopener noreferrer"
                 style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#f8f9fa',
                  padding: '1rem',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease',
                  minWidth: '150px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚛️</div>
                  <p>Перший React додаток</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }