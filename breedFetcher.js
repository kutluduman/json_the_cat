const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const breedName = process.argv.slice(2);


request(url + breedName,(error,response,body) => {
  console.log("Error: ", error);
  const data = JSON.parse(body);
  console.log(body);
  console.log(typeof body);
  console.log('Status Code: ', response && response.statusCode);
  if (data.length === 0) {
    console.log("The breed you have searched does not exist.");
  } else if (response && response.statusCode >= 400) {
    console.log(data.message);
  } else if (data.length !== 0) {
    console.log(data[0].description);
  }
});

