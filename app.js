const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// lib for debuging (ref: https://www.npmjs.com/package/pry)
// const pry = require('pry');

app.post('/callback', (req, res) => {
  // eval(pry.it)
  // console.log(`req.body: ${req.body.data}`)
  // console.log(`req.body.data.id: ${req.body}`)
  res.json(req.body.data);
});

var listener = app.listen(port, function(){
  console.log(`Listening on host: ${listener.address().address} port: ${listener.address().port}`);
});
