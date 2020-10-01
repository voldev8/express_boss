const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./server/api');


const app = express();
/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(cors());

// Add middleware for parsing request bodies here:
app.use(bodyParser.json())

// Mount your existing apiRouter below at the '/api' path.
app.use('/api', apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, function(){
    console.log('app listening on port ',PORT)
  })
}

module.exports = app;
