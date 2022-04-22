const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      return callback(error, null);
    }
    if (data.length === 0) {
      return callback('breed not found', null);
    } else {
      return callback(null, data[0]['description']);
    }
  });
};
module.exports = { fetchBreedDescription };