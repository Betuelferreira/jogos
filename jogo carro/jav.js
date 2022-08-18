const carro = document.querySelector('.carro');
const pedra = document.querySelector('.pedra');

const jump = () => {
    carro.classList.add('jump');

setTimeout ( () => {
    carro.classList.remove('jump');
}, 1000);

}



const loop = setInterval(() => {
    const posipedra = pedra.offsetLeft;
    const posicarro = +window.getComputedStyle(carro).bottom.replace('px',' ');
    if( posipedra <= 129 && posipedra > 0 && posicarro < 40  ){
        pedra.style.animation = 'none'
        pedra.style.left = `${posipedra}px` ;
    }


}, 10);

document.addEventListener('keydown', jump)