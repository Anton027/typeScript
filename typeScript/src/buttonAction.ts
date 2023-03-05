const buttonClick = document.querySelector('#buttonid')!;

if (buttonClick) {
    buttonClick.addEventListener('click', function() {
        console.log('Click');
    });
}