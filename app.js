const express = require('express');
const app = express();

app.get('/makers/:nombre', (req, res) => {
  // let nombre = req.query.name;
  const { nombre } = req.params;
  if(nombre == null || nombre == ''){
      nombre = "desconocido";
  }
  res.send('<h1>Hola ' + nombre + '!</h1>');
});

// express deprecated req.param(name): Use req.params, req.body, or req.query instead app.js:6:20

app.listen(3000, () => console.log('Listening on port 3000!'));