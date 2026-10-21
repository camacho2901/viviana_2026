/*
 * Autenticación local para un sitio estático.
 * Las contraseñas se guardan como PBKDF2-SHA256 con sal.
 * Esto evita el texto plano, pero NO equivale a una autenticación de servidor:
 * cualquier persona puede descargar este archivo y auditarlo.
 */

window.USUARIOS = [
    { usuario: 'Admin2026', rol: 'admin', sal: 'dfc6dd0c26222a709c695e696d736197', iteraciones: 210000, hash: '2c6e11e878f7cd5957b2ea665ba9c6e080a6d4547a49e5300bc253fedca7d170' },
    { usuario: 'anaflores', rol: 'estudiante', sal: '58f51706e919161876700909bfc8f351', iteraciones: 210000, hash: '98b2f772a59f6e2d32827d630837fea9b7a88d8beef43ed9f1ed4455478d62fb' },
    { usuario: 'luismamani', rol: 'estudiante', sal: '30be48b4cd2a9b0a7aa1827dde3b3946', iteraciones: 210000, hash: '0dbfe350ca519cb76b07e2f90cfd302b28c0df6efbf384243e761c728191caae' },
    { usuario: 'carlacondori', rol: 'estudiante', sal: 'de73cad086cd1125c52457cc2e34fb56', iteraciones: 210000, hash: '35b19e3c02cb568bc1f6fad40323c5ca46a987c72303be910b31224936df3ee7' },
    { usuario: 'jorgequispe', rol: 'estudiante', sal: 'cd1dba4c7f10cd4405fc2fad27794ed9', iteraciones: 210000, hash: 'e21ce66b66c85e67f0b565fd0f280eb9cb7387e9d0ba4877a005bf68016b347a' },
    { usuario: 'mariachoque', rol: 'estudiante', sal: 'ebe0057c6fe08f23bc2d33a87ec7136d', iteraciones: 210000, hash: '12e792143afcdf7f5bb7c435aa156ff5db14c7d3472727cb67a3fbcc30a2c499' },
    { usuario: 'pedrocruz', rol: 'estudiante', sal: '4a5b2ad44239ac43b71f5082ceab02e4', iteraciones: 210000, hash: '3cd436cfc0ab0a4e0f8bcae855da8ce044d3f58576be02dce2f8d68ebe9fe9fc' },
    { usuario: 'rosaapaza', rol: 'estudiante', sal: 'a427b90815fdaad3108203c5b900be89', iteraciones: 210000, hash: 'fbfb22349ae510d61fbb949ced541fc010938edabba50daa0cf52cecba9a4a76' },
    { usuario: 'juancalle', rol: 'estudiante', sal: 'dd4d899f469fe256e2008bf3378baf46', iteraciones: 210000, hash: '5a5279cb1e0df9b6d81df0018fe9885a826fa997813910372a2fe32082efe75a' },
    { usuario: 'elenatapia', rol: 'estudiante', sal: 'eb9e84883df62c142857a221ed9fbc4b', iteraciones: 210000, hash: '693360e186a39a31c61541f17e94e5e22c037f010d18e60030b5e48c3754d692' },
    { usuario: 'diegohuanca', rol: 'estudiante', sal: '2b3bda443ea73c58c208955388b9d697', iteraciones: 210000, hash: '11561e47e676147ca5a4de6c2038552b67c3f7d52f17b290c854665dc0e29288' },
    { usuario: 'sofiagutierrez', rol: 'estudiante', sal: '0674b29e57f67c7f28cd9e543b56cae2', iteraciones: 210000, hash: '8deba87777d1eb5de6677e8872b36f53cd74337a041ded20fe52e02575b88823' },
    { usuario: 'raulvargas', rol: 'estudiante', sal: 'a727c884422783347eb13f88efbcd897', iteraciones: 210000, hash: '33898a30aae1eb93da42932b09b9234f578804e1356957227d60ffae1bdc82e8' },
    { usuario: 'lilianacolque', rol: 'estudiante', sal: '68f5af0fb55c90bf2f5cdf5f67d898cf', iteraciones: 210000, hash: 'd7ac1ac9e5ae49e03d3b2dcd5fcc572248387283e8fe9ff59c474b04ba9ad247' },
    { usuario: 'miguelrojas', rol: 'estudiante', sal: 'e2743a4a05ae266bb0a0f0afa7cd2060', iteraciones: 210000, hash: '3f034ef2bfa3bb40974e6e0277658b87d67ff0081a8d1182835fd6bb10a1605d' },
    { usuario: 'danielamendoza', rol: 'estudiante', sal: '608b6664cab7b5096e0ac586582aa809', iteraciones: 210000, hash: 'fc45831ebb90511c4b3db3d6e269bdc04193fb075e4f7fa0e4b8b152bdda2347' },
    { usuario: 'oscarcabrera', rol: 'estudiante', sal: 'a475904695f40d4e88368002e6eaba8b', iteraciones: 210000, hash: '15d6c2a83b91653bc6c1ffe3af5a0e2b7a458f17a251f4011cd28ad4c7d3272a' },
    { usuario: 'paolacortez', rol: 'estudiante', sal: '23115aff375782bb1f595caa5aff2ba4', iteraciones: 210000, hash: 'dc5c92c824f334a9649e15bec4e7aeb580cf3ed0d9367706d12bd85e2417a295' },
    { usuario: 'fernandolopez', rol: 'estudiante', sal: '04e8e9e88fb6a850e522280947eec531', iteraciones: 210000, hash: '087c9a6af746a560860e0835b457d4b7ded44a5e7de86984f7d3c223ec7ec807' },
    { usuario: 'andrearamos', rol: 'estudiante', sal: '69eccc214dd5fe53a2036d28e7894944', iteraciones: 210000, hash: '981cfbb339a8bee6b85286c5a258cef7a73141ecab900376173bf28753a4ef7a' },
    { usuario: 'hugosalazar', rol: 'estudiante', sal: '158e9ed3b94391180ecf962282a10420', iteraciones: 210000, hash: 'dcd4d854783c69336cad0c897360e4970a6c8b10352203974c94da409ed03d93' },
    { usuario: 'valeriamiranda', rol: 'estudiante', sal: '1b07a6c7efa42c25663c3414eaeca5df', iteraciones: 210000, hash: 'a680ea88c11d67d521e9664f9abb81987b040640a39b07975bc38aa8099430df' },
    { usuario: 'ivantomaya', rol: 'estudiante', sal: '22fa1b4b0f4240a40aa8be8acfb9d674', iteraciones: 210000, hash: 'b25d406629249eed3c9e0776b49d92d9cdaf32be86c0bebc24311b14f59a5f95' },
    { usuario: 'nadiaponce', rol: 'estudiante', sal: '73d0d72ef92b772063aaf5a3f81458be', iteraciones: 210000, hash: 'cdd48401c7a339031690895369e47179802113b77d90a3375b30604ef5411a66' },
    { usuario: 'sebastianvega', rol: 'estudiante', sal: '0efdee858627980a17e6c760d3289ba6', iteraciones: 210000, hash: '39840524652767141df0f53db8d1b85f64b2d50b2437f5605620fdb927ef75e1' },
    { usuario: 'camilaurquieta', rol: 'estudiante', sal: 'cb8a5f2d8bca9087aa252570ce902ad1', iteraciones: 210000, hash: '2903919bd9cb1875c58e6263524fcfe81d5e5c2d79186dc262ecedc9ce04b9e1' },
    { usuario: 'martinaguilar', rol: 'estudiante', sal: 'e6b0a95af1b5f9ee26a2c3c4d49c14d9', iteraciones: 210000, hash: '53c2bca1deb09d0e7a1000594c29142da925fd67766d038747368609e32ee8c3' },
    { usuario: 'gabrielcastro', rol: 'estudiante', sal: '5f0c2bad71dc12dcb8a311b1b151feb2', iteraciones: 210000, hash: '35747d9bd8612e1fa04868cd223b132dd68e05db6bafdd56de062ef3b37b0530' },
    { usuario: 'renatobaldivieso', rol: 'estudiante', sal: '07929f71cf0eedeca6c8bf82d911e6a1', iteraciones: 210000, hash: '68f12dd31830ca9065f33e1e287f43bc21d1faa7915cf8c18ff726e7a553666a' },
    { usuario: 'marisolchuquimia', rol: 'estudiante', sal: '0854ca5bf4de09d98846258a88f93d94', iteraciones: 210000, hash: '928c129638c1b66b5c0996748402246e5f97f2a805121fccbc0d6f96eab8fe06' },
    { usuario: 'alvaromaquera', rol: 'estudiante', sal: 'e47db0a0cce289e6838b09961a53ef16', iteraciones: 210000, hash: '0cbe7c0f10ba67bb3638d46349674b1c89c10b6dad4a2d13e28222573840f5b6' }
];

function hexABytes(hex) {
    var bytes = new Uint8Array(hex.length / 2);

    for (var i = 0; i < bytes.length; i += 1) {
        bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
    }

    return bytes;
}

function derivarClave(password, sal, iteraciones) {
    var codificador = new TextEncoder();

    return window.crypto.subtle.importKey(
        'raw',
        codificador.encode(password),
        { name: 'PBKDF2' },
        false,
        ['deriveBits']
    ).then(function (clave) {
        return window.crypto.subtle.deriveBits(
            {
                name: 'PBKDF2',
                salt: hexABytes(sal),
                iterations: iteraciones,
                hash: 'SHA-256'
            },
            clave,
            256
        );
    }).then(function (bits) {
        var vista = new Uint8Array(bits);
        var hex = '';

        for (var i = 0; i < vista.length; i += 1) {
            hex += vista[i].toString(16).padStart(2, '0');
        }

        return hex;
    });
}

function compararSeguro(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) {
        return false;
    }

    var diferencia = 0;

    for (var i = 0; i < a.length; i += 1) {
        diferencia |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }

    return diferencia === 0;
}

window.autenticar = function (usuario, password) {
    var lista = window.USUARIOS || [];
    var clave = String(usuario || '').trim().toLowerCase();
    var cuenta = null;

    for (var i = 0; i < lista.length; i += 1) {
        if (lista[i].usuario.toLowerCase() === clave) {
            cuenta = lista[i];
            break;
        }
    }

    if (!cuenta || typeof password !== 'string' || password.length === 0) {
        return Promise.resolve(null);
    }

    if (!window.crypto || !window.crypto.subtle || typeof window.TextEncoder !== 'function') {
        return Promise.resolve(null);
    }

    return derivarClave(password, cuenta.sal, cuenta.iteraciones).then(function (hash) {
        if (!compararSeguro(hash, cuenta.hash)) {
            return null;
        }

        return { usuario: cuenta.usuario, rol: cuenta.rol };
    }).catch(function () {
        return null;
    });
};
