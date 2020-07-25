const getUsuarioById = (id, callback) => {
    const usuario = {
        nombre: 'Fernando',
        id
    };

    id === 20 ? callback("Mensaje de error!!", usuario) : callback(null, usuario);
}

getUsuarioById(1, (err, user) => {
    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', user);
});