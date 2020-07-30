const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const breedName = process.argv.slice(2);


const fetchBreedDescription = function(breedName, callback) {

  request(url + breedName,(error,response,body) => {
    if (error) {
      callback(error,null);
      return;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback(`No data on ${breedName}`, null);
    } else {
      callback(null, data[0].description.trim()); // if not trimmed, the test fails
    }
  });
};


module.exports = { fetchBreedDescription };