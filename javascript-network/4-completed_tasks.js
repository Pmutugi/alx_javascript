const request = require('request');

// Check if the correct number of arguments are provided
if (process.argv.length !== 3) {
  console.error('Usage: node script.js <API_URL>');
  process.exit(1);
}

// Get API URL from command line argument
const apiUrl = process.argv[2];

// Make request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Check if request was successful
  if (response.statusCode !== 200) {
    console.error('Failed to retrieve data:', response.statusMessage);
    process.exit(1);
  }

  // Parse the JSON response
  const todos = JSON.parse(body);

  // Create an object to store the number of tasks completed by each user
  const completedTasksByUser = {};

  // Iterate through the todos to count completed tasks by user id
  todos.forEach(todo => {
    if (todo.completed) {
      const userId = todo.userId;
      completedTasksByUser[userId] = (completedTasksByUser[userId] || 0) + 1;
    }
  });

  // Print users with completed tasks
  for (const userId in completedTasksByUser) {
    console.log(`${userId}: ${completedTasksByUser[userId]}`);
  }
});
