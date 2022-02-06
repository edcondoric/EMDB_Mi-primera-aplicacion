const express = require('express');
const app = express();
// app.use(express.urlencoded());

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true });

mongoose.connection.on("error", function(error) {
  console.error('ERROR', error);
});

const VisitantesSchema = mongoose.Schema({date: { type: Date },name: String,});
const Visitor = mongoose.model("Visitors", VisitantesSchema);

let dateString = Date();
let good = 'El visitante fue almacenado con éxito';

app.get('/', (req, res) => {
  var name = req.query.name;
  if (!name) name = 'Anónimo';

  const person = new Visitor ({ name, date: dateString,});

  person.save((error) => {
    if (error) return res.send(`error`);

    return res.send(`<h1> ${good} </h1>`);
  });

});


/*
Reto 3

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
	res.send('<h1>Hola ' + aux + '!</h1>');
});


*/


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