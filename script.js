//Por RonaldsS

// Variaveis
var n1 = 10
var n2 = 10
var vcd = window.document.getElementById("vencedor") // Vencedor
var nUser1 = window.prompt("Nome do primeiro player: ") // Player1
var nUser2 = window.prompt("Nome do segundo player: ") // Player2
console.log(nUser1)
console.log(nUser2)

// Criando janela externa
function janela(){
  window.open("", "", "width=100, height=100");
}

// Atribuindo nomes aos playes
window.document.getElementById("rd").innerHTML = `${nUser1}`
window.document.getElementById("gr").innerHTML = `${nUser2}`
// Atribuindo nome no painel
window.document.getElementById("prd").innerHTML = `${nUser1}`
window.document.getElementById("pgr").innerHTML = `${nUser2}`

// Identificando colisão
function detectaColisao() {
  setInterval(alertFunc, 100);
}
var rdL = 0
var rdT = 0
var grL = 0
var grT = 0
function alertFunc() {

  // Variaveis de posicionamento.
  rdL = Math.floor(document.querySelector("div#rd").getBoundingClientRect().left)
  rdT = Math.floor(document.querySelector("div#rd").getBoundingClientRect().top) 
  grL = Math.floor(document.querySelector("div#gr").getBoundingClientRect().left)
  grT = Math.floor(document.querySelector("div#gr").getBoundingClientRect().top)
  fooL = Math.floor(document.querySelector("div#foo").getBoundingClientRect().left)
  fooT = Math.floor(document.querySelector("div#foo").getBoundingClientRect().top)

  // Informações para o painel
  document.getElementById('fooLeft').innerHTML= "left: "+fooL;
  document.getElementById('fooTop').innerHTML=  "Top: "+fooT;

  document.getElementById('manaLeft').innerHTML= "left: "+grL;
  document.getElementById('manaTop').innerHTML= "Top: "+grT;

  document.getElementById('rdLeft').innerHTML= "left: "+rdL;
  document.getElementById('rdTop').innerHTML= "Top: "+rdT;

  // primeira verificação
  if(rdL === fooL || rdT === fooT){
    // Apagando elemento filho da rd
    var node = document.getElementById("rd")
    if (node.parentNode) {
    node.parentNode.removeChild(node)
    }
    vcd.innerHTML += `${nUser2} venceu!`
  }
  // Segunda verificação
  if(grL === fooL || grT === fooT){
    // Apagando elemento filho da gr
    var node = document.getElementById("gr")
    if (node.parentNode) {
    node.parentNode.removeChild(node)
    }
    vcd.innerHTML += `${nUser1} venceu!`
  }
}

// Movimentação principal
function master(){

  detectaColisao() ;

  // Criando número aleatório, setando um limite + e -
  function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  n1=aleatorio(0,window.innerHeight-80)
  n2=aleatorio(0,window.innerWidth-80)
  n3=aleatorio(0,window.innerHeight-80)
  n4=aleatorio(0,window.innerWidth-80)
  //console.log(`Y: ${n1}`)
  //console.log(`X: ${n2}`)
  
  // Movimentando os player
  function vai(){
    document.querySelector("div#rd").style.transform = `translateY(${n1}px)`
    document.querySelector("div#rd").style.transform += `translateX(${n2}px)`
    document.querySelector("div#gr").style.transform = `translateY(${n3}px)`
    document.querySelector("div#gr").style.transform += `translateX(${n4}px)`
    if(n1==n3 & n2==n4){console.log("Colisão!")}
  
  }
  vai()
  setTimeout('master()',1000)
  
}
var f = document.getElementById('foo');
  document.addEventListener('click', function(ev){
    f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
  },false);  

// Capturar posição de elementos na tela
/*function findPosition( oElement ) {
if( typeof( oElement.offsetParent ) != 'undefined' ) {
for( var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent ) {
  posX += oElement.offsetLeft;
  posY += oElement.offsetTop;
}
return [ posX, posY ];
} else {
return [ oElement.x, oElement.y ];
}
}
*/