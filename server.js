import bodyParser from 'body-parser';
import express from 'express';
import Schema from './server/api/schema';

import * as api from './server/api/http';

const app = express();
const port = 8081;


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json()); // handle Content-Type 'application/json' requests
app.use(bodyParser.text()); // handle Content-Type 'text/plain' requests
// Static middleware is not needed when using webpack-dev-server (npm start).
app.use(express.static('build'));

/**
 * API Endpoints
 */
app.get('/api/0/documents', api.getDocuments);


app.listen(port, () => console.log('Rest API server running on http://localhost:' + port));
