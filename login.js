(function () {
    'use strict';

    var CLAVE_SESION = 'sesion_san_ignacio';

    function mostrarError(mensaje) {
        var error = document.getElementById('login-error');

        if (!error) {
            alert(mensaje);
            return;
        }

        error.textContent = mensaje;
        error.hidden = false;
    }

    function iniciarSesion(evento) {
        evento.preventDefault();

        var formulario = evento.target;
        var usuario = formulario.ci.value.trim();
        var password = formulario.password.value;

        if (!usuario || !password) {
            mostrarError('Completa tu usuario y contraseña.');
            return;
        }

        var cuenta = window.autenticar ? window.autenticar(usuario, password) : null;

        if (!cuenta) {
            mostrarError('Usuario o contraseña incorrectos.');
            return;
        }

        localStorage.setItem(CLAVE_SESION, JSON.stringify({
            ci: cuenta.usuario,
            rol: cuenta.rol,
            inicio: new Date().toISOString()
        }));

        window.location.href = 'comunicados.html';
    }

    document.addEventListener('DOMContentLoaded', function () {
        var formulario = document.querySelector('.login form');
        if (formulario) {
            formulario.addEventListener('submit', iniciarSesion);
        }
    });
})();