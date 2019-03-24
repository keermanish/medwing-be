const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./common/config');
const db = require('./common/db');
const Routes = require('./modules');

const app = express();

// initialize db connection
db.init();

/* check for CORS */
app.use(cors());

/* secure your express apps by setting various HTTP headers */
app.use(helmet());

/* log incomming request details */
app.use(morgan(':method :url :date :remote-addr :status :response-time'));

/* parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ 'extended': false }));

/* parse application/json */
app.use(bodyParser.json());

// all application routes
app.use(Routes);

// test route
app.get('/', (req, res) => {
  res.status(200).send('Medwing');
});

// start app
app.listen(config.PORT, () => {
  console.log(`App listen on ${config.PORT}${JSON.stringify(config)}`);
});
