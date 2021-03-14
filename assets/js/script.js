//moment function for current and future dates
var today = moment();
document.querySelector('#today').innerHTML = today.format("MMM Do, YYYY")

let tomorrow = moment().add(1, 'days')
document.querySelector('#forDate1').innerHTML = tomorrow.format("MMM Do, YYYY")
let thirdDay = moment().add(2, 'days')
document.querySelector('#forDate2').innerHTML = thirdDay.format("MMM Do, YYYY")
let fourthDay = moment().add(3, 'days')
document.querySelector('#forDate3').innerHTML = fourthDay.format("MMM Do, YYYY")
let fifthDay = moment().add(4, 'days')
document.querySelector('#forDate4').innerHTML = fifthDay.format("MMM Do, YYYY")
let sixthDay = moment().add(5, 'days')
document.querySelector('#forDate5').innerHTML = sixthDay.format("MMM Do, YYYY")




// weather object with fetch call
let weather = {
    presentWeather: function (city) {
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
        //document.querySelector('#icon').src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
        document.querySelector('#humidity').innerHTML = humidity + '%';
        document.querySelector('#windSpeed').innerHTML = speed + ' MPH';
        document.querySelector('#tempature').innerHTML = temp + ' F';
    },
    search: function () {
        this.presentWeather(document.querySelector('#searchBar').value);
    }
};



let forecastWeather = {
    forecast: function (city) {
        fetch (
            'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=b8b1e554d2f82db6bf0383dbd3f679e8'
        ).then ((response) => response.json())

        //bring displayWeather function here via this
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {

        const { temp, humidity } = data.list[0].main;
        console.log(temp, humidity);

        document.querySelector('#forTemp1').innerHTML = temp + ' F';
        document.querySelector('#forHumid1').innerHTML = humidity + '%';
    },
    search: function () {
        this.forecast(document.querySelector('#searchBar').value);
    }
};

document.querySelector('.searchBtn').addEventListener('click', function () {
    weather.search();
    forecastWeather.search();

});
















