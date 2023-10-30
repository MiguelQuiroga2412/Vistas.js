const express = require('express')
const  router = express.Router()

// endpoints url de users
//
//Obtener todos los usuarios
router.get(('/') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos los usuarios"
    })
})
//obtener usuarios por id
router.get(('/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Obteniendo usuarios con id ${request.params.id} `
    })
})

//crear usuario
router.post(('/api/v1/devcamp/usuarios') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui se va a crear un usuario"
    })
})
/*
router.put(('/api/v1/devcamp/usuarios/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Actualizar usuario con id ${request.params.id} `
    })
})

router.delete(('/api/v1/devcamp/usuarios/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Eliminar usuario con id ${request.params.id} `
    })
})*/

module.exports = router