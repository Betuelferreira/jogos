const carro = document.querySelector('.carro');
const pedra = document.querySelector('.pedra');
const pontos = document.querySelector('.pontos');
const perdeu = document.getElementById('perdeu');


const jump = () => {
    carro.classList.add('jump');

setTimeout ( () => {
    carro.classList.remove('jump');
}, 1000);
}

const loop = setInterval(() => {

    const posipedra = pedra.offsetLeft;
 /* const posinuvem = nuvem1.offsetLeft; */
    const posicarro = +window.getComputedStyle(carro).bottom.replace('px',' ');
    

    if( posipedra <= 129 && posipedra > 0 && posicarro < 40  ){

        pedra.style.animation = 'none'
        pedra.style.left = `${posipedra}px` ;

        carro.style.animation = 'none'
        carro.style.bottom = `${posicarro}px` ; 
        
        carro.src = './imagens/carrob.png'
        

       perdeu.style.display ='unset'
    

    }
 
}, 10);

document.addEventListener('keydown', jump)
