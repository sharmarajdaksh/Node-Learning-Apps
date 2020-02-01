const geobing = require('geobing');

geobing.setKey('AtM0HAfVQNjbvKWIhRglXdFK0AkgUvHHt5r8ugZnPysbUCMIYNzireLrlWWO3ovq');

const fetchLocation = (address) => {
    return new Promise((resolve, reject) => {
        geobing.geocode(address, function (error, response) {
            if (error
                || response === undefined
                || response.resourceSets[0] === undefined
                || response.resourceSets[0].resources[0] === undefined) {
                reject('Could not connect to Bing server or find that address');
            } else if (response.statusDescription === 'OK') {
                resolve({
                    address: response.resourceSets[0].resources[0].address.formattedAddress,
                    latitude: response.resourceSets[0].resources[0].geocodePoints[0].coordinates[0],
                    longitude: response.resourceSets[0].resources[0].geocodePoints[0].coordinates[1]
                });
            }
        });
    });
};


module.exports.fetchLocation = fetchLocation;