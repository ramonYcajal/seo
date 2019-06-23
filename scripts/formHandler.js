import { Persona } from './Persona.js'
document.addEventListener("DOMContentLoaded", function (event) {
    //variables...
        let area = document.querySelector('#textarea');
        let formulario = document.querySelector('#formularioContacto')
        let selector = document.querySelector('#selector');
        let array;
        let arraySplit;
        let p = new Persona();

    //listeners...
        area.addEventListener('keydown', comprobarArea);
        area.addEventListener('paste', copiar);
        formulario.addEventListener('submit', enviarDatos);
/**
 * Función que  comprueba que en el area de texto no haya más de 150 palabras
 * capturo eventos de teclado 13:tecla intro; 8:tecla retroceso
 */
    function comprobarArea(Event) {
        array = area.value;
        arraySplit = array.split(' ');
        //Voy a bloquear la tecla intro para que no pueda hacer saltos de línea
        if (Event.keyCode == 13) {
            Event.preventDefault();
        }
        console.log(arraySplit.length);
        if (arraySplit.length - 1 == 150 && Event.keyCode != 8) {
            Event.preventDefault();
        }
    }

    // deshabilito la opción de copiar y pegar...
        function copiar(Event) {
            Event.preventDefault();
            area.placeHolder = 'No permitido';
        }

    function enviarDatos(Event) {
        //quito el comportamiento por defecto del formulario al darle al botón de enviar
        Event.preventDefault();
        p.nombre = document.querySelector('#nombre').value;
        p.email = document.querySelector('#email').value;
        p.telefono = document.querySelector('#telefono').value;
        p.conocido = selector[selector.selectedIndex].value
        if (selector.selectedIndex == 3) {
            p.conocido = `otros: ${area.value}`
        }
        console.log(p);
    }
});//función DOM cargado.