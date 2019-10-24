// Bolinha
function gerarBolinha(){
    document.getElementById("bolinha").style.top="150px"
    document.getElementById("bolinha").style.left="150px"
}
var posicaox = 0
var posicaoy = 0
var direcaox = 5
var direcaoy = 5
function anda(){ // Ronald
    //posicaox+=1
    //posicaoy+=1

    posicaox+=direcaox;
    if(posicaox>(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-50)direcaox=direcaox*-1;
    if(posicaox<0)direcaox=direcaox*-1;

    posicaoy+=direcaoy;
    if(posicaoy>(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)-50)direcaoy=direcaoy*-1;
    if(posicaoy<0)direcaoy=direcaoy*-1;

    document.getElementById("bolinha").style.top=`${posicaoy}px`
    document.getElementById("bolinha").style.left=`${posicaox}px`
    setTimeout('anda()',50)
}
anda()

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



