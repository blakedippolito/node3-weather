const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=8ca7ba2c243a67309c0cf0c659294fd7&limit=1&query=' + address

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try again!', undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitutde: body.data[0].longitude,
                location: body.data[0].name
            })
        }
    })
}



module.exports = geocode