(function () {
    'use strict';

    var MATERIAS = ['Matemáticas', 'Física', 'Química', 'Computación'];
    var DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    var PERIODOS = ['08:00 - 09:30', '09:45 - 11:15', '11:30 - 13:00'];

    function elegirMateria() {
        return MATERIAS[Math.floor(Math.random() * MATERIAS.length)];
    }

    function crearTabla() {
        var tabla = document.createElement('table');

        var thead = document.createElement('thead');
        var fila = document.createElement('tr');

        var vacio = document.createElement('th');
        vacio.textContent = 'Hora';
        fila.appendChild(vacio);

        DIAS.forEach(function (dia) {
            var th = document.createElement('th');
            th.textContent = dia;
            fila.appendChild(th);
        });

        thead.appendChild(fila);
        tabla.appendChild(thead);

        var tbody = document.createElement('tbody');

        PERIODOS.forEach(function (hora) {
            var tr = document.createElement('tr');

            var th = document.createElement('th');
            th.textContent = hora;
            tr.appendChild(th);

            DIAS.forEach(function () {
                var td = document.createElement('td');
                td.textContent = elegirMateria();
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });

        tabla.appendChild(tbody);

        return tabla;
    }

    function generar(contenedor) {
        if (!contenedor) {
            return;
        }

        contenedor.innerHTML = '';
        contenedor.appendChild(crearTabla());
    }

    document.addEventListener('DOMContentLoaded', function () {
        var contenedores = document.querySelectorAll('[data-horario]');

        Array.prototype.forEach.call(contenedores, generar);

        var botones = document.querySelectorAll('[data-regenerar]');

        Array.prototype.forEach.call(botones, function (boton) {
            boton.addEventListener('click', function () {
                Array.prototype.forEach.call(contenedores, generar);
            });
        });
    });
})();