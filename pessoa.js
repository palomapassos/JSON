const usuario = localStorage.getItem('usuario');

let nome = document.querySelector('#nome');
let idade = document.querySelector('#idade');
let cpf = document.querySelector("#cpf");
let email = document.querySelector("#email");
let telefone = document.querySelector("#telefone");

//Função de formatação de nome
const formataNome = (nome) => {
    let vetorNome = nome.split(' ');
    let nomeFormatado = '';

    vetorNome = vetorNome.map(x => {
        let restoPalavra = x.slice(1,x.length-1);
        return x[0].toUpperCase() + restoPalavra;
    });

    vetorNome.forEach((nome, i) => {
        nome[i] === nome.length-1 ? nomeFormatado += nome :      nomeFormatado += nome + " ";  
    });
   
    return nomeFormatado;
}

//Função de formatação de idade
const formataIdade = (idade) => {
    return idade === 1 ? idade+' ano' : idade+' anos';
}

//Função de formatação de cpf
const formataCpf = (cpf) => {
    return cpf.slice(0,3)+"."+cpf.slice(3,6)+"."+cpf.slice(6,9)+"-"+cpf.slice(9,11);
}

//Função de formatação de telefone
const formataTelefone = (telefone) => {
    if(telefone.length<9){
        return "9"+telefone.slice(0,4)+"-"+telefone.slice(4,8);
    }else if(telefone.length===9){
        return telefone.slice(0,4)+"-"+telefone.slice(4,8);
    }else if(telefone.length===10){
        return "("+telefone.slice(0,2)+") "+telefone.slice(2,6)+"-"+telefone.slice(6,10);
    }else{
        return "("+telefone.slice(0,2)+") "+telefone.slice(2,7)+"-"+telefone.slice(7,11);
    }
}

//Conferindo se usuario não é nulo e cas não seja mostrando dados
if(usuario === null){
    alert("Nenhum usuário no sistema");
}else{
    const dadosUsuario = JSON.parse(usuario);
    nome.innerText = formataNome(dadosUsuario.nome);
    idade.innerText = formataIdade(dadosUsuario.idade);
    cpf.innerText = formataCpf(dadosUsuario.cpf);
    email.innerText = dadosUsuario.email;
    telefone.innerText = formataTelefone(dadosUsuario.telefone);
} 

