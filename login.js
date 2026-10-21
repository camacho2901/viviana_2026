(function () {
    'use strict';

    var CLAVE_SESION = 'sesion_san_ignacio';
    var DURACION_SESION = 8 * 60 * 60 * 1000;

    function mostrarError(mensaje) {
        var error = document.getElementById('login-error');

        if (!error) {
            alert(mensaje);
            return;
        }

        error.textContent = mensaje;
        error.hidden = false;
    }

    function ocultarError() {
        var error = document.getElementById('login-error');

        if (!error) {
            return;
        }

        error.textContent = '';
        error.hidden = true;
    }

    function cambiarBoton(boton, texto, deshabilitado) {
        if (!boton) {
            return;
        }

        boton.textContent = texto;
        boton.disabled = deshabilitado;
    }

    async function iniciarSesion(evento) {
        evento.preventDefault();

        var formulario = evento.target;
        var usuario = formulario.ci.value.trim();
        var password = formulario.password.value;
        var boton = formulario.querySelector('button[type="submit"]');

        ocultarError();

        if (!usuario || !password) {
            mostrarError('Completa tu usuario y contraseña.');
            return;
        }

        if (!window.crypto || !window.crypto.subtle) {
            mostrarError('Este navegador no permite un inicio de sesión seguro. Usa HTTPS o actualiza el navegador.');
            return;
        }

        if (typeof window.autenticar !== 'function') {
            mostrarError('No se pudo cargar el sistema de acceso. Recarga la página.');
            return;
        }

        cambiarBoton(boton, 'Verificando...', true);

        try {
            var cuenta = await window.autenticar(usuario, password);

            if (!cuenta) {
                mostrarError('Usuario o contraseña incorrectos.');
                return;
            }

            try {
                localStorage.setItem(CLAVE_SESION, JSON.stringify({
                    ci: cuenta.usuario,
                    rol: cuenta.rol,
                    inicio: new Date().toISOString(),
                    expira: Date.now() + DURACION_SESION
                }));
            } catch (error) {
                mostrarError('No se pudo guardar la sesión. Revisa la configuración del navegador.');
                return;
            }

            window.location.href = 'index.html?v=20261021';
        } catch (error) {
            mostrarError('No se pudo iniciar sesión. Intenta nuevamente.');
        } finally {
            cambiarBoton(boton, 'Iniciar sesión', false);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        var formulario = document.querySelector('.login form');

        if (formulario) {
            formulario.addEventListener('submit', iniciarSesion);
        }
    });
})();
