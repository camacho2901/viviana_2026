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

    var CARPETA_COMPENDIO = 'Compendio de Textos por Areas/';

    var COMPENDIO = [
        { titulo: 'Área Artes Plásticas', archivo: 'Área Artes Plásticas.pdf' },
        { titulo: 'Área Biología y Geografía', archivo: 'Área Biología y Geografía.pdf' },
        { titulo: 'Área Ciencias Sociales', archivo: 'Área Ciencias Sociales.pdf' },
        { titulo: 'Área Cosmovisiones, Filosofía y Sicología', archivo: 'Área Cosmovisiones, Filosofía y Sicología.pdf' },
        { titulo: 'Área Educación Física y Deportes', archivo: 'Área Educación Física y Deportes.pdf' },
        { titulo: 'Área Física', archivo: 'Área FÍsica.pdf' },
        { titulo: 'Área Lengua Castellana', archivo: 'Área Lengua Castellana.pdf' },
        { titulo: 'Área Lengua Extranjera', archivo: 'Área Lengua Extranjera.pdf' },
        { titulo: 'Área Lengua Originaria', archivo: 'Área Lengua Originaria.pdf' },
        { titulo: 'Área Matemática', archivo: 'Área matemática.pdf' },
        { titulo: 'Área Música', archivo: 'Área Música.pdf' },
        { titulo: 'Área Química', archivo: 'Área Química.pdf' },
        { titulo: 'Área Técnica Tecnológica General', archivo: 'Área Técnica Tecnológica General.pdf' },
        { titulo: 'Área Valores, Espiritualidad y Religiones', archivo: 'Área Valores, Espiritualidad y Religiones.pdf' }
    ].map(function (item) {
        return {
            titulo: item.titulo,
            archivo: encodeURI(CARPETA_COMPENDIO + item.archivo)
        };
    });

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

        var paneles = {
            estudiantes: 'panel-estudiantes',
            docentes: 'panel-docentes',
            compendio: 'panel-compendio'
        };

        Object.keys(paneles).forEach(function (clave) {
            var panel = document.getElementById(paneles[clave]);

            if (panel) {
                panel.hidden = clave !== nombre;
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderLista('lista-estudiantes', ESTUDIANTES);
        renderLista('lista-docentes', DOCENTES);
        renderLista('lista-compendio', COMPENDIO);

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