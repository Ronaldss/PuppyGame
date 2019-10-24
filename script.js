// Bolinha
function gerarBolinha(){
    document.getElementById("bolinha").style.top="150px"
    document.getElementById("bolinha").style.left="150px"
}
var posicaox = 0
var posicaoy = 0
function anda(){
    posicaox+=1
    posicaoy+=1
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



