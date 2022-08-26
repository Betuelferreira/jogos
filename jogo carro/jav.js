const carro = document.querySelector('.carro');
const pedra = document.querySelector('.pedra');
const perdeu = document.getElementById('perdeu');
const pontos = document.getElementById('pontos'); 


var game = true;
let interval = null;
let playerPontos = 0;



let contPont = () => {
    if (game){
    playerPontos++;
    pontos.innerHTML = `PONTOS <b>${playerPontos}</b>`;}
}
interval = setInterval(contPont,200);




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
    

    if( posipedra == 128 && posicarro < 40  ){

        pedra.style.animation = 'none'
        pedra.style.left = `${posipedra}px` ;

        carro.style.animation = 'none'
        carro.style.bottom = `${posicarro}px` ; 
        
        carro.src = './imagens/carrob.png'
        

       perdeu.style.display ='unset'
       
       game = false

    }
 
}, 10);

document.addEventListener('keydown', jump)
