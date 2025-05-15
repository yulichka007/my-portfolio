import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weather';

export default function MyCity() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const cityPhotos = [
    process.env.PUBLIC_URL + '/lokhvytsia1.jpg',
    process.env.PUBLIC_URL + '/lokhvytsia2.jpg',
    process.env.PUBLIC_URL + '/lokhvytsia3.jpg',
    process.env.PUBLIC_URL + '/lokhvytsia4.jpg',
    process.env.PUBLIC_URL + '/lokhvytsia5.jpg'
  ];
  

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeather();
        setWeather(data);
        setError(null);
      } catch (err) {
        setError('Не вдалося завантажити дані про погоду');
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, []);

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
        Моє місто — Лохвиця
      </h1>
      
      {}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {cityPhotos.map((photo, index) => (
          <div key={index} style={{
            height: '150px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <img 
              src={photo} 
              alt={`Лохвиця ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>

      <section style={{ marginBottom: '2rem' }}>
        <p>
          Лохвиця — мальовниче місто в Полтавській області з багатою історією. 
          Воно засноване в XVI столітті і має багато цікавих місць та традицій.
        </p>
        <p>
          Місто славиться своєю природими красою, добрими людьми та спокійною атмосферою.
          Тут можна побачити гарні заходи сонця та насолодитися справжнім українським колоритом.
        </p>
      </section>

      <section>
        <h2>Поточна погода у Лохвиці</h2>
        
        {loading && <div>Завантаження даних про погоду...</div>}
        
        {error && !weather && <div style={{ color: 'red' }}>{error}</div>}
        
        {weather && (
          <div style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '8px',
            marginTop: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img 
                src={`https:${weather.current.condition.icon}`} 
                alt={weather.current.condition.text}
                style={{ width: '64px', height: '64px' }}
              />
              <div>
                <p style={{ fontSize: '2rem', margin: 0 }}>{weather.current.temp_c}°C</p>
                <p style={{ margin: 0 }}>{weather.current.condition.text}</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              <p><strong>📍 Місце:</strong> {weather.location.name}, {weather.location.country}</p>
              <p><strong>🌡 Відчувається як:</strong> {weather.current.feelslike_c}°C</p>
              <p><strong>💧 Вологість:</strong> {weather.current.humidity}%</p>
              <p><strong>🌬 Вітер:</strong> {weather.current.wind_kph} км/год</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}