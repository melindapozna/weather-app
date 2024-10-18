document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault(); 
    const city = document.getElementById("search-location").value
    getCoordinates(city)

})
 
document.querySelector("#locate-me").addEventListener("click", geoFindMe);



//measurement converters, default temp = kelvin
function convertToFahrenheit(KelvinTemperature) {
    
    return parseInt(((KelvinTemperature - 273.15) * 9/5 + 32)).toString() + " °F"
}

function convertToCelsius(KelvinTemperature) {
    return parseInt((KelvinTemperature - 273.15)).toString() + " °C"
}

function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getWeatherData(latitude, longitude)
    }
    
    function error() {
        console.log("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
    } else {
        console.log("Locating…");
        navigator.geolocation.getCurrentPosition(success, error);
    }

}




function displayData(data) {
    const city = data.name
    var temperature = data.main.temp //temperature in kelvin
    var feel = data.main.feels_like // ---------||----------
    const weatherType = data.weather.main
    const weatherDescription = data.weather.description

    //convert temperature units
    const fahrenheit = convertToFahrenheit(temperature)
    const celsius = convertToCelsius(temperature)

    const feelF = convertToFahrenheit(feel)
    const feelC = convertToCelsius(feel)

    //load data with default values: Helsinki in celsius
    document.getElementById("current-location").innerHTML = "<h1>" + city + "</h1>"
    document.getElementById("curr-temp1").innerHTML = celsius
    document.getElementById("curr-feel1").innerHTML = feelC

    //display converted units
    displayCelsius(celsius, feelC)
    displayFahrenheit(fahrenheit, feelF)
    displayKelvin(temperature, feel)
    
   
    
}

function displayCelsius(temperature, feel) {
    document.getElementById("celsius").addEventListener("click", function() {
        document.getElementById("curr-temp1").innerHTML = temperature
        document.getElementById("curr-feel1").innerHTML = feel
    })

}

function displayFahrenheit(temperature, feel) {
    document.getElementById("fahrenheit").addEventListener("click", function() {
        document.getElementById("curr-temp1").innerHTML = temperature
        document.getElementById("curr-feel1").innerHTML = feel
    })
}


function displayKelvin(temperature, feel) {
    document.getElementById("kelvin").addEventListener("click", function() {
        document.getElementById("curr-temp1").innerHTML = parseInt(temperature) + " K"
        document.getElementById("curr-feel1").innerHTML = parseInt(feel) + " K"
    })    
    
}
