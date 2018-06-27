var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=4156210&appid=5cd1df0f20e7b178b00435263d755f1f&units=imperial';
weatherRequest.open("GET",apiURL,true);
weatherRequest.responseType = '';
weatherRequest.send();
weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    
    var currentTemperature = weatherData.list[0].main.temp;
    
    var weatherDescription = weatherData.list[0].weather[0].description;
    
    var highTemperature = weatherData.list[0].main.temp_max;
    
    var lowTemperature = weatherData.list[0].main.temp_min;
    
    var ws = weatherData.list[0].wind.speed;
    
    document.getElementById('currentTemp').innerHTML = 
    currentTemperature;
    document.getElementById('currentWeather').innerHTML = 
    weatherDescription;
    document.getElementById('highTemp').innerHTML = 
    highTemperature;
    document.getElementById('lowTemp').innerHTML = 
    lowTemperature;
    document.getElementById('windSpeed').innerHTML = ws;
}