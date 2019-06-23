document.addEventListener('DOMContentLoaded',function(event){
    let reproductor=document.querySelector('#reproductor');
    let btnPlay=document.querySelector('#btnPlay');

    btnPlay.addEventListener('click',presionar,false);


    function presionar(){
        if (!reproductor.paused && !reproductor.ended){
            reproductor.pause();
            btnPlay.innerHTML='Play';
            //window.clearInterval(bucle);

        }else{
            reproductor.play();
            btnPlay.innerHTML='Pause';
        }
    }



});