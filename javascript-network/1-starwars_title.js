// to check episodes
const process = require('process');
const request =  require ('request');
const endpointUrl = 'https://swapi-api.alx-tools.com/api/films'
const movieEp = process.argv[2]

request(`${endpointUrl}/${movieEp}`,function(error,response,body){
    if(error){
        console.log(error)
    }
    const result = JSON.parse(body)
    console.log(result['title'])
})