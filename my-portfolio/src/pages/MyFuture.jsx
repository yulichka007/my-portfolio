export default function MyFuture() {
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
          Моє майбутнє
        </h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2>Мої професійні цілі</h2>
          
          <div style={{ position: 'relative', maxWidth: '800px', margin: '2rem auto' }}>
            <div style={{ position: 'absolute', top: 0, left: '50px', height: '100%', width: '2px', background: '#4fc3f7' }}></div>
            
            {[
              {
                title: "Вивчити сучасні технології",
                desc: "React, TypeScript, Next.js, Node.js"
              },
              {
                title: "Отримати перший досвід роботи",
                desc: "Стажування або посада Junior Frontend Developer"
              },
              {
                title: "Розвиватися як професіонал",
                desc: "Брати участь у цікавих проектах, вчитися у досвідчених колег"
              }
            ].map((item, index) => (
              <div key={index} style={{ position: 'relative', paddingLeft: '100px', marginBottom: '2rem' }}>
                <div style={{
                  position: 'absolute',
                  left: '40px',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: '#166088',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  border: '3px solid #4fc3f7'
                }}>
                  {index + 1}
                </div>
                <div style={{
                  background: '#f8f9fa',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section style={{ margin: '2rem 0' }}>
          <blockquote style={{
            fontStyle: 'italic',
            borderLeft: '4px solid #4fc3f7',
            paddingLeft: '1.5rem',
            margin: '2rem 0',
            color: '#166088'
          }}>
            "Кожен великий починав з малого. Важливо не зупинятися на шляху до своєї мрії."
          </blockquote>
        </section>
        
        <section>
          <h2>Робота мрії</h2>
          <p>
            Я бачу себе у команді професіоналів, де ми разом створюємо корисні та інноваційні продукти.
            Хочу працювати над проектами, які справді змінюють життя людей на краще.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <h3>Навички, які я хочу освоїти:</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {[
                "Поглиблене знання React екосистеми",
                "Робота з серверним JavaScript (Node.js)",
                "Тестування коду (Jest, React Testing Library)",
                "Оптимізація продуктивності додатків"
              ].map((skill, i) => (
                <li key={i} style={{ padding: '0.5rem 0', position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#4fc3f7' }}>✓</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }