//Importar el modulo HTTP
const http = require('http');

//Definir el puerto en el que se ejecutara el servidor
const PORT = 3000;

//Crear el servidor
const servidor = http.createServer((req, res) => {

//Manejo de diferentes rutas
    if(req.url === '/'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Pagina de principal.');
    } 
    else if(req.url === '/acerca'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Esta es la pagina de acerca de.');
    }
    else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Pagina no encontrada.');
    }
});

//Iniciar el servidor
servidor.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);

});