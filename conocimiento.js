(function () {
    'use strict';

    var ESTUDIANTES = [
        { titulo: 'Primero de Secundaria', archivo: '1.pdf' },
        { titulo: 'Segundo de Secundaria', archivo: '2.pdf' },
        { titulo: 'Tercero de Secundaria', archivo: '3.pdf' },
        { titulo: 'Cuarto de Secundaria', archivo: '4.pdf' },
        { titulo: 'Quinto de Secundaria', archivo: '5.pdf' },
        { titulo: 'Sexto de Secundaria', archivo: '6.pdf' }
    ];

    var DOCENTES = [
        { titulo: 'Documento para docentes', archivo: 'doc.pdf' }
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

    function crearTarjeta(item) {
        var tarjeta = document.createElement('div');
        tarjeta.className = 'pdf-card';

        var icono = document.createElement('div');
        icono.className = 'icono-tarjeta icono-pdf';
        tarjeta.appendChild(icono);

        var titulo = document.createElement('h3');
        titulo.textContent = item.titulo;
        tarjeta.appendChild(titulo);

        var archivo = document.createElement('p');
        archivo.textContent = item.archivo;
        tarjeta.appendChild(archivo);

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

    function renderLista(id, items) {
        var contenedor = document.getElementById(id);

        if (!contenedor) {
            return;
        }

        items.forEach(function (item) {
            contenedor.appendChild(crearTarjeta(item));
        });
    }

    function activarTab(nombre) {
        var tabs = document.querySelectorAll('.tab');

        Array.prototype.forEach.call(tabs, function (tab) {
            tab.classList.toggle('activo', tab.getAttribute('data-tab') === nombre);
        });

        var panelEstudiantes = document.getElementById('panel-estudiantes');
        var panelDocentes = document.getElementById('panel-docentes');

        if (panelEstudiantes) {
            panelEstudiantes.hidden = nombre !== 'estudiantes';
        }

        if (panelDocentes) {
            panelDocentes.hidden = nombre !== 'docentes';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderLista('lista-estudiantes', ESTUDIANTES);
        renderLista('lista-docentes', DOCENTES);

        var tabs = document.querySelectorAll('.tab');
        Array.prototype.forEach.call(tabs, function (tab) {
            tab.addEventListener('click', function () {
                activarTab(tab.getAttribute('data-tab'));
            });
        });

        var cerrar = document.getElementById('visor-cerrar');
        if (cerrar) {
            cerrar.addEventListener('click', cerrarVisor);
        }
    });
})();