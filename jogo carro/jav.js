const carro = document.querySelector('.carro');

const jump = () => {
    carro.classList.add('jump');

setTimeout ( () => {
    carro.classList.remove('jump');
}, 1000);

}

document.addEventListener('keydown', jump)