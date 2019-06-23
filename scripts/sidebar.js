 document.addEventListener('DOMContentLoaded', function (event) {
    let navBarButton = document.querySelector('#navBarButton');
    let navBar = document.querySelector('#navBar');
    let flag = false;
    navBarButton.addEventListener("click", showHidden);
    
    function showHidden() {
        if (flag) {
            navBar.classList.remove('menu');
            navBar.classList.add('menu-hidden');
            navBarButton.classList.remove('img-menu');
            navBarButton.classList.add('img-menu-hidden');
            flag = false;
        } else {
            navBar.classList.remove('menu-hidden');
            navBar.classList.add('menu');
            navBarButton.classList.remove('img-menu-hidden');
            navBarButton.classList.add('img-menu');
            flag = true;
        }

    }

});

