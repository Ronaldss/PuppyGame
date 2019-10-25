// Bolinha
var h = window.innerHeight
var w = window.innerWidth
function gerarBolinha(){
    document.getElementById("bolinha").style.top="150px"
    document.getElementById("bolinha").style.left="150px"

    // Gerando bolinha 2
    document.getElementById("bolinha2").style.top="100px"
    document.getElementById("bolinha2").style.left="400px" 

    // Livre
    document.getElementById("livre").style.top=`${h/3}px`
    document.getElementById("livre").style.left=`${w/3}px`

    // Livre2 - test
    document.getElementsByClassName("movido")[0].style.top=`${h/2}px`
    document.getElementsByClassName("movido")[0].style.left=`${w/2}px`
}
var posicAtual = h/2
var op=[0,1,2,3,4,5,6,7,8,9,10]
var passosLivres = 0
var nR = 0
function livre(){
    nR = Math.floor(Math.random()*65536) // Gerar um número até 65536ss
    passosLivres += Math.floor(Math.random()*10+1) // Gera números aleatórios entre 1 e 10.
    document.getElementById("livre").style.top = `${passosLivres}px`
    document.getElementById("livre").style.left = `${passosLivres}px`
    setTimeout('livre()',100)
}
var n1 = h/2
var n2 = w/2
function livre2(){
    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    console.log(aleatorio(-1,1))
    n1+=aleatorio(-1,2)
    n2-=aleatorio(-1,2)
    document.getElementsByClassName("movido")[0].style.transform = `translate(${n1}px, ${n2}px)`
    if(n1==1){n1+=10}
    document.getElementsByClassName("movido")[0].style.backgroundColor = "pink"
    document.getElementsByClassName("movido")[0].style.borderRadius = "50%"
    document.getElementsByClassName("movido")[0].style.width = "50px"
    setTimeout('livre2()', 1)
}

var posicaox = 0
var posicaoy = 0
var direcaox = 1
var direcaoy = 1
function anda(){ // Ronald
    posicaox+=direcaox;
    if(posicaox>(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-50)direcaox=direcaox*-1;
    if(posicaox<0)direcaox=direcaox*-1;
    posicaoy+=direcaoy;
    if(posicaoy>(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)-50)direcaoy=direcaoy*-1;
    if(posicaoy<0)direcaoy=direcaoy*-1;
    document.getElementById("bolinha").style.top=`${posicaox}px`
    document.getElementById("bolinha").style.left=`${posicaoy}px`
    setTimeout('anda()',20)
}
var pposicaox = 0
var pposicaoy = 0
var ddirecaox = 1
var ddirecaoy = 1
function anda2(){ // Ronald
    pposicaox+=ddirecaox;
    if(pposicaox>(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-50)ddirecaox=ddirecaox*-1;
    if(pposicaox<0)ddirecaox=ddirecaox*-1;
    pposicaoy+=ddirecaoy;
    if(pposicaoy>(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)-50)ddirecaoy=ddirecaoy*-1;
    if(pposicaoy<0)ddirecaoy=ddirecaoy*-1;
    document.getElementById("bolinha2").style.top=`${pposicaox}px`
    document.getElementById("bolinha2").style.left=`${pposicaoy}px`
    setTimeout('anda2()',30)
}
function recua(){
    posicaox-=10
}

// ------------------------------------------------------------------------
function altura(){
    var retorno = document.getElementById("gancho")
    retorno.innerHTML += `A altura da tela é ${window.screen.availHeight}px`
}
function vai(){
    for(i=0;i<=2*window.screen.availHeight;i++){
        var img = window.document.getElementById("gancho").innerHTML += `\u{1f680} `
        img.Height = "50px"
    }
}


