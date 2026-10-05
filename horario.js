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

    var HORARIOS = {
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

    var DOCENTES = [
        { nombre: 'MILDRED', asignaciones: '6B, 4A, 5A, 4A, 6A, 5A, 6A, 5B, 4B, 4A' },
        { nombre: 'MARIA', asignaciones: '2B, 3B, 5B, 3A, 2A, 3A, 1B, 4B, 1B' },
        { nombre: 'SONIA', asignaciones: '3B, 6BQ, 1B, 5BQ, 3A, 5A, 3A, 4A, 1B, 6B, 4B, 4A, 5A, 2A' },
        { nombre: 'RAQUEL T.', asignaciones: '6AQ, 3BF, 5BQ, 4BQ, 3BQ, 4A, 3B, 6B, 4B, 4A' },
        { nombre: 'VICTOR', asignaciones: '3B, 6A, 4A, 5A, 3B, 4B, 6A, 4B, 5A' },
        { nombre: 'LIDIA', asignaciones: '2A, 4B, 5A, 4B/5A/5A, 2A, 3A, 4A/3A, 3A' }
    ];

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

            var chip = document.createElement('span');
            chip.className = 'materia-chip';
            chip.textContent = codigo;
            chip.title = ABREV[codigo] || codigo;
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

        ['A', 'B'].forEach(function (seccion) {
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

    function renderHorarios(contenedor) {
        Object.keys(HORARIOS).forEach(function (curso) {
            var bloque = document.createElement('div');
            bloque.className = 'horario-curso';

            var titulo = document.createElement('h3');
            titulo.textContent = curso;
            bloque.appendChild(titulo);

            var wrap = document.createElement('div');
            wrap.className = 'tabla-contenedor';
            wrap.appendChild(crearTablaCurso(HORARIOS[curso]));
            bloque.appendChild(wrap);

            contenedor.appendChild(bloque);
        });
    }

    function renderLeyenda(contenedor) {
        Object.keys(ABREV).forEach(function (codigo) {
            var chip = document.createElement('span');
            chip.className = 'materia-chip';
            chip.textContent = codigo + ': ' + ABREV[codigo];
            contenedor.appendChild(chip);
        });
    }

    function renderDocentes(contenedor) {
        var tabla = document.createElement('table');

        var thead = document.createElement('thead');
        var fila = document.createElement('tr');

        var thDocente = document.createElement('th');
        thDocente.textContent = 'Docente';
        fila.appendChild(thDocente);

        var thCursos = document.createElement('th');
        thCursos.textContent = 'Cursos y secciones asignados';
        fila.appendChild(thCursos);

        thead.appendChild(fila);
        tabla.appendChild(thead);

        var tbody = document.createElement('tbody');

        DOCENTES.forEach(function (docente) {
            var tr = document.createElement('tr');

            var th = document.createElement('th');
            th.textContent = docente.nombre;
            tr.appendChild(th);

            var td = document.createElement('td');
            td.textContent = docente.asignaciones;
            tr.appendChild(td);

            tbody.appendChild(tr);
        });

        tabla.appendChild(tbody);

        contenedor.appendChild(tabla);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var horarios = document.getElementById('horarios');
        if (horarios) {
            renderHorarios(horarios);
        }

        var leyenda = document.getElementById('leyenda-materias');
        if (leyenda) {
            renderLeyenda(leyenda);
        }

        var docentes = document.getElementById('asignacion-docentes');
        if (docentes) {
            renderDocentes(docentes);
        }
    });
})();