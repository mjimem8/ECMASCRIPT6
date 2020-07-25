const getNombre = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fernando');
        }, 3000)
    })
};

getNombre().then(console.log)

const saludo = async() => {
    const nombre = await getNombre();

    return `Hola ${nombre}`;
}

saludo().then(console.log);