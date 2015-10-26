/**
 * Pokemon.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        nombre: {
            type: 'string',
            unique: true,
            required: true
        },
        tipo: {
            type: 'string',
            enum: ['agua', 'fuego', 'psiquico', 'hierba', 'electrico', 'bicho']
        },
        habilidadEspecial: {
            type: 'string',
            defaultsTo: 'Ninguno'
        },
        numerPokemon: {
            type: 'integer',
            required:true
        },
        fechaVista:{
            type:'date'
        }

    }
};








