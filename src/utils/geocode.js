const request = require('request')

const geocode = function (address, callback) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoia3VuaTQyMTAiLCJhIjoiY2t3dDR0b3U2MWNzeDJvczZsam91eXFqeSJ9.F74tg9CU_ghxeCNLYjg6Gg'
    request({url: url, json: true}, function(error, {body}) {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports = geocode