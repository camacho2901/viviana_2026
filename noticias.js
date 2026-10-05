(function () {
    'use strict';

    var CLAVE_DATOS = 'noticias_san_ignacio';
    var CLAVE_SESION = 'sesion_san_ignacio';
    var CONTENEDOR = 'lista-noticias';
    var VACIO = 'No hay noticias publicadas.';

    var idEnEdicion = null;

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
        return 'n-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
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
        var contenedor = document.getElementById(CONTENEDOR);
        if (!contenedor) {
            return;
        }

        var datos = leerDatos();
        var puedeGestionar = esAdmin();

        contenedor.innerHTML = '';

        if (datos.length === 0) {
            var vacio = document.createElement('p');
            vacio.className = 'item-vacio';
            vacio.textContent = VACIO;
            contenedor.appendChild(vacio);
            return;
        }

        datos.forEach(function (item) {
            contenedor.appendChild(crearItem(item, puedeGestionar));
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

    function entrarEdicion(id) {
        var item = leerDatos().filter(function (dato) {
            return dato.id === id;
        })[0];

        var formulario = document.getElementById('form-publicar');

        if (!item || !formulario) {
            return;
        }

        idEnEdicion = id;
        formulario.titulo.value = item.titulo;
        formulario.descripcion.value = item.descripcion;

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
        var titulo = formulario.titulo.value.trim();
        var descripcion = formulario.descripcion.value.trim();

        if (!titulo || !descripcion) {
            alert('Completa el título y la descripción.');
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
                    dato.titulo = titulo;
                    dato.descripcion = descripcion;
                    dato.actualizado = new Date().toISOString();
                }
                return dato;
            });
        } else {
            datos.push({
                id: crearId(),
                titulo: titulo,
                descripcion: descripcion,
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

        if (!confirm('¿Eliminar esta noticia?')) {
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

        var contenedor = document.getElementById(CONTENEDOR);
        if (contenedor) {
            contenedor.addEventListener('click', manejarGestion);
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
        render();
    });
})();