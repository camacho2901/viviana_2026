(function () {
    'use strict';

    var CLAVE = 'sesion_san_ignacio';
    var DURACION_SESION = 8 * 60 * 60 * 1000;
    var VERSION = '20261021m';
    var PAGINA_LOGIN = /(^|\/)login\.html$/i.test(window.location.pathname);

    function leerSesion() {
        try {
            var sesion = JSON.parse(localStorage.getItem(CLAVE) || 'null');

            if (!sesion || !sesion.ci || !sesion.rol) {
                localStorage.removeItem(CLAVE);
                return null;
            }

            // Migra sesiones creadas antes de agregar la expiración.
            if (!sesion.expira) {
                sesion.inicio = sesion.inicio || new Date().toISOString();
                sesion.expira = Date.now() + DURACION_SESION;

                try {
                    localStorage.setItem(CLAVE, JSON.stringify(sesion));
                } catch (errorGuardado) {
                    // Si no se puede guardar, la sesión actual sigue siendo válida.
                }

                return sesion;
            }

            if (!isFinite(Number(sesion.expira)) || Date.now() >= Number(sesion.expira)) {
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
        window.location.replace('login.html?v=' + VERSION);
        return;
    }

    if (PAGINA_LOGIN && sesion) {
        window.location.replace('index.html?v=' + VERSION);
        return;
    }

    function cerrarSesion() {
        try {
            localStorage.removeItem(CLAVE);
        } catch (error) {
            // Si el navegador bloquea el almacenamiento, igual se redirige al login.
        }

        window.location.replace('login.html?v=' + VERSION);
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

        var menuLogin = document.querySelector('.menu-login');
        if (menuLogin) {
            menuLogin.hidden = true;
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
