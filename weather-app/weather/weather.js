const request = require('request');

let getWeather = (lat, lng, callback) => {
    request.get({
        url: `https://api.darksky.net/forecast/28742160b734e2c64e2fb8b43efa217e/${lat},${lng}?units=auto`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to fetch weather');
        }
    })
};

module.exports = {
    getWeather
};

