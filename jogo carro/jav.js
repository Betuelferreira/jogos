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
    if( posipedra <= 129 ){
        pedra.style.animation = 'none'
    }


}, 10);

document.addEventListener('keydown', jump)