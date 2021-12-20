const request = require('request')

const forecast = function (latitude, longitude, callback) {
    const url = '&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json: true}, function (error, {body}) {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  'It is current ' + body.current.temperature + ' temperature.\n' + 'It feels like ' + body.current.feelslike + ' temperature.'
            )
        }
    })
}

module.exports = forecast