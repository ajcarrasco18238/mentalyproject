const express = require('express');
const app = express();
const port = 3000;

// Configurar rutas
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/acerca.html');
});

// Configurar carpeta de recursos estáticos
app.use(express.static('public/'));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
