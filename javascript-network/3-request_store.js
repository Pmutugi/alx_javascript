const fs = require('fs');
const request = require('request');

// Check if correct number of arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node script.js <URL> <file path>');
  process.exit(1);
}

// Get URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make request to the URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Check if request was successful
  if (response.statusCode !== 200) {
    console.error('Failed to retrieve webpage:', response.statusMessage);
    process.exit(1);
  }

  // Write the response body to the file
  fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      process.exit(1);
    }
    console.log(`Webpage content successfully saved to ${filePath}`);
  });
});
