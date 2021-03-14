const weatherAPI = fetch("http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=b8b1e554d2f82db6bf0383dbd3f679e8&q")

console.log(weatherAPI)
/*
var searchBar = document.getElementById('searchBar');
var cityName = document.querySelector('#cityName')
var tempature = document.querySelector('#tempature');
searchBar.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    city = e.target.value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=b8b1e554d2f82db6bf0383dbd3f679e8')
    .then(result => result.json()) 
    .then(data => console.log(data))
    cityName.innerHTML = city;
    tempature.innerHTML = data.main.temp;
})
*/

console.log(window)

function getParams() {
    var searchParamsArr = document.location.search
    console.log(searchParamsArr);

    var query = searchParamsArr[0].split('=').pop();

    searchAPI(query)
}

var titleEl = document.querySelector('#cityName');

var resultCard = document.querySelector('#card')
function printResults(resultObj) {
    console.log(resultObj);

    
    titleEl.textContent = resultObj.data.name;

    var tempContent = document.querySelector('#tempature')
    tempContent.innerHTML = '<strong>Tempature:</strong> ' + resultObj.data.main.temp;

    var humidContent = document.querySelector('#humidity');
    humidContent.innerHTML = '<strong>Humidity:</strong> ' + resultObj.data.main.humidity;

    var windContent = document.querySelector('#windSpeed');
    windContent.innerHTML = '<strong>Wind Speed:</strong> ' + resultObj.data.wind.speed;

    resultCard.append(titleEl, tempContent, humidContent, windContent);
}

function searchAPI(query) {
    var locQueryUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=b8b1e554d2f82db6bf0383dbd3f679e8';

    locQueryUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+ query + '&appid=b8b1e554d2f82db6bf0383dbd3f679e8';

    fetch(locQueryUrl).then(function (response) {
        if (!response.ok) {
            throw response.json();
        }

        return response.json();  
    })
    .then(function (locRes) {
        titleEl.append = locRes.data.name;

        console.log(locRes);
        for (var i = 0; i < locRes.results.length; i++) {
            printResults(locRes.results[i]);
        }
    })

};

var searchBar = document.querySelector('#searchBar').value;

function handleSearchFormSubmit(event) {
    event.preventDefault();

    searchAPI(searchBar);
}

var searchBtn = document.querySelector('.searchBtn');

searchBtn.addEventListener('click', handleSearchFormSubmit);

getParams();

