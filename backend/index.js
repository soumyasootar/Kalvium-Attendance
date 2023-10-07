// Import the express module
const express = require('express');

// Initialize the express application
const app = express();

// Define a simple GET endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Start the server
const port =4000;
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
