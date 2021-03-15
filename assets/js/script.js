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
        document.querySelector('#icon').src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
        console.log(icon)
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

        var temp1 = data.list[0].main.temp;
        var humid1 = data.list[0].main.humidity;
        var icon1 = data.list[0].weather[0].icon;
        console.log(temp1)
        
        document.querySelector('#forTemp1').innerHTML = temp1 + ' F';
        document.querySelector('#forHumid1').innerHTML = humid1 + '%';
        document.querySelector('#icon1').src = 'http://openweathermap.org/img/wn/' + icon1 + '.png';

        var temp2 = data.list[1].main.temp;
        var humid2 = data.list[1].main.humidity;
        var icon2 = data.list[1].weather[0].icon;
        
        
        document.querySelector('#forTemp2').innerHTML = temp2 + ' F';
        document.querySelector('#forHumid2').innerHTML = humid2 + '%';
        document.querySelector('#icon2').src = 'http://openweathermap.org/img/wn/' + icon2 + '.png';

        var temp3 = data.list[2].main.temp;
        var humid3 = data.list[2].main.humidity;
        var icon3 = data.list[2].weather[0].icon;
        
        
        document.querySelector('#forTemp3').innerHTML = temp3 + ' F';
        document.querySelector('#forHumid3').innerHTML = humid3 + '%';
        document.querySelector('#icon3').src = 'http://openweathermap.org/img/wn/' + icon3 + '.png';

        var temp4 = data.list[3].main.temp;
        var humid4 = data.list[3].main.humidity;
        var icon4 = data.list[3].weather[0].icon;
        
        
        document.querySelector('#forTemp4').innerHTML = temp4 + ' F';
        document.querySelector('#forHumid4').innerHTML = humid4 + '%';
        document.querySelector('#icon4').src = 'http://openweathermap.org/img/wn/' + icon4 + '.png';

        var temp5 = data.list[4].main.temp;
        var humid5 = data.list[4].main.humidity;
        var icon5 = data.list[4].weather[0].icon;
        
        
        document.querySelector('#forTemp5').innerHTML = temp5 + ' F';
        document.querySelector('#forHumid5').innerHTML = humid5 + '%';
        document.querySelector('#icon5').src = 'http://openweathermap.org/img/wn/' + icon5 + '.png';
        console.log(icon5)
    },
    search: function () {
        this.forecast(document.querySelector('#searchBar').value);
    }
};

document.querySelector('.searchBtn').addEventListener('click', function () {
    weather.search();
    forecastWeather.search();

var city1 = document.querySelector('#city1');
city1.addEventListener('click', function() {
    city = 'seattle';
    forecastWeather('seattle');
    
})

});


















