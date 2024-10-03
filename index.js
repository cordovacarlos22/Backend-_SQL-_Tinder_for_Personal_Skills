// ? this imports dotenv to be able to use environment variables
require('dotenv').config()

const readmeRoute = require('./routes/readmeRoute');

// ! #1 imports express
const express = require('express')
// ! #2 imports create an instance of express
const app = express()

// ! #3 sets up the port for the server
const port = process.env.SERVER_PORT || 3000

// ! #4 sets up middleware to parse JSON requests
app.use(express.json())

// ! #5 sets up the endpoint for testing purposes
// 
app.use('/', readmeRoute);

app.get('/test', (req, res) => {
  try {
    res.status(200).json("success")
  } catch (error) {
    res.status(500).json("error")
  }
});

// ! #7 requires and mounts the user routes
const userRoutes = require('./routes/user.route')
const { renderReadme } = require('./controllers/readmeController')
app.use('/api/v1', userRoutes)


// ! #6 starts the server and listens on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
