const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/10d62579c79cc5f01f13fe9757dce961/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather data.');
        }
    });
}

module.exports.getWeather = getWeather;