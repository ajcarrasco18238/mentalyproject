// JavaScript para cambiar el color del encabezado cuando se hace clic en él
const header = document.querySelector('header');

header.addEventListener('click', () => {
    header.style.backgroundColor = 'red';
});
