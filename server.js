// server.js
const express = require('express');
const path = require('path');

const app = express();

// Sirve los archivos estáticos desde el directorio build
app.use(express.static(path.join(__dirname, 'build')));

// Responde a la ruta /blue con el archivo blue.html
app.get('/blue', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'blue.html'));
});

// Responde a cualquier otra solicitud con el archivo index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Inicia el servidor
const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});