// URL (required), options (optional)

async function fetchWeatherData() {
    const response =fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tbilisi?unitGroup=us&key=DUYJDW5T4QNLBVMEY3TWRNLJ9&contentType=json',
{mode: 'cors',
method: 'GET',
headers: {'Content-Type': 'application/json'}
})
   .then((response) => {    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const weatherData = data.currentConditions;
        const weatherInfo = `
            <h2>Weather in ${data.resolvedAddress}</h2>
            <p>Temperature: ${weatherData.temp}°F</p>
            <p>Condition: ${weatherData.conditions}</p>
            <p>Humidity: ${weatherData.humidity}%</p>
            <p>Wind Speed: ${weatherData.windspeed} mph</p>
        `;
        
        document.getElementById('weather-info').innerHTML = weatherInfo;
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('weather-info').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
    });

  

}
 const weatherButton = document.getElementById('submit');
weatherButton.addEventListener('click', fetchWeatherData);

