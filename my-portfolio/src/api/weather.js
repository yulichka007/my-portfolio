
const API_KEY = '9cc30bd303964c3593c202501250605'; 

export const fetchWeather = async () => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Лохвиця&lang=uk`
  );
  if (!response.ok) {
    throw new Error('Помилка при отриманні даних з API');
  }
  return await response.json();
};