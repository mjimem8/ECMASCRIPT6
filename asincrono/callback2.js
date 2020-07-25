const usuarios = [{
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Antonio'
    }
];

const getUsuarios = (id, callback) => {
    const usuario = usuarios.find(usuario => usuario.id === id);

    if (!usuario) {
        callback(`No existe usuario con el ${id}`);
    } else {
        callback(null, usuario);
    }
}

getUsuarios(2, (err, usuario) => {
    if (err) { return console.log(err) }

    console.log('usuario', usuario);
});