const axios = require('axios');

const getGeo = (location)=>{
    return new Promise((resolve, reject)=>{
        const url = 'https://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=1&appid=b7866624140f07702fc620c76f31a970';

        axios.get(url)
        .then(function (response) {
            // handle success
            resolve({
                name: response.data[0].name,
                lat: response.data[0].lat,
                lon: response.data[0].lon,
            })
            // console.log(response.data[0].lat);
            // console.log("currently "+ response.data.current.weather[0].description +
            //  " and temp is "+ response.data.current.temp);
        })
        .catch(function (error) {
            // handle error
            reject({error:'Unable to find the location'});
            // console.log("Unable to find the location");
        });
    });
}

module.exports = getGeo;
