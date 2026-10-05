(function () {
    'use strict';

    var CLAVE_DATOS = 'comunicados_san_ignacio';
    var CLAVE_SESION = 'sesion_san_ignacio';

    var TIPOS = {
        comunicado: {
            contenedor: 'lista-comunicado',
            vacio: 'No hay comunicados publicados.'
        },
        aviso: {
            contenedor: 'lista-aviso',
            vacio: 'No hay avisos publicados.'
        },
        fecha: {
            contenedor: 'lista-fecha',
            vacio: 'No hay fechas importantes registradas.'
        }
    };

    var DEMO = [
        {
            id: 'demo-com-1',
            tipo: 'comunicado',
            titulo: 'Inicio de clases 2026',
            descripcion: 'Damos la bienvenida a todos los estudiantes al nuevo año escolar. Las clases inician el lunes 2 de febrero.',
            fecha: '',
            autor: 'Admin2026',
            creado: '2026-01-20T10:00:00.000Z'
        },
        {
            id: 'demo-avi-1',
            tipo: 'aviso',
            titulo: 'Reunión de padres de familia',
            descripcion: 'Se convoca a los padres de familia a la reunión informativa el viernes 6 de febrero a las 18:00 en el salón de actos.',
            fecha: '',
            autor: 'Admin2026',
            creado: '2026-01-22T15:30:00.000Z'
        },
        {
            id: 'demo-fecha-1',
            tipo: 'fecha',
            titulo: 'Aniversario de la institución',
            descripcion: 'Conmemoración del aniversario de fundación de la Unidad Educativa (3 de febrero de 1956).',
            fecha: '2026-02-03',
            autor: 'Admin2026',
            creado: '2026-01-25T09:00:00.000Z'
        }
    ];

    var idEnEdicion = null;

    function inicializar() {
        if (localStorage.getItem(CLAVE_DATOS) === null) {
            guardarDatos(DEMO);
        }
    }

    function leerDatos() {
        try {
            var crudo = localStorage.getItem(CLAVE_DATOS);
            var datos = crudo ? JSON.parse(crudo) : [];
            return Array.isArray(datos) ? datos : [];
        } catch (error) {
            return [];
        }
    }

    function guardarDatos(datos) {
        localStorage.setItem(CLAVE_DATOS, JSON.stringify(datos));
    }

    function obtenerSesion() {
        try {
            return JSON.parse(localStorage.getItem(CLAVE_SESION) || 'null');
        } catch (error) {
            return null;
        }
    }

    function esAdmin() {
        var sesion = obtenerSesion();
        return !!(sesion && sesion.rol === 'admin');
    }

    function crearId() {
        return 'c-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    }

    function formatearFecha(iso) {
        if (!iso) {
            return '';
        }

        var partes = iso.split('-');
        if (partes.length !== 3) {
            return iso;
        }

        return partes[2] + '/' + partes[1] + '/' + partes[0];
    }

    function crearItem(item, puedeGestionar) {
        var articulo = document.createElement('div');
        articulo.className = 'item';

        var titulo = document.createElement('h4');
        titulo.textContent = item.titulo;
        articulo.appendChild(titulo);

        var descripcion = document.createElement('p');
        descripcion.textContent = item.descripcion;
        articulo.appendChild(descripcion);

        if (item.tipo === 'fecha' && item.fecha) {
            var fecha = document.createElement('span');
            fecha.className = 'item-fecha';
            fecha.textContent = 'Fecha: ' + formatearFecha(item.fecha);
            articulo.appendChild(fecha);
        }

        var meta = document.createElement('div');
        meta.className = 'item-meta';
        meta.textContent = 'Publicado por ' + item.autor;
        articulo.appendChild(meta);

        if (puedeGestionar) {
            var acciones = document.createElement('div');
            acciones.className = 'item-acciones';

            var editar = document.createElement('button');
            editar.type = 'button';
            editar.className = 'item-editar';
            editar.textContent = 'Editar';
            editar.setAttribute('data-id', item.id);
            acciones.appendChild(editar);

            var eliminar = document.createElement('button');
            eliminar.type = 'button';
            eliminar.className = 'item-eliminar';
            eliminar.textContent = 'Eliminar';
            eliminar.setAttribute('data-id', item.id);
            acciones.appendChild(eliminar);

            articulo.appendChild(acciones);
        }

        return articulo;
    }

    function render() {
        var datos = leerDatos();
        var puedeGestionar = esAdmin();

        Object.keys(TIPOS).forEach(function (tipo) {
            var config = TIPOS[tipo];
            var contenedor = document.getElementById(config.contenedor);

            if (!contenedor) {
                return;
            }

            contenedor.innerHTML = '';

            var items = datos.filter(function (dato) {
                return dato.tipo === tipo;
            });

            if (items.length === 0) {
                var vacio = document.createElement('p');
                vacio.className = 'item-vacio';
                vacio.textContent = config.vacio;
                contenedor.appendChild(vacio);
                return;
            }

            items.forEach(function (item) {
                contenedor.appendChild(crearItem(item, puedeGestionar));
            });
        });
    }

    function actualizarPaneles() {
        var sesion = obtenerSesion();
        var admin = esAdmin();
        var panel = document.getElementById('panel-publicar');
        var aviso = document.getElementById('aviso-sesion');

        if (panel) {
            panel.hidden = !admin;
        }

        if (aviso) {
            if (admin) {
                aviso.hidden = true;
            } else {
                aviso.hidden = false;

                if (sesion) {
                    aviso.textContent = 'Tu cuenta es de solo lectura. No puedes publicar.';
                }
            }
        }
    }

    function alternarCampoFecha() {
        var select = document.getElementById('tipo');
        var campo = document.getElementById('campo-fecha');

        if (!select || !campo) {
            return;
        }

        campo.hidden = select.value !== 'fecha';
    }

    function entrarEdicion(id) {
        var item = leerDatos().filter(function (dato) {
            return dato.id === id;
        })[0];

        var formulario = document.getElementById('form-publicar');

        if (!item || !formulario) {
            return;
        }

        idEnEdicion = id;
        formulario.tipo.value = item.tipo;
        formulario.titulo.value = item.titulo;
        formulario.descripcion.value = item.descripcion;
        formulario.fecha.value = item.fecha || '';

        alternarCampoFecha();

        var boton = document.getElementById('boton-publicar');
        if (boton) {
            boton.textContent = 'Guardar cambios';
        }

        var cancelar = document.getElementById('cancelar-edicion');
        if (cancelar) {
            cancelar.hidden = false;
        }

        var panel = document.getElementById('panel-publicar');
        if (panel) {
            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function salirEdicion() {
        idEnEdicion = null;

        var formulario = document.getElementById('form-publicar');
        if (formulario) {
            formulario.reset();
        }

        alternarCampoFecha();

        var boton = document.getElementById('boton-publicar');
        if (boton) {
            boton.textContent = 'Publicar';
        }

        var cancelar = document.getElementById('cancelar-edicion');
        if (cancelar) {
            cancelar.hidden = true;
        }
    }

    function manejarEnvio(evento) {
        evento.preventDefault();

        var formulario = evento.target;
        var tipo = formulario.tipo.value;
        var titulo = formulario.titulo.value.trim();
        var descripcion = formulario.descripcion.value.trim();
        var fecha = formulario.fecha.value;

        if (!titulo || !descripcion) {
            alert('Completa el título y la descripción.');
            return;
        }

        if (tipo === 'fecha' && !fecha) {
            alert('Indica la fecha de la actividad.');
            return;
        }

        var sesion = obtenerSesion();

        if (!esAdmin()) {
            alert('Solo el administrador puede publicar.');
            return;
        }

        var datos = leerDatos();

        if (idEnEdicion) {
            datos = datos.map(function (dato) {
                if (dato.id === idEnEdicion) {
                    dato.tipo = tipo;
                    dato.titulo = titulo;
                    dato.descripcion = descripcion;
                    dato.fecha = tipo === 'fecha' ? fecha : '';
                    dato.actualizado = new Date().toISOString();
                }
                return dato;
            });
        } else {
            datos.push({
                id: crearId(),
                tipo: tipo,
                titulo: titulo,
                descripcion: descripcion,
                fecha: tipo === 'fecha' ? fecha : '',
                autor: sesion.ci,
                creado: new Date().toISOString()
            });
        }

        guardarDatos(datos);
        salirEdicion();
        render();
    }

    function manejarGestion(evento) {
        var editar = evento.target.closest('.item-editar');
        if (editar) {
            entrarEdicion(editar.getAttribute('data-id'));
            return;
        }

        var eliminar = evento.target.closest('.item-eliminar');
        if (!eliminar || !esAdmin()) {
            return;
        }

        if (!confirm('¿Eliminar esta publicación?')) {
            return;
        }

        var id = eliminar.getAttribute('data-id');
        var datos = leerDatos().filter(function (dato) {
            return dato.id !== id;
        });
        guardarDatos(datos);

        if (idEnEdicion === id) {
            salirEdicion();
        }

        render();
    }

    function cerrarSesion() {
        localStorage.removeItem(CLAVE_SESION);
        window.location.reload();
    }

    document.addEventListener('DOMContentLoaded', function () {
        var formulario = document.getElementById('form-publicar');
        if (formulario) {
            formulario.addEventListener('submit', manejarEnvio);
        }

        var select = document.getElementById('tipo');
        if (select) {
            select.addEventListener('change', alternarCampoFecha);
        }

        var tarjetas = document.querySelector('.tarjetas');
        if (tarjetas) {
            tarjetas.addEventListener('click', manejarGestion);
        }

        var botonCerrar = document.getElementById('cerrar-sesion');
        if (botonCerrar) {
            botonCerrar.addEventListener('click', cerrarSesion);
        }

        var botonCancelar = document.getElementById('cancelar-edicion');
        if (botonCancelar) {
            botonCancelar.addEventListener('click', salirEdicion);
        }

        actualizarPaneles();
        alternarCampoFecha();
        inicializar();
        render();
    });
})();