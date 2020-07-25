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

//retorna una promesa pero no necesitamos manejar resolve y reject
const getUsuarios = async(id) => {

    const usuario = usuarios.find(usuario => usuario.id === id);

    if (!usuario) {
        throw new Error(`No existe un usuario con el id ${usuario}`);
    } else {
        return usuario;
    }

}

const getInformacion = async(id) => {
    const usuario = await getUsuarios(id);

    return `${usuario.nombre} tiene un id de ${usuario.id}`;
}

getInformacion(1).then(console.log);