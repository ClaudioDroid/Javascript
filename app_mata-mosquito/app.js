let width =window.innerWidth ;
let height =window.innerHeight ;

function ajustaTamanhoPalgoJogo(){
  let width =window.innerWidth ;
  let height =window.innerHeight ;
  console.log(width, height);
}

function posicaoRandomica(){
  let posicaoX = Math.floor(Math.random() * (width)) -90;
  let posicaoY = Math.floor( Math.random() * (height)) -90;
  
  console.log(posicaoX, posicaoY);
  
  // Criar o documento HTML
  let mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosquito.png';
  mosquito.className = 'mosquito1';
  mosquito.style.position = 'absolute';
  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  
  document.body.appendChild(mosquito);  
}



















