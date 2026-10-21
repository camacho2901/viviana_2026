(function () {
    'use strict';

    var ABREV = {
        MAT: 'Matemáticas',
        ING: 'Inglés',
        SOC: 'Sociales',
        BIO: 'Biología',
        LIT: 'Literatura',
        EF: 'Educación Física',
        REL: 'Religión',
        MUS: 'Música',
        TE: 'Taller/Educación Tecnológica',
        FIS: 'Física',
        QUI: 'Química',
        FIL: 'Filosofía',
        'T.G': 'Taller General',
        PSI: 'Psicología',
        AP: 'Arte Plástica'
    };

    var DIAS = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];

    var HORARIOS_MANANA = {
        PRIMERO: {
            A: {
                LUNES: 'PSI, AP, MUS',
                MARTES: 'LIT, BIO, EF',
                'MIÉRCOLES': 'SOC, SOC, MAT',
                JUEVES: 'REL, MAT, LIT',
                VIERNES: 'BIO, T.G, LIT',
                'SÁBADO': ''
            },
            B: {
                LUNES: 'MUS, LIT, AP',
                MARTES: 'BIO, EF, MAT',
                'MIÉRCOLES': 'REL, SOC, MAT',
                JUEVES: 'LIT, PSI, MAT',
                VIERNES: 'LIT, T.G, BIO',
                'SÁBADO': 'ING, T.G, T.G'
            }
        },
        SEGUNDO: {
            A: {
                LUNES: 'SOC, SOC, MAT',
                MARTES: 'ING, LIT, EF',
                'MIÉRCOLES': 'REL, BIO, FIL',
                JUEVES: 'LIT, MAT, PSI',
                VIERNES: 'LIT, MUS, AP',
                'SÁBADO': ''
            },
            B: {
                LUNES: 'ING, LIT, BIO',
                MARTES: 'MAT, SOC, SOC',
                'MIÉRCOLES': 'EF, MAT, SOC',
                JUEVES: 'T.G, LIT, MAT',
                VIERNES: 'AP, REL, MUS',
                'SÁBADO': ''
            }
        },
        TERCERO: {
            A: {
                LUNES: 'ING, LIT, FIL',
                MARTES: 'MAT, SOC, SOC',
                'MIÉRCOLES': 'BIO, TE, TE',
                JUEVES: 'SOC, LIT, QUI',
                VIERNES: 'LIT, FIS, BIO',
                'SÁBADO': ''
            },
            B: {
                LUNES: 'FIL, ING, LIT',
                MARTES: 'LIT, MAT, MAT',
                'MIÉRCOLES': 'SOC, TE, TE',
                JUEVES: 'LIT, MAT, FIL',
                VIERNES: 'FIS, SOC, MUS',
                'SÁBADO': ''
            }
        },
        CUARTO: {
            A: {
                LUNES: 'EF, AP, BIO',
                MARTES: 'MAT, MAT, SOC',
                'MIÉRCOLES': 'QUI, BIO, FIS',
                JUEVES: 'MAT, LIT, REL',
                VIERNES: 'MUS, SOC, TE',
                'SÁBADO': ''
            },
            B: {
                LUNES: 'MAT, MAT, SOC',
                MARTES: 'TE, TE, TE',
                'MIÉRCOLES': 'SOC, QUI, FIL',
                JUEVES: 'LIT, MAT, BIO',
                VIERNES: 'TE, TE, TE',
                'SÁBADO': ''
            }
        },
        QUINTO: {
            A: {
                LUNES: 'MAT, MAT, LIT',
                MARTES: 'MUS, REL, SOC',
                'MIÉRCOLES': 'BIO, FIS, MAT',
                JUEVES: 'QUI, EF, TE',
                VIERNES: 'SOC, SOC, ING',
                'SÁBADO': ''
            },
            B: {
                LUNES: 'MAT, MAT, LIT',
                MARTES: 'MUS, BIO, SOC',
                'MIÉRCOLES': 'FIS, BIO, SOC',
                JUEVES: 'TE, TE, MAT',
                VIERNES: 'SOC, SOC, ING',
                'SÁBADO': ''
            }
        },
        SEXTO: {
            A: {
                LUNES: 'LIT, MAT, MAT',
                MARTES: 'MUS, MAT, BIO',
                'MIÉRCOLES': 'FIS, TE, TE',
                JUEVES: 'BIO, SOC, FIL',
                VIERNES: 'EF, QUI, SOC',
                'SÁBADO': ''
            },
            B: {
                LUNES: 'BIO, FIL, EF',
                MARTES: 'FIS, MAT, LIT',
                'MIÉRCOLES': 'TE, TE, TE',
                JUEVES: 'LIT, MAT, MAT',
                VIERNES: 'SOC, SOC, ING',
                'SÁBADO': ''
            }
        }
    };

    var TURNOS = ['MAÑANA', 'TARDE'];
    var CLAVE_HORARIOS = 'horarios_san_ignacio';
    var CLAVE_SESION = 'sesion_san_ignacio';

    var HORARIOS = construirHorarios();
    var editando = null;

    function crearSeccionVacia() {
        var seccion = {};

        DIAS.forEach(function (dia) {
            seccion[dia] = '';
        });

        return seccion;
    }

    function construirHorarios() {
        var resultado = {};

        Object.keys(HORARIOS_MANANA).forEach(function (curso) {
            var manana = {};
            var tarde = {};

            Object.keys(HORARIOS_MANANA[curso]).forEach(function (seccion) {
                manana[seccion] = HORARIOS_MANANA[curso][seccion];
                tarde[seccion] = crearSeccionVacia();
            });

            resultado[curso] = {
                'MAÑANA': manana,
                'TARDE': tarde
            };
        });

        return resultado;
    }

    function esAdmin() {
        try {
            var sesion = JSON.parse(localStorage.getItem(CLAVE_SESION) || 'null');
            return Boolean(sesion && sesion.rol === 'admin');
        } catch (error) {
            return false;
        }
    }

    function leerGuardado() {
        var datos;

        try {
            datos = JSON.parse(localStorage.getItem(CLAVE_HORARIOS) || 'null');
        } catch (error) {
            return;
        }

        if (!datos || typeof datos !== 'object') {
            return;
        }

        Object.keys(HORARIOS).forEach(function (curso) {
            if (!datos[curso]) {
                return;
            }

            TURNOS.forEach(function (turno) {
                if (!datos[curso][turno]) {
                    return;
                }

                Object.keys(HORARIOS[curso][turno]).forEach(function (seccion) {
                    var guardada = datos[curso][turno][seccion];

                    if (!guardada) {
                        return;
                    }

                    DIAS.forEach(function (dia) {
                        if (typeof guardada[dia] === 'string') {
                            HORARIOS[curso][turno][seccion][dia] = guardada[dia];
                        }
                    });
                });
            });
        });
    }

    function guardarHorarios() {
        try {
            localStorage.setItem(CLAVE_HORARIOS, JSON.stringify(HORARIOS));
        } catch (error) {
            return false;
        }

        return true;
    }

    function crearCelda(texto) {
        var celda = document.createElement('div');
        celda.className = 'materias-celda';

        if (!texto) {
            celda.textContent = '—';
            return celda;
        }

        texto.split(',').forEach(function (codigoBase) {
            var codigo = codigoBase.trim();
            if (!codigo) {
                return;
            }

            var chip = document.createElement('a');
            chip.className = 'materia-chip';
            chip.textContent = codigo;
            chip.title = (ABREV[codigo] || codigo) + ' · Ver docentes';
            chip.href = 'conocimiento.html?tab=plantel&materia=' + encodeURIComponent(codigo);
            celda.appendChild(chip);
        });

        return celda;
    }

    function crearTablaCurso(secciones) {
        var tabla = document.createElement('table');

        var thead = document.createElement('thead');
        var fila = document.createElement('tr');

        var primera = document.createElement('th');
        primera.textContent = 'Sección';
        fila.appendChild(primera);

        DIAS.forEach(function (dia) {
            var th = document.createElement('th');
            th.textContent = dia;
            fila.appendChild(th);
        });

        thead.appendChild(fila);
        tabla.appendChild(thead);

        var tbody = document.createElement('tbody');

        Object.keys(secciones).forEach(function (seccion) {
            var tr = document.createElement('tr');

            var th = document.createElement('th');
            th.textContent = seccion;
            tr.appendChild(th);

            DIAS.forEach(function (dia) {
                var td = document.createElement('td');
                td.appendChild(crearCelda(secciones[seccion][dia] || ''));
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });

        tabla.appendChild(tbody);

        return tabla;
    }

    function crearCabeceraTurno(curso, turno) {
        var cabecera = document.createElement('div');
        cabecera.className = 'turno-cabecera';

        var titulo = document.createElement('span');
        titulo.className = 'turno-titulo ' +
            (turno === 'MAÑANA' ? 'turno-manana' : 'turno-tarde');

        var icono = document.createElement('span');
        icono.className = 'turno-icono';
        titulo.appendChild(icono);

        titulo.appendChild(document.createTextNode('TURNO ' + turno));
        cabecera.appendChild(titulo);

        if (esAdmin()) {
            var gestionar = document.createElement('button');
            gestionar.type = 'button';
            gestionar.className = 'turno-gestionar';
            gestionar.textContent = 'Gestionar';
            gestionar.addEventListener('click', function () {
                abrirEditor(curso, turno);
            });
            cabecera.appendChild(gestionar);
        }

        return cabecera;
    }

    function renderHorarios(contenedor) {
        contenedor.innerHTML = '';

        Object.keys(HORARIOS).forEach(function (curso) {
            var bloque = document.createElement('div');
            bloque.className = 'horario-curso';

            var titulo = document.createElement('h3');
            titulo.textContent = curso;
            bloque.appendChild(titulo);

            TURNOS.forEach(function (turno) {
                var bloqueTurno = document.createElement('div');
                bloqueTurno.className = 'horario-turno';

                bloqueTurno.appendChild(crearCabeceraTurno(curso, turno));

                var wrap = document.createElement('div');
                wrap.className = 'tabla-contenedor';
                wrap.appendChild(crearTablaCurso(HORARIOS[curso][turno]));
                bloqueTurno.appendChild(wrap);

                bloque.appendChild(bloqueTurno);
            });

            contenedor.appendChild(bloque);
        });
    }

    function crearSelect(seccion, dia, indice, valor) {
        var select = document.createElement('select');
        select.setAttribute('data-seccion', seccion);
        select.setAttribute('data-dia', dia);
        select.setAttribute('data-indice', String(indice));

        var vacio = document.createElement('option');
        vacio.value = '';
        vacio.textContent = '—';
        select.appendChild(vacio);

        Object.keys(ABREV).forEach(function (codigo) {
            var opcion = document.createElement('option');
            opcion.value = codigo;
            opcion.textContent = codigo;
            opcion.title = ABREV[codigo];
            select.appendChild(opcion);
        });

        select.value = valor || '';

        return select;
    }

    function crearEditorSeccion(curso, turno, seccion) {
        var bloque = document.createElement('div');
        bloque.className = 'editor-seccion';

        var titulo = document.createElement('h4');
        titulo.textContent = 'Sección ' + seccion;
        bloque.appendChild(titulo);

        var scroll = document.createElement('div');
        scroll.className = 'editor-scroll';

        var tabla = document.createElement('div');
        tabla.className = 'editor-tabla';

        ['Día', '1', '2', '3'].forEach(function (texto) {
            var celda = document.createElement('span');
            celda.className = 'editor-celda-encabezado';
            celda.textContent = texto;
            tabla.appendChild(celda);
        });

        DIAS.forEach(function (dia) {
            var etiqueta = document.createElement('span');
            etiqueta.className = 'editor-dia';
            etiqueta.textContent = dia;
            tabla.appendChild(etiqueta);

            var valores = (HORARIOS[curso][turno][seccion][dia] || '')
                .split(',')
                .map(function (valor) {
                    return valor.trim();
                });

            for (var i = 0; i < 3; i += 1) {
                tabla.appendChild(crearSelect(seccion, dia, i, valores[i] || ''));
            }
        });

        scroll.appendChild(tabla);
        bloque.appendChild(scroll);

        return bloque;
    }

    function abrirEditor(curso, turno) {
        if (!esAdmin()) {
            return;
        }

        var modal = document.getElementById('modal-horario');
        var cuerpo = document.getElementById('modal-horario-cuerpo');
        var titulo = document.getElementById('modal-horario-titulo');

        if (!modal || !cuerpo || !titulo) {
            return;
        }

        editando = { curso: curso, turno: turno };
        titulo.textContent = curso + ' · Turno ' + turno.toLowerCase();
        cuerpo.innerHTML = '';

        Object.keys(HORARIOS[curso][turno]).forEach(function (seccion) {
            cuerpo.appendChild(crearEditorSeccion(curso, turno, seccion));
        });

        modal.hidden = false;
    }

    function cerrarEditor() {
        var modal = document.getElementById('modal-horario');

        if (modal) {
            modal.hidden = true;
        }

        editando = null;
    }

    function guardarEditor() {
        var cuerpo = document.getElementById('modal-horario-cuerpo');

        if (!cuerpo || !editando) {
            return;
        }

        var nuevo = {};

        Object.keys(HORARIOS[editando.curso][editando.turno]).forEach(function (seccion) {
            nuevo[seccion] = {};
            DIAS.forEach(function (dia) {
                nuevo[seccion][dia] = '';
            });
        });

        Array.prototype.forEach.call(cuerpo.querySelectorAll('select'), function (select) {
            var seccion = select.getAttribute('data-seccion');
            var dia = select.getAttribute('data-dia');
            var indice = Number(select.getAttribute('data-indice'));
            var valor = select.value;

            if (!seccion || !dia || !nuevo[seccion] || !valor) {
                return;
            }

            var actuales = nuevo[seccion][dia]
                ? nuevo[seccion][dia].split(', ')
                : [];

            while (actuales.length < indice) {
                actuales.push('');
            }

            actuales[indice] = valor;
            nuevo[seccion][dia] = actuales.join(', ');
        });

        Object.keys(nuevo).forEach(function (seccion) {
            DIAS.forEach(function (dia) {
                nuevo[seccion][dia] = nuevo[seccion][dia]
                    .split(',')
                    .map(function (valor) {
                        return valor.trim();
                    })
                    .filter(function (valor) {
                        return valor !== '';
                    })
                    .join(', ');
            });
        });

        HORARIOS[editando.curso][editando.turno] = nuevo;

        if (!guardarHorarios()) {
            alert('No se pudo guardar el horario. El almacenamiento del navegador está lleno o bloqueado.');
            return;
        }

        cerrarEditor();

        var contenedor = document.getElementById('horarios');
        if (contenedor) {
            renderHorarios(contenedor);
        }
    }

    function renderLeyenda(contenedor) {
        Object.keys(ABREV).forEach(function (codigo) {
            var chip = document.createElement('span');
            chip.className = 'materia-chip';
            chip.textContent = codigo + ': ' + ABREV[codigo];
            contenedor.appendChild(chip);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        leerGuardado();

        var horarios = document.getElementById('horarios');
        if (horarios) {
            renderHorarios(horarios);
        }

        var leyenda = document.getElementById('leyenda-materias');
        if (leyenda) {
            renderLeyenda(leyenda);
        }

        var cerrar = document.getElementById('modal-horario-cerrar');
        var cancelar = document.getElementById('modal-horario-cancelar');
        var guardar = document.getElementById('modal-horario-guardar');
        var modal = document.getElementById('modal-horario');

        if (cerrar) {
            cerrar.addEventListener('click', cerrarEditor);
        }

        if (cancelar) {
            cancelar.addEventListener('click', cerrarEditor);
        }

        if (guardar) {
            guardar.addEventListener('click', guardarEditor);
        }

        if (modal) {
            modal.addEventListener('click', function (evento) {
                if (evento.target === modal) {
                    cerrarEditor();
                }
            });
        }

        document.addEventListener('keydown', function (evento) {
            if (evento.key === 'Escape') {
                cerrarEditor();
            }
        });
    });
})();
