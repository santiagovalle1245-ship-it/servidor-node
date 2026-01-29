//Importar el modulo HTTP
const { error } = require('console');
const http = require('http');

const fs = require('fs').promises;
//Definir el puerto en el que se ejecutara el servidor
const PORT = 3000;

//Crear el servidor
const servidor = http.createServer((req, res) => {

    //Lectura asincrona: no bloquea el Evento Loop
    fs.readFile('./index.html', 'utf-8')
        .then(
            data => {console.log('Ejecucion con extito', data);}
        )
        .catch
        err => 
        {
            console.log('Error en la lectura del archivo', err);
        }
    })


//Iniciar el servidor
servidor.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);

});