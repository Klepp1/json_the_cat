const request = require('request');


request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  if (data !== []) {
    console.log('Breed not found');
  } else {
    console.log(data);
    console.log(typeof data);
  }
});