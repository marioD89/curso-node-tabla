const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'es la base de la tabla'
})

.option('l',{
    alias: 'listar',
    type:'boolean',
    default: false ,
    describe: 'listado'
})

.option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: 10,
    describe: 'este es el numero hasto donde quieres la tabla'
})


.check( (argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero'
    }

    return true;
})


.argv;

module.exports = argv;