let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=4156210,us&appid=828b58bd0afbb809dc500a3b1a6a67ff&units=imperial', true);

weatherRequest.responseType = 'json';

weatherRequest.send();

weatherRequest.onload = function () {
    let weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    
} // end of the function