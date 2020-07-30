const fetchBreed = require('./breedFetcher.js');
const nameBreed = process.argv.slice(2);


fetchBreed(nameBreed, (error, desc) => {
if(error) {
  console.log('Error: ', error);
} else {
  console.log(desc);
}

});