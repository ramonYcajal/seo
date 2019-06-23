document.addEventListener('DOMContentLoaded', function (event) {
    let selector = document.querySelector('#selector');
    selector.addEventListener('change', selectionTest);
    let textArea = document.querySelector('#textarea');
    function selectionTest() {
        let opcion = selector.selectedIndex;
        textArea.classList.add('textarea-hide');
        if (opcion === 3) {
            textArea.classList.remove('textarea-hide');
        }
    }

});




   