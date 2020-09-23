let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
 let txtNome = document.querySelector("#txtNome")
if(nome.value.length < 3){
txtNome.innerHTML = "Nome Inválido"
txtNome.style.color = "red"
}else{
    txtNome.innerHTML = "Nome Valido"
    txtNome.style.color = "blue"
    nomeOk = true
}
}

function validaEmail(){

let txtEmail = document.querySelector("#txtEmail")

if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
txtEmail.innerHTML = "email invalido"
txtEmail.style.color = "red"
}else{
    txtEmail.innerHTML = "email valido"
    txtEmail.style.color = "blue"
    emailOk = true
        }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >=100){
txtAssunto.innerHTML = "Esse texto é muito grande digite no maximo 100 caracteres"
txtAssunto.style.color = "red"
txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true)
    alert ("Formulario enviado com sucesso")
    else{
        alert("Preencha o formulario corretamente")
    }
}

function mapazoom(){
mapa.style.width = "800px"
mapa.style.height = "600px"
}

function mapanormal(){
mapa.style.width = "450px"
mapa.style.height = "250px"
}