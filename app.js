const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');
// const yargs = require('yargs').argv[2];
const address = process.argv[2];
if (address) {
    geocode(address, (error, { longitude, latitude, location } = {}) => {
        if (error) {
            return console.log(error)
        }
        forecast(longitude, latitude, (error, { description, temperature, humidity, wind_speed } = {}) => {
            if (error) {
                return console.log(error);
            }
            console.log(chalk.green(location));
            console.log('Situation:', description);
            console.log('Temperature:', temperature);
            console.log('Humidity:', humidity);
            console.log('wind speed:', wind_speed)
        })
    })
} else {
    console.log('Please provide a city name')
}