document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault(); 
    const city = document.getElementById("search-location").value
    getCoordinates(city)

})

//measurement converters, default temp = kelvin
function convertToCelsius(KelvinTemperature) {
    
    return parseInt(((KelvinTemperature - 273.15) * 9/5 + 32)).toString() + " °C"
}

function convertToFahrenheit(KelvinTemperature) {
  
    return parseInt((KelvinTemperature - 273.15)).toString() + " °F"
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
    document.getElementById("curr-data1").innerHTML = feelC

    //display converted units
    displayCelsius(celsius, feelC)
    displayFahrenheit(fahrenheit, feelF)
    displayKelvin(temperature, feel)
    
    
}

function displayCelsius(temperature, feel) {
    document.getElementById("celsius").addEventListener("click", function() {
        document.getElementById("curr-temp1").innerHTML = temperature
        document.getElementById("curr-data1").innerHTML = feel
    })

}

function displayFahrenheit(temperature, feel) {
    document.getElementById("fahrenheit").addEventListener("click", function() {
        document.getElementById("curr-temp1").innerHTML = temperature
        document.getElementById("curr-data1").innerHTML = feel
    })
}


function displayKelvin(temperature, feel) {
    document.getElementById("kelvin").addEventListener("click", function() {
        document.getElementById("curr-temp1").innerHTML = parseInt(temperature) + " K"
        document.getElementById("curr-data1").innerHTML = parseInt(feel) + " K"
    })    
    
}