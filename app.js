const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos desde el directorio 'assets'
app.use(express.static(path.join(__dirname, 'Armadillo')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// Ruta para about.html
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Ruta para contact.html
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});
// Levantar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
