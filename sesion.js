(function () {
    'use strict';

    var CLAVE = 'sesion_san_ignacio';
    var PAGINA_LOGIN = /(^|\/)login\.html$/i.test(window.location.pathname);

    function leerSesion() {
        try {
            var sesion = JSON.parse(localStorage.getItem(CLAVE) || 'null');

            if (!sesion || !sesion.ci || !sesion.rol || !sesion.expira || Date.now() >= sesion.expira) {
                localStorage.removeItem(CLAVE);
                return null;
            }

            return sesion;
        } catch (error) {
            try {
                localStorage.removeItem(CLAVE);
            } catch (errorAlmacenamiento) {
                // Si el navegador bloquea el almacenamiento no hay sesión posible.
            }

            return null;
        }
    }

    var sesion = leerSesion();

    if (!PAGINA_LOGIN && !sesion) {
        window.location.replace('login.html');
        return;
    }

    if (PAGINA_LOGIN && sesion) {
        window.location.replace('index.html');
        return;
    }

    function cerrarSesion() {
        try {
            localStorage.removeItem(CLAVE);
        } catch (error) {
            // Si el navegador bloquea el almacenamiento, igual se redirige al login.
        }

        window.location.replace('login.html');
    }

    document.addEventListener('DOMContentLoaded', function () {
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
        chip.textContent = sesion.ci + (sesion.rol === 'admin' ? ' · Admin' : '');
        contenedor.appendChild(chip);

        var salir = document.createElement('button');
        salir.type = 'button';
        salir.className = 'boton-salir';
        salir.textContent = 'Cerrar sesión';
        salir.addEventListener('click', cerrarSesion);
        contenedor.appendChild(salir);
    });
})();
