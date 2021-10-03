const axios = require('axios');


const getWeather = (lat,lon)=>{
    return new Promise((resolve, reject)=>{

        const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,daily,minutely&units=metric&appid=b7866624140f07702fc620c76f31a970';

        axios.get(url)
        .then(function (response) {
            // handle success
            resolve({weather:"currently "+response.data.timezone +" "+ response.data.current.weather[0].description +
            " and temparature is "+ response.data.current.temp+'C'})
            // console.log(response.data.current.temp);
            // console.log("currently "+ response.data.current.weather[0].description +
            // " and temp is "+ response.data.current.temp);
        })
        .catch(function (error) {
            // handle error
            reject({error:"Unable to find the location"})
            // console.log("Unable to find the location");
        });


    });
}

module.exports = getWeather;

