const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=2eea00c0ec9c1a6191ade9fe3c7a5734&query=23.568728,58.460181&units=m'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log(response.body.current.weather_descriptions[0] + '. It is currently', response.body.current.temperature, 'degrees. humidity is', response.body.current.humidity);
})