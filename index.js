const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription('Siberian', (error, desc) => {

  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }

});