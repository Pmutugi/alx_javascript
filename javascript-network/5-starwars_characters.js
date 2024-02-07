const request = require('request');

// Function to fetch characters from a Star Wars movie
function getCharacters(movieId) {
    const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

    request(apiUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const movieData = JSON.parse(body);
            console.log(`Characters in ${movieData.title}:`);
            movieData.characters.forEach(characterUrl => {
                request(characterUrl, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        const characterData = JSON.parse(body);
                        console.log(characterData.name);
                    } else {
                        console.log('Error fetching character data:', error);
                    }
                });
            });
        } else {
            console.log('Error fetching movie data:', error);
        }
    });
}

// Example usage: node script.js 3
const movieId = process.argv[2];
if (movieId) {
    getCharacters(movieId);
} else {
    console.log('Please provide a movie ID as an argument.');
}
