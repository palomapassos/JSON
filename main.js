const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const nome = document.querySelector('#name');
const idade = document.querySelector('#idade');
const cpf = document.querySelector("#cpf");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const button = document.querySelector('button');
let usuario = null;

form.addEventListener("submit", () => {

    //conferindo se tem algum input vazio
    let itemVazio = false;
    for ( item of inputs){
        if (item.value === '') itemVazio = true;
    }
  
    if(itemVazio === false){
        usuario = {
            nome: nome.value,
            idade: idade.value,
            cpf: cpf.value,
            email: email.value,
            telefone: telefone.value
        }

        //transformando em JSON
        const usuarioJson = JSON.stringify(usuario);

        // armazenando de forma persistente
        localStorage.setItem("usuario", usuarioJson);
        
        // //abrindo uma nova página
        window.open("pessoa.html");

    }else{
        alert("Preencha corretamente todos os campos.")
    }   

});