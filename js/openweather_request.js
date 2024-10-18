


async function getCoordinates(city) {
    const country_code = "FI"
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},,${country_code}&appid=${apiKey}`

    const response = await fetch(url)
    const dataObj = await response.json()

    const data = Object.values(dataObj[0])
    console.log(data)
    const lat = data[2]
    const long = data[3]

    getWeatherData(lat, long)
}


const getWeatherData = async(latitude, longitude) => {
    url= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

    response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
    })
    data = await response.json()

    //console.log(data)
    displayData(data)
}


//load default data
getCoordinates("Helsinki")