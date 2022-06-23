const express = require('express');
const app = express();
const path = require('path')
const {dirname} = require('path')
const port = process.env.PORT || 3000;

//seteando plantilla ejs
app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'))

//puerto de escucha
app.listen(port,(req,res) => {
    console.log(`corriendo en el puerto ${port}`)
})

// archivos estaticos
app.use(express.static(path.join(__dirname +'../public')));

//rutas
const routes = require('./routes/main.routes')
app.use(routes)





