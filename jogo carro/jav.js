const carro = document.querySelector('.carro');

const jump = () => {
    carro.classList.add('jump');
}

document.addEventListener('keydown', jump)