const express = require('express')

//Crear el objeto principal de la api

const app = express()


//rutas de bootcamps

const usersRoutes = require('./rutas/users.js')

//vincular  rutas al objeto app



//rutas de users.js



//vincular  rutas al objeto app
app.use("/api/v1/devcamp/users", usersRoutes)


//Crear el servidor de la aplicacion
app.listen(8000,console.log ('servidor ejecutando en puerto ' + 8000))