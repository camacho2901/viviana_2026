window.USUARIOS = [
    { usuario: 'Admin2026', password: 'Admin2026', rol: 'admin' },

    { usuario: 'anaflores', password: '48213957', rol: 'estudiante' },
    { usuario: 'luismamani', password: '90347126', rol: 'estudiante' },
    { usuario: 'carlacondori', password: '17459038', rol: 'estudiante' },
    { usuario: 'jorgequispe', password: '62840193', rol: 'estudiante' },
    { usuario: 'mariachoque', password: '35908712', rol: 'estudiante' },
    { usuario: 'pedrocruz', password: '72015486', rol: 'estudiante' },
    { usuario: 'rosaapaza', password: '24681903', rol: 'estudiante' },
    { usuario: 'juancalle', password: '89120574', rol: 'estudiante' },
    { usuario: 'elenatapia', password: '53791648', rol: 'estudiante' },
    { usuario: 'diegohuanca', password: '40572819', rol: 'estudiante' },
    { usuario: 'sofiagutierrez', password: '96318407', rol: 'estudiante' },
    { usuario: 'raulvargas', password: '21847596', rol: 'estudiante' },
    { usuario: 'lilianacolque', password: '67492031', rol: 'estudiante' },
    { usuario: 'miguelrojas', password: '18205649', rol: 'estudiante' },
    { usuario: 'danielamendoza', password: '73964180', rol: 'estudiante' },
    { usuario: 'oscarcabrera', password: '50831726', rol: 'estudiante' },
    { usuario: 'paolacortez', password: '92476015', rol: 'estudiante' },
    { usuario: 'fernandolopez', password: '36104829', rol: 'estudiante' },
    { usuario: 'andrearamos', password: '84720593', rol: 'estudiante' },
    { usuario: 'hugosalazar', password: '15963280', rol: 'estudiante' },
    { usuario: 'valeriamiranda', password: '48027156', rol: 'estudiante' },
    { usuario: 'ivantomaya', password: '69251830', rol: 'estudiante' },
    { usuario: 'nadiaponce', password: '30584917', rol: 'estudiante' },
    { usuario: 'sebastianvega', password: '87164025', rol: 'estudiante' },
    { usuario: 'camilaurquieta', password: '21478963', rol: 'estudiante' },
    { usuario: 'martinaguilar', password: '56039471', rol: 'estudiante' },
    { usuario: 'gabrielcastro', password: '73852106', rol: 'estudiante' },
    { usuario: 'renatobaldivieso', password: '14907358', rol: 'estudiante' },
    { usuario: 'marisolchuquimia', password: '90526483', rol: 'estudiante' },
    { usuario: 'alvaromaquera', password: '62730194', rol: 'estudiante' }
];

window.autenticar = function (usuario, password) {
    var lista = window.USUARIOS || [];
    var clave = String(usuario || '').trim().toLowerCase();

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].usuario.toLowerCase() === clave && lista[i].password === password) {
            return lista[i];
        }
    }

    return null;
};