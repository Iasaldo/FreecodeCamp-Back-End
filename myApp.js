const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Server error:', err);
});

// Export the app (optional, only if needed for testing or modularization)
module.exports = app;