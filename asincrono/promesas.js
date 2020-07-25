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

const getUsuarios = (id) => {

    return new Promise((resolve, reject) => {
        const usuario = usuarios.find(usuario => usuario.id === id);

        if (!usuario) {
            reject(`No existe usuario con el ${id}`);
        } else {
            resolve(usuario);
        }
    });

}

getUsuarios(2)
    .then(console.log)
    .catch(err => {
        console.log("Err: ", err);
    });