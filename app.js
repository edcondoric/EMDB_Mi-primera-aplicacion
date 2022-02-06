const express = require('express');
const app = express();
app.use(express.urlencoded());

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

app.get('/',(req, res) => {
	let valor = `
	<form action="/" method="post">
	<input type="text" name="name"> 
	<button type="submit">Enviar</button>
	</form>`;
	res.send(valor);
});

app.post('/',(req, res) => {
	//let name = req.body.name;
	let aux = req.body.name;
	res.send('<h1> Hola ' + aux + '</h1>');
});



/*

Reto 2

app.get('/',(req, res) => {
	
	let valor = "";
	for (let i = 1; i <= 50; i++ ){
		if(i%2 == 0) valor += '<p>'+i+' Soy Par! </p>';
		else valor += '<p>'+i+' Soy Impar! </p>';	
	}
	res.send(valor);
});


*/



/*

Reto 1

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

*/

app.listen(3000, () => console.log('Listening on port 3000!'));