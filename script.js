let subir = 0
function altura(){
    subir = alert(window.screen.availHeight)
    console.log(`${subir}`)
}
function vai(){
    for(i=0;i<=subir;i++){
        window.document.getElementById("gancho").innerHTML += `\u{2764} `
    }
}
