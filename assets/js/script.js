// weather object with fetche call
let weather = {
    fetchWeather: function (city) {
        fetch (
            'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=b8b1e554d2f82db6bf0383dbd3f679e8'
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {

        // finding the data in the fetch object
        const { name } = data;

        // as an array in the object, must use [0]
        const { icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, temp, humidity, speed);

        // call data and place in the HTML
        document.querySelector('#cityName').innerHTML = name;
        //document.querySelector('#icon').src = 'http://openweathermap.org/img/wn/10d@2x.png';
        document.querySelector('#humidity').innerHTML = humidity;
        document.querySelector('#windSpeed').innerHTML = speed;
        document.querySelector('#tempature').innerHTML = temp;
    },
    search: function () {
        this.fetchWeather(document.querySelector('#searchBar').value);
    }
};

document.querySelector('.searchBtn').addEventListener('click', function () {
    weather.search();
});


















