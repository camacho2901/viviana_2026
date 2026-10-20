(function () {
    'use strict';

    var DIAS = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];

    var MATERIAS = [
        { codigo: 'MAT', nombre: 'Matemáticas' },
        { codigo: 'ING', nombre: 'Inglés' },
        { codigo: 'SOC', nombre: 'Sociales' },
        { codigo: 'BIO', nombre: 'Biología' },
        { codigo: 'LIT', nombre: 'Literatura' },
        { codigo: 'EF', nombre: 'Educación Física' },
        { codigo: 'REL', nombre: 'Religión' },
        { codigo: 'MUS', nombre: 'Música' },
        { codigo: 'TE', nombre: 'Taller/Educación Tecnológica' },
        { codigo: 'FIS', nombre: 'Física' },
        { codigo: 'QUI', nombre: 'Química' },
        { codigo: 'FIL', nombre: 'Filosofía' },
        { codigo: 'PSI', nombre: 'Psicología' },
        { codigo: 'AP', nombre: 'Arte Plástica' },
        { codigo: 'T.G', nombre: 'Taller General' }
    ];

    var NOMBRE_MATERIA = {};
    MATERIAS.forEach(function (materia) {
        NOMBRE_MATERIA[materia.codigo] = materia.nombre;
    });

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

    var CLAVE_MATERIAS = 'materias_san_ignacio';
    var CLAVE_SESION = 'sesion_san_ignacio';

    var materiaActiva = null;
    var docenteEditando = null;

    function leerAsignaciones() {
        try {
            var datos = JSON.parse(localStorage.getItem(CLAVE_MATERIAS) || '{}');

            if (!datos || typeof datos !== 'object' || Array.isArray(datos)) {
                return {};
            }

            return datos;
        } catch (error) {
            return {};
        }
    }

    function guardarAsignaciones(datos) {
        try {
            localStorage.setItem(CLAVE_MATERIAS, JSON.stringify(datos));
            return true;
        } catch (error) {
            return false;
        }
    }

    function esAdmin() {
        try {
            var sesion = JSON.parse(localStorage.getItem(CLAVE_SESION) || 'null');
            return Boolean(sesion && sesion.rol === 'admin');
        } catch (error) {
            return false;
        }
    }

    function materiasDe(nombre, asignaciones) {
        var lista = asignaciones[nombre];

        if (!Array.isArray(lista)) {
            return [];
        }

        return lista.filter(function (codigo) {
            return Boolean(NOMBRE_MATERIA[codigo]);
        });
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

    function crearTarjetaDocente(docente, asignaciones, hayCoincidencias) {
        var tarjeta = document.createElement('article');
        tarjeta.className = 'docente-card';

        var materias = materiasDe(docente.nombre, asignaciones);

        if (materiaActiva) {
            if (materias.indexOf(materiaActiva) !== -1) {
                tarjeta.className += ' destacado';
            } else if (hayCoincidencias) {
                tarjeta.className += ' atenuado';
            }
        }

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

        var bloqueMaterias = document.createElement('div');
        bloqueMaterias.className = 'docente-materias';

        var etiquetaMaterias = document.createElement('span');
        etiquetaMaterias.className = 'docente-materias-label';
        etiquetaMaterias.textContent = 'Materias';
        bloqueMaterias.appendChild(etiquetaMaterias);

        var listaMaterias = document.createElement('div');
        listaMaterias.className = 'docente-materias-lista';

        if (materias.length === 0) {
            var sinMaterias = document.createElement('span');
            sinMaterias.className = 'docente-materias-vacio';
            sinMaterias.textContent = 'Sin materias asignadas';
            listaMaterias.appendChild(sinMaterias);
        } else {
            materias.forEach(function (codigo) {
                var chip = document.createElement('span');
                chip.className = 'docente-materia';

                if (codigo === materiaActiva) {
                    chip.className += ' activa';
                }

                chip.textContent = NOMBRE_MATERIA[codigo];
                listaMaterias.appendChild(chip);
            });
        }

        bloqueMaterias.appendChild(listaMaterias);
        tarjeta.appendChild(bloqueMaterias);

        var dias = document.createElement('div');
        dias.className = 'docente-dias';

        DIAS.forEach(function (dia) {
            var texto = docente.dias[dia];

            if (!texto) {
                return;
            }

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

        tarjeta.appendChild(dias);

        if (esAdmin()) {
            var editar = document.createElement('button');
            editar.type = 'button';
            editar.className = 'docente-editar';
            editar.textContent = 'Asignar materias';
            editar.addEventListener('click', function () {
                abrirEditor(docente.nombre);
            });
            tarjeta.appendChild(editar);
        }

        return tarjeta;
    }

    function renderPlantel() {
        var contenedor = document.getElementById('plantel-docentes');
        var buscador = document.getElementById('buscador-docentes');
        var contador = document.getElementById('contador-docentes');

        if (!contenedor) {
            return;
        }

        var termino = buscador ? buscador.value.trim().toLowerCase() : '';
        var asignaciones = leerAsignaciones();

        var visibles = PLANTEL.filter(function (docente) {
            if (!termino) {
                return true;
            }

            var texto = docente.nombre + ' ' + DIAS.map(function (dia) {
                return docente.dias[dia];
            }).join(' ') + ' ' + materiasDe(docente.nombre, asignaciones).map(function (codigo) {
                return NOMBRE_MATERIA[codigo];
            }).join(' ');

            return texto.toLowerCase().indexOf(termino) !== -1;
        });

        var coincidencias = materiaActiva ? visibles.filter(function (docente) {
            return materiasDe(docente.nombre, asignaciones).indexOf(materiaActiva) !== -1;
        }).length : 0;

        contenedor.innerHTML = '';

        visibles.forEach(function (docente) {
            contenedor.appendChild(
                crearTarjetaDocente(docente, asignaciones, coincidencias > 0)
            );
        });

        if (contador) {
            contador.textContent = visibles.length + ' de ' + PLANTEL.length + ' docentes';
        }

        renderAviso(coincidencias);
    }

    function renderAviso(coincidencias) {
        var contenedor = document.getElementById('plantel-aviso');

        if (!contenedor) {
            return;
        }

        contenedor.innerHTML = '';

        if (!materiaActiva) {
            return;
        }

        var aviso = document.createElement('div');
        aviso.className = 'plantel-aviso';

        var texto = document.createElement('div');
        texto.className = 'plantel-aviso-texto';

        var titulo = document.createElement('strong');
        titulo.textContent = NOMBRE_MATERIA[materiaActiva];
        texto.appendChild(titulo);

        var detalle = document.createElement('span');

        if (coincidencias > 0) {
            detalle.textContent = coincidencias === 1
                ? '1 docente asignado'
                : coincidencias + ' docentes asignados';
        } else {
            detalle.textContent = esAdmin()
                ? 'Aún no hay docentes asignados. Usa «Asignar materias» en cada tarjeta.'
                : 'Aún no hay docentes asignados a esta materia.';
        }

        texto.appendChild(detalle);
        aviso.appendChild(texto);

        var limpiar = document.createElement('button');
        limpiar.type = 'button';
        limpiar.className = 'plantel-aviso-limpiar';
        limpiar.textContent = 'Ver todos';
        limpiar.addEventListener('click', function () {
            materiaActiva = null;
            actualizarUrl();
            renderPlantel();
        });
        aviso.appendChild(limpiar);

        contenedor.appendChild(aviso);
    }

    function actualizarUrl() {
        if (!window.history || !window.history.replaceState) {
            return;
        }

        var url = new URL(window.location.href);
        url.searchParams.set('tab', 'plantel');

        if (materiaActiva) {
            url.searchParams.set('materia', materiaActiva);
        } else {
            url.searchParams.delete('materia');
        }

        window.history.replaceState({}, '', url.toString());
    }

    function abrirEditor(nombre) {
        if (!esAdmin()) {
            return;
        }

        var modal = document.getElementById('modal-materias');
        var titulo = document.getElementById('modal-titulo');
        var lista = document.getElementById('modal-lista');

        if (!modal || !titulo || !lista) {
            return;
        }

        docenteEditando = nombre;
        titulo.textContent = 'Materias de Prof. ' + nombre;
        lista.innerHTML = '';

        var actuales = materiasDe(nombre, leerAsignaciones());

        MATERIAS.forEach(function (materia) {
            var opcion = document.createElement('label');
            opcion.className = 'materia-opcion';

            var check = document.createElement('input');
            check.type = 'checkbox';
            check.value = materia.codigo;
            check.checked = actuales.indexOf(materia.codigo) !== -1;

            var texto = document.createElement('span');
            texto.textContent = materia.nombre;

            opcion.appendChild(check);
            opcion.appendChild(texto);
            lista.appendChild(opcion);
        });

        modal.hidden = false;
    }

    function cerrarEditor() {
        var modal = document.getElementById('modal-materias');

        if (modal) {
            modal.hidden = true;
        }

        docenteEditando = null;
    }

    function guardarEditor() {
        var lista = document.getElementById('modal-lista');

        if (!lista || !docenteEditando) {
            return;
        }

        var seleccionadas = [];

        Array.prototype.forEach.call(
            lista.querySelectorAll('input[type="checkbox"]'),
            function (check) {
                if (check.checked) {
                    seleccionadas.push(check.value);
                }
            }
        );

        var asignaciones = leerAsignaciones();
        asignaciones[docenteEditando] = seleccionadas;

        if (!guardarAsignaciones(asignaciones)) {
            return;
        }

        cerrarEditor();
        renderPlantel();
    }

    document.addEventListener('DOMContentLoaded', function () {
        var contenedor = document.getElementById('plantel-docentes');

        if (!contenedor) {
            return;
        }

        var parametros = new URLSearchParams(window.location.search);
        var materia = parametros.get('materia');

        if (materia && NOMBRE_MATERIA[materia]) {
            materiaActiva = materia;
        }

        if (parametros.get('tab') === 'plantel' || materiaActiva) {
            var tab = document.querySelector('.tab[data-tab="plantel"]');

            if (tab) {
                tab.click();
            }
        }

        renderPlantel();

        var buscador = document.getElementById('buscador-docentes');
        if (buscador) {
            buscador.addEventListener('input', renderPlantel);
        }

        var cerrar = document.getElementById('modal-cerrar');
        var cancelar = document.getElementById('modal-cancelar');
        var guardar = document.getElementById('modal-guardar');
        var modal = document.getElementById('modal-materias');

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

        if (materiaActiva) {
            var destacado = contenedor.querySelector('.docente-card.destacado');

            if (destacado && destacado.scrollIntoView) {
                destacado.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
})();
