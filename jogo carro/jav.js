const carro = document.querySelector('.carro');
const pedra = document.querySelector('.pedra');
const perdeu = document.getElementById('perdeu');
const pontos = document.getElementById('pontos'); 
const botao = document.getElementById('botao');
const botao2 = document.getElementById('botao2');


botao2.style.display = "none"
pedra.style.display = "none"
carro.style.display = "none"


let game = false;
let interval = null;
let playerPontos = 0;



const inicio = () =>{
    pedra.classList.add('anpedra');
    pedra.style.display = "unset"
    carro.style.display = "unset"
    botao.style.display = "none"
    game = true;
} 
botao.addEventListener('click', inicio)

/* const reiniciar = () =>{
    pedra.classList.add('anpedra');
    pedra.style.display = "unset"
    carro.style.display = "unset"
    
    botao2.style.display = "none"
    perdeu.style.display = "none"

    game = true;
} 
botao2.addEventListener('click', reiniciar) */


let contPont = () => {
    if (game){
    playerPontos++;
    pontos.innerHTML = `PONTOS: <b>${playerPontos}</b>`;}
    
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
    

    if( posipedra <= 129 && posipedra > 0 && posicarro < 40  ){

        pedra.style.animation = 'none'
        pedra.style.left = `${posipedra}px` ;

        carro.style.animation = 'none'
        carro.style.bottom = `${posicarro}px` ; 
        
        carro.src = './imagens/carrob.png'
        

        perdeu.style.display ='unset'
       
        game = false

        /* botao2.style.display ='unset' */


    }
 
}, 10);

document.addEventListener('keydown', jump)

