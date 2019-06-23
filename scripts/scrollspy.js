document.addEventListener('DOMContentLoaded', function (event) {

    //capturo las imagenes del viewport
    let elementos = document.querySelectorAll('.viewport');

    //capturo los elementos de tipo a que son hijos de la etiqueta nav
    let elementosMenu=document.getElementById('navBar').querySelectorAll('a');
    
console.dir(elementosMenu);
    let arrayOffsets = [];
  
    for (let i = 0; i < elementos.length; i++) {
        arrayOffsets.push(elementos[i].offsetTop);
    }


    window.addEventListener('scroll', function () {
        let i = 0;
        for ( i = 0; i < arrayOffsets.length; i++){
            if(window.pageYOffset>=arrayOffsets[i-1]&&window.pageYOffset<arrayOffsets[i]){
                console.log('estoy en el viewport:',i-1);
                quitarYPonerClase(i-1);
            }
        }
        if(window.pageYOffset>=arrayOffsets[arrayOffsets.length-1]){
            console.log('estoy en el viewport:',i-1);
            quitarYPonerClase(i-1);
        }

    });

function quitarYPonerClase(posicion){
    for(let i=0;i<arrayOffsets.length;i++){
        elementosMenu[i].classList.remove('activo');
    }
    elementosMenu[posicion].classList.add('activo');
}
});