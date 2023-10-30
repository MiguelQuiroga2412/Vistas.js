const express = require('express');
const app = express();
const port = 7000; // Elige un puerto disponible

app.use(express.json()); // Middleware para analizar datos JSON

// Datos simulados de usuarios (reemplaza con una base de datos real)
const usuarios = [];

// Ruta para registrar un nuevo usuario
app.post('/api/usuarios', (req, res) => {
    
  // Obtén los datos del nuevo usuario desde el cuerpo de la solicitud
  const {tipodoc,numdoc, nombre, apellido,fnacimiento, email, password } = req.body;

  // Valida que se proporcionen todos los campos requeridos
  if (!tipodoc ||!numdoc ||!nombre ||!apellido ||!fnacimiento || !email || !password) {
    return res.status(400).json({ mensaje: 'Por favor, proporciona todos los datos requeridos.' });
  }

  // Crea un nuevo usuario simulado
  const nuevoUsuario = {
    id: usuarios.length + 1,
    tipodoc,
    numdoc,
    nombre,
    apellido,
    fnacimiento,
    email,
    password,
  };

  // Almacena el nuevo usuario en el arreglo de usuarios (simulado)
  usuarios.push(nuevoUsuario);

  // En una implementación real, aquí es donde guardarías el usuario en una base de datos.

  res.status(201).json({ mensaje: 'Registro exitoso', usuario: nuevoUsuario });
});

app.listen(port, () => {
  console.log(`API falsa en ejecución en el puerto ${port}`);
});


app.put('/api/usuarios/:id', (req, res) => {
    // Obtiene el ID del usuario de los parámetros de la URL
    const userId = parseInt(req.params.id);
  
    // Busca el usuario en la "base de datos" falsa (usuarios simulados)
    const usuarioExistente = usuarios.find((usuario) => usuario.id === userId);
  
    // Si el usuario no se encuentra, responde con un error
    if (!usuarioExistente) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  
    // Obtiene los datos actualizados del cuerpo de la solicitud
    const { tipodoc,numdoc, nombre, apellido,fnacimiento, email, password } = req.body;
  
    // Actualiza los datos del usuario
    usuarioExistente.tipodoc = tipodoc || usuarioExistente.tipodoc;
    usuarioExistente.numdoc = numdoc || usuarioExistente.numdoc;
    usuarioExistente.nombre = nombre || usuarioExistente.nombre;
    usuarioExistente.apellido = apellido || usuarioExistente.apellido;
    usuarioExistente.fnacimiento = fnacimiento || usuarioExistente.fnacimiento;
    usuarioExistente.email = email || usuarioExistente.email;
    usuarioExistente.password = password || usuarioExistente.password;
  
    // En una implementación real, aquí es donde actualizarías la base de datos real.
  
    res.status(200).json({ mensaje: 'Usuario actualizado', usuario: usuarioExistente });
  });


  
app.get('/api/usuarios', (req, res) => {
    // Devuelve la lista completa de usuarios
    res.status(200).json({ usuarios });
  });Ñ

app.delete('/api/usuarios/:id', (req, res) => {
    // Obtiene el ID del usuario de los parámetros de la URL
    const userId = parseInt(req.params.id);
  
    // Busca el usuario en la "base de datos" falsa (usuarios simulados)
    const usuarioExistente = usuarios.find((usuario) => usuario.id === userId);
  
    // Si el usuario no se encuentra, responde con un error
    if (!usuarioExistente) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  
    // Elimina el usuario de la "base de datos" falsa
    usuarios = usuarios.filter((usuario) => usuario.id !== userId);
  
    // En una implementación real, aquí es donde eliminarías el usuario de la base de datos real.
  
    res.status(200).json({ mensaje: 'Usuario eliminado' });
  });