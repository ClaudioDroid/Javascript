let width =window.innerWidth ;
let height =window.innerHeight ;

function ajustaTamanhoPalgoJogo(){
  let width =window.innerWidth ;
  let height =window.innerHeight ;
  console.log(width, height);
}

function posicaoRandomica(){
  // Definindo a posição randômica para o mosquito
  let posicaoX = Math.floor(Math.random() * (width)) -90;
  let posicaoY = Math.floor( Math.random() * (height)) -90;

  // Evitando bug do mosquito fora da tela.
  if(posicaoX <= 0){
    posicaoX += 95;
  }
  if(posicaoY <= 0){
    posicaoY += 95;
  }

  console.log(posicaoX, posicaoY);
  
  // Criando o elemento HTML.
  let mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosquito.png';
  mosquito.className = tamanhoAleatorio(); // Esta classe define o tamanho do mosquito
  mosquito.style.transform = ladoAleatório(); // Esta classe define o lado do mosquito
  mosquito.style.position = 'absolute';
  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  
  document.body.appendChild(mosquito);  
}

// Define o tamanho que o mosquito será exibido (1, 2 ou 3).
function tamanhoAleatorio(){
  let classe = Math.ceil(Math.random() * 3);
  console.log('tamanho:' + classe);
  if (classe == 1){ return 'mosquito1'}
  if (classe == 2){ return 'mosquito2'}
  if (classe == 3){ return 'mosquito3'}
}

// Define o lado em que o mosquito será exibido (normal ou invertido).
function ladoAleatório(){
  let lado = Math.ceil(Math.random() * 2);
  console.log ('lado:' + lado);
  if (lado == 1){ return 'scaleX(1)'};
  if (lado == 2){ return 'scaleX(-1)'};
}
















