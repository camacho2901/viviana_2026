(function () {
    'use strict';

    var CLAVE = 'sesion_san_ignacio';

    function obtenerSesion() {
        try {
            return JSON.parse(localStorage.getItem(CLAVE) || 'null');
        } catch (error) {
            return null;
        }
    }

    function cerrarSesion() {
        localStorage.removeItem(CLAVE);
        window.location.reload();
    }

    document.addEventListener('DOMContentLoaded', function () {
        var sesion = obtenerSesion();

        var contenedor = document.querySelector('.acciones-superior') ||
            document.querySelector('.barra-superior');

        if (!sesion || !contenedor) {
            return;
        }

        var acceso = contenedor.querySelector('.boton-acceso');
        if (acceso) {
            acceso.hidden = true;
        }

        var chip = document.createElement('span');
        chip.className = 'usuario-activo';
        chip.textContent = sesion.ci;
        contenedor.appendChild(chip);

        var salir = document.createElement('button');
        salir.type = 'button';
        salir.className = 'boton-salir';
        salir.textContent = 'Salir';
        salir.addEventListener('click', cerrarSesion);
        contenedor.appendChild(salir);
    });
})();