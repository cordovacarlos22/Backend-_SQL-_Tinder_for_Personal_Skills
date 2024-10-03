const path = require('path');

// Controller to render the README file with error handling
const renderReadme = (req, res) => {
  try {
    const readmePath = path.resolve(__dirname, '../README.md');  // Path to README.md
const fs = require('fs');
    const path = require('path');
    const marked = require('marked');  // Import the marked library for Markdown to HTML conversion

    // Controller to render the README file as HTML with custom styles
    const renderReadme = (req, res) => {
      try {
        const readmePath = path.resolve(__dirname, '../README.md');  // Absolute path to README.md

        // Read the README.md file
        fs.readFile(readmePath, 'utf8', (err, data) => {
          if (err) {
            throw new Error('Error loading the README file.');
          }

          // Convert Markdown to HTML
          const htmlContent = marked(data);

          // Send the HTML content wrapped in a styled template
          res.setHeader('Content-Type', 'text/html');
          res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>API Documentation</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              padding: 20px;
              max-width: 800px;
              margin: 0 auto;
              background-color: #f9f9f9;
              color: #333;
            }
            h1, h2, h3 {
              color: #444;
            }
            pre, code {
              background-color: #f4f4f4;
              padding: 10px;
              border-radius: 5px;
            }
            pre {
              overflow-x: auto;
            }
            a {
              color: #3498db;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            th, td {
              padding: 12px;
              border: 1px solid #ddd;
              text-align: left;
            }
            th {
              background-color: #f4f4f4;
            }
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
        </html>
      `);
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };

    module.exports = { renderReadme };
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