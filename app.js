const express = require('express');
const app = express();

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

app.get('/makers/:nombre', (req, res) => {
  // let nombre = req.query.name;
  let { nombre } = req.params;
  if(nombre == null || nombre == ''){
      nombre = "desconocido";
  }
  nombre = capitalize(nombre);
  res.send('<h1>Hola ' + nombre + '!</h1>');
});

// express deprecated req.param(name): Use req.params, req.body, or req.query instead app.js:6:20

app.listen(3000, () => console.log('Listening on port 3000!'));