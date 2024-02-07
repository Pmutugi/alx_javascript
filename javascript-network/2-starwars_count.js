const request = require('request');

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = 18;

// Function to fetch data from the API
function fetchData(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(body));
            }
        });
    });
}

// Function to count movies where Wedge Antilles is present
async function countMoviesWithWedgeAntilles() {
    try {
        const filmsData = await fetchData(apiUrl);
        const films = filmsData.results;

        let count = 0;

        for (const film of films) {
            const characters = film.characters;
            if (characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
                count++;
            }
        }

        console.log(`Number of movies where Wedge Antilles is present: ${count}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to count movies with Wedge Antilles
countMoviesWithWedgeAntilles();
