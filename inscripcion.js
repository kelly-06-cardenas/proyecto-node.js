const Contenido = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'x'

    }
}

const argv = require('yargs')
            .command('inscribir', 'Inscribir alumno', Contenido)
            .argv


module.exports = {
    Contenido,
    argv
};