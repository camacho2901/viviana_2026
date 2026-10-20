(function () {
    'use strict';

    var DIAS = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];

    var NORMAS = [
        {
            titulo: 'Lineamientos de Evaluación',
            archivo: encodeURI('normas/Lineamientos de Evaluación.pdf')
        },
        {
            titulo: 'Normas de Convivencia para las Clases Virtuales',
            archivo: encodeURI('normas/NORMAS DE CONVIVENCIA PARA LAS CLASES VIRTUALES.pdf')
        }
    ];

    var PLANTEL = [
        { nombre: 'Victor', dias: { LUNES: '4B/4B-6A/6A', MARTES: '3B/6A/6B', MIÉRCOLES: '5B/5B-6B/6B', JUEVES: '5B/3B/4B', VIERNES: '3B', SÁBADO: '' } },
        { nombre: 'Lidia', dias: { LUNES: '5A/5A-2A/2A', MARTES: '4A/4A-3A/3A', MIÉRCOLES: '2A/3A/5A', JUEVES: '4A', VIERNES: '', SÁBADO: '' } },
        { nombre: 'Inés', dias: { LUNES: 'TARDE:3B/3B/3B', MARTES: '2B/2B/1B T:3B', MIÉRCOLES: '1B/1A/1A', JUEVES: '2B/1A/1B', VIERNES: '', SÁBADO: '' } },
        { nombre: 'Emeteria', dias: { LUNES: '', MARTES: '5B/6B/5A', MIÉRCOLES: '1A/1A-1B/1B', JUEVES: '6B/6B/5B', VIERNES: '6B/5A/5A', SÁBADO: '5A/5B/5B' } },
        { nombre: 'Teodora', dias: { LUNES: '2A/2A-4B/4B', MARTES: '4A/4A', MIÉRCOLES: '', JUEVES: '', VIERNES: '4B/4A', SÁBADO: '' } },
        { nombre: 'Corina', dias: { LUNES: '', MARTES: '3A/3A-2B/2B', MIÉRCOLES: '3B/6A/5AB', JUEVES: '4BA/3A/6A', VIERNES: '3B/3B', SÁBADO: '6A/6A/6BA' } },
        { nombre: 'Maria C.', dias: { LUNES: '3B/2B', MARTES: '1B/1A', MIÉRCOLES: '3A/2B', JUEVES: '', VIERNES: '1A/3A/1B', SÁBADO: '2B/2A/3B' } },
        { nombre: 'Zenobia', dias: { LUNES: '3A', MARTES: '', MIÉRCOLES: '', JUEVES: '', VIERNES: '3A', SÁBADO: '3A' } },
        { nombre: 'Valeria S.', dias: { LUNES: '', MARTES: '', MIÉRCOLES: '', JUEVES: '', VIERNES: '', SÁBADO: '1B/1A' } },
        { nombre: 'Celia P.', dias: { LUNES: '2B/3A/5B', MARTES: '2A', MIÉRCOLES: '', JUEVES: '', VIERNES: '5A/6B/6A', SÁBADO: '4B/3B/4A' } },
        { nombre: 'Raquel G.', dias: { LUNES: '6A/6A-5A/5A', MARTES: '1A/4B', MIÉRCOLES: '', JUEVES: '2A/4A/1A', VIERNES: '2A/4B/1A', SÁBADO: '4A' } },
        { nombre: 'Linet', dias: { LUNES: '1B/2B/3B', MARTES: '', MIÉRCOLES: '6B/6B-5B/3B', JUEVES: '1B/2B/3B', VIERNES: '5B/1B/2B', SÁBADO: '' } },
        { nombre: 'Paola A.', dias: { LUNES: '', MARTES: '', MIÉRCOLES: '', JUEVES: '1B/2B', VIERNES: '', SÁBADO: '' } },
        { nombre: 'Mildred', dias: { LUNES: '6B/5B/4A', MARTES: '4B/5B/6A', MIÉRCOLES: '5A/4A/6A', JUEVES: '5A/4B/6B', VIERNES: '', SÁBADO: '' } },
        { nombre: 'Sofia C.', dias: { LUNES: '', MARTES: '', MIÉRCOLES: '', JUEVES: '', VIERNES: '', SÁBADO: '3A4B' } },
        { nombre: 'Nilza', dias: { LUNES: '', MARTES: '5A/3B', MIÉRCOLES: '1B/2B', JUEVES: '1A/4A', VIERNES: '6A/2A/5B', SÁBADO: '6B' } },
        { nombre: 'Celia C.', dias: { LUNES: 'TARDE:3A/3A/3A', MARTES: '', MIÉRCOLES: '', JUEVES: 'TARDE.3A', VIERNES: '1B/1A', SÁBADO: '1A/1B' } },
        { nombre: 'Javier', dias: { LUNES: '', MARTES: 'TARDE: 5A/5A/5A', MIÉRCOLES: 'TARDE:5B/5B/5B', JUEVES: 'TARDE:5A/5A/5A', VIERNES: 'TARDE:5B/5B/5B', SÁBADO: '' } },
        { nombre: 'Eduardo', dias: { LUNES: 'TARDE:4B/4B', MARTES: '', MIÉRCOLES: 'TARDE:4A/4A/4A', JUEVES: '', VIERNES: 'TARDE:4A/4B/4B', SÁBADO: '2B2B' } },
        { nombre: 'Jose F.', dias: { LUNES: 'TARDE:6A/6A/6A', MARTES: 'TARDE:6B/6B/6B', MIÉRCOLES: 'TARDE:6A/6A/6A', JUEVES: '2A2A TARDE:6B6B6B', VIERNES: '', SÁBADO: '' } },
        { nombre: 'Benicio', dias: { LUNES: '3B/4A/6B', MARTES: '2A/1B/1A', MIÉRCOLES: '2B/4B/3A', JUEVES: '6A/5B/5A', VIERNES: '', SÁBADO: '' } },
        { nombre: 'Jaime', dias: { LUNES: '5B/1B/1A', MARTES: '6A/5A/3B', MIÉRCOLES: '', JUEVES: '', VIERNES: '4A/2B/6B', SÁBADO: '2A/3A/4B' } },
        { nombre: 'Raquel T.', dias: { LUNES: '', MARTES: '6B/4B/5B', MIÉRCOLES: '6A/5A/4A', JUEVES: '', VIERNES: '', SÁBADO: '' } },
        { nombre: 'Sonia', dias: { LUNES: '', MARTES: '', MIÉRCOLES: '4A/3B/4B', JUEVES: '3A/5A', VIERNES: '3A/5B/3B', SÁBADO: '6B/6A' } },
        { nombre: 'Janneth', dias: { LUNES: '4A/1A/1B', MARTES: '', MIÉRCOLES: '', JUEVES: '', VIERNES: '2B/6A/2A', SÁBADO: '3B/5A/3A' } },
        { nombre: 'Alejandro', dias: { LUNES: '1A/6B/3A', MARTES: '', MIÉRCOLES: '4B/2A', JUEVES: '3B/6A', VIERNES: '', SÁBADO: '5B/4A/5A' } }
    ];

    function abrirVisor(item) {
        var visor = document.getElementById('visor');
        var iframe = document.getElementById('visor-iframe');
        var titulo = document.getElementById('visor-titulo');
        var abrir = document.getElementById('visor-abrir');

        if (!visor || !iframe) {
            return;
        }

        titulo.textContent = item.titulo;
        iframe.src = item.archivo;
        abrir.href = item.archivo;

        visor.hidden = false;
        visor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function cerrarVisor() {
        var visor = document.getElementById('visor');
        var iframe = document.getElementById('visor-iframe');

        if (!visor) {
            return;
        }

        visor.hidden = true;

        if (iframe) {
            iframe.src = '';
        }
    }

    function crearTarjetaPdf(item) {
        var tarjeta = document.createElement('div');
        tarjeta.className = 'pdf-card';

        var icono = document.createElement('div');
        icono.className = 'icono-tarjeta icono-pdf';
        tarjeta.appendChild(icono);

        var titulo = document.createElement('h3');
        titulo.textContent = item.titulo;
        tarjeta.appendChild(titulo);

        var acciones = document.createElement('div');
        acciones.className = 'pdf-acciones';

        var ver = document.createElement('button');
        ver.type = 'button';
        ver.className = 'boton-tarjeta';
        ver.textContent = 'Ver documento';
        ver.addEventListener('click', function () {
            abrirVisor(item);
        });
        acciones.appendChild(ver);

        var abrir = document.createElement('a');
        abrir.className = 'boton-cerrar';
        abrir.href = item.archivo;
        abrir.target = '_blank';
        abrir.rel = 'noopener';
        abrir.textContent = 'Abrir';
        acciones.appendChild(abrir);

        tarjeta.appendChild(acciones);

        return tarjeta;
    }

    function iniciales(nombre) {
        var partes = nombre.replace(/\./g, '').split(/\s+/).filter(function (parte) {
            return parte.length > 0;
        });

        var inicial = partes[0] ? partes[0].charAt(0) : '';
        var segunda = partes.length > 1 ? partes[partes.length - 1].charAt(0) : '';

        return (inicial + segunda).toUpperCase();
    }

    function crearChips(texto) {
        var chips = [];

        texto.split('/').forEach(function (token) {
            token = token.trim();

            if (!token) {
                return;
            }

            var turno = token.match(/^(.*?)\s*(TARDE\.?|T:)\s*(.*)$/i);

            if (turno) {
                if (turno[1]) {
                    chips.push({ texto: turno[1], tipo: 'curso' });
                }

                chips.push({ texto: 'Tarde', tipo: 'tarde' });

                if (turno[3]) {
                    chips.push({ texto: turno[3], tipo: 'curso' });
                }

                return;
            }

            chips.push({ texto: token, tipo: 'curso' });
        });

        return chips;
    }

    function crearTarjetaDocente(docente) {
        var tarjeta = document.createElement('article');
        tarjeta.className = 'docente-card';

        var cabecera = document.createElement('div');
        cabecera.className = 'docente-cabecera';

        var avatar = document.createElement('div');
        avatar.className = 'docente-avatar';
        avatar.textContent = iniciales(docente.nombre);
        cabecera.appendChild(avatar);

        var datos = document.createElement('div');
        datos.className = 'docente-datos';

        var nombre = document.createElement('h3');
        nombre.className = 'docente-nombre';
        nombre.textContent = 'Prof. ' + docente.nombre;
        datos.appendChild(nombre);

        var cargo = document.createElement('span');
        cargo.className = 'docente-cargo';
        cargo.textContent = 'Docente de la Unidad Educativa';
        datos.appendChild(cargo);

        cabecera.appendChild(datos);

        var diasActivos = DIAS.filter(function (dia) {
            return Boolean(docente.dias[dia]);
        }).length;

        var badge = document.createElement('span');
        badge.className = 'docente-badge';
        badge.textContent = diasActivos + (diasActivos === 1 ? ' día' : ' días');
        cabecera.appendChild(badge);

        tarjeta.appendChild(cabecera);

        var dias = document.createElement('div');
        dias.className = 'docente-dias';
        var tieneAsignaciones = false;

        DIAS.forEach(function (dia) {
            var texto = docente.dias[dia];

            if (!texto) {
                return;
            }

            tieneAsignaciones = true;

            var fila = document.createElement('div');
            fila.className = 'docente-dia';

            var etiqueta = document.createElement('span');
            etiqueta.className = 'docente-dia-label';
            etiqueta.textContent = dia;
            fila.appendChild(etiqueta);

            var cursos = document.createElement('div');
            cursos.className = 'docente-dia-cursos';

            crearChips(texto).forEach(function (chip) {
                var elemento = document.createElement('span');
                elemento.className = 'docente-curso';

                if (chip.tipo === 'tarde') {
                    elemento.className += ' docente-curso-turno';
                }

                elemento.textContent = chip.texto;
                cursos.appendChild(elemento);
            });

            fila.appendChild(cursos);
            dias.appendChild(fila);
        });

        if (!tieneAsignaciones) {
            var vacio = document.createElement('p');
            vacio.className = 'docente-sin';
            vacio.textContent = 'Sin asignaciones registradas.';
            dias.appendChild(vacio);
        }

        tarjeta.appendChild(dias);

        return tarjeta;
    }

    function renderPlantel(contenedor, docentes) {
        contenedor.innerHTML = '';

        docentes.forEach(function (docente) {
            contenedor.appendChild(crearTarjetaDocente(docente));
        });
    }

    function actualizarContador(visibles) {
        var contador = document.getElementById('contador-docentes');

        if (!contador) {
            return;
        }

        contador.textContent = visibles + ' de ' + PLANTEL.length + ' docentes';
    }

    document.addEventListener('DOMContentLoaded', function () {
        var listaNormas = document.getElementById('lista-normas');

        if (listaNormas) {
            NORMAS.forEach(function (item) {
                listaNormas.appendChild(crearTarjetaPdf(item));
            });
        }

        var cerrar = document.getElementById('visor-cerrar');
        if (cerrar) {
            cerrar.addEventListener('click', cerrarVisor);
        }

        var contenedor = document.getElementById('plantel-docentes');
        var buscador = document.getElementById('buscador-docentes');

        if (!contenedor) {
            return;
        }

        renderPlantel(contenedor, PLANTEL);
        actualizarContador(PLANTEL.length);

        if (buscador) {
            buscador.addEventListener('input', function () {
                var termino = buscador.value.trim().toLowerCase();
                var filtrados = PLANTEL.filter(function (docente) {
                    if (!termino) {
                        return true;
                    }

                    var texto = docente.nombre + ' ' + DIAS.map(function (dia) {
                        return docente.dias[dia];
                    }).join(' ');

                    return texto.toLowerCase().indexOf(termino) !== -1;
                });

                renderPlantel(contenedor, filtrados);
                actualizarContador(filtrados.length);
            });
        }
    });
})();
