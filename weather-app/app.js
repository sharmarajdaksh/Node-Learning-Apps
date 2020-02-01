const yargs = require('yargs');

const geocode = require('./geocode/geocode-1');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help('help', 'h')
    .argv;

geocode.fetchLocation(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(result.address);
        weather.getWeather(result.latitude, result.longitude, (errorMessage, weatherResult) => {
            if(errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}`);
            }
        });
        
    }
});