const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode-2');

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

geocode.fetchLocation(argv.address).then((result) => {
    console.log('Address: ', result.address);
    return axios.get(`https://api.darksky.net/forecast/10d62579c79cc5f01f13fe9757dce961/${result.latitude},${result.longitude}`);
}).then((response) => {
    console.log('Temperature: ', response.data.currently.temperature);
    console.log('Apparent Temperature: ', response.data.currently.apparentTemperature);
}).catch((error) => {
    if (error.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    } else {
        console.log(error.message);
    }
});;

//     (errorMessage, result) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(result.address);
//         weather.getWeather(result.latitude, result.longitude, (errorMessage, weatherResult) => {
//             if(errorMessage) {
//                 console.log(errorMessage);
//             } else {
//                 console.log(`It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}`);
//             }
//         });

//     }
// });