function getWeather() {
    const apiKey = 'your-api-key'; // Replace with a valid OpenWeather API key
    const city = 'London';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weather = `The current temperature in ${city} is ${data.main.temp}°C with ${data.weather[0].description}.`;
            document.getElementById('weather-result').innerText = weather;
        })
        .catch(error => {
            document.getElementById('weather-result').innerText = `Error fetching weather data: ${error.message}`;
        });
}
