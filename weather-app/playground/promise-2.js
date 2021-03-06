const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);

        request.get({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if(error){
                reject('Unable to connect to Google servers.');
            } else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find that address.');
            } else if(body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            } else {
                reject(`Error: ${body.status}`);
            }
        });
    })
}

geocodeAddress('harrow').then((address) => {
    console.log(address);
}, (errorMessage) => {
    console.log(errorMessage);
})