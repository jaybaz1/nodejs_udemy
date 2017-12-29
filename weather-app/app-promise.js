
console.log('Starting app');
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {

    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    } else if(response.data.status !== 'OK'){
        throw new Error(`ERROR: ${response.data.status}`);
    }

    let results = response.data.results[0];

    let lat = results.geometry.location.lat,
        lng = results.geometry.location.lng,
        weatherUrl = `https://api.darksky.net/forecast/28742160b734e2c64e2fb8b43efa217e/${lat},${lng}?units=auto`;

    console.log(results.formatted_address);

    return axios.get(weatherUrl);
    
}).then((response) => {

    let temperature = response.data.currently.temperature,
        apparentTemperature = response.data.currently.apparentTemperature;

    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);

}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers');
    } else {
        console.log(e.message);
    }
})
