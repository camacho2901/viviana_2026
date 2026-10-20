(function () {
    'use strict';

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
    });
})();
