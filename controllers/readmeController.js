const path = require('path');

// Controller to render the README file with error handling
const renderReadme = (req, res) => {
  try {
    const readmePath = path.resolve(__dirname, '../README.md');  // Path to README.md

    // Send the README.md file
    res.sendFile(readmePath, (err) => {
      if (err) {
        throw new Error('Error loading the README file.');  // Throw error to be caught
      }
    });
  } catch (error) {
    // Handle errors from reading the file or other issues
    res.status(500).json({ message: error.message });
  }
};

module.exports = { renderReadme };