document.getElementById("salvar").addEventListener("click", salvar );

function salvar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let celular = document.getElementById("celular").value;

    if (nome && email && telefone && celular) {
        alert("Cadastro realizado com sucesso");
    } else {
        alert("Preencha todos os campos");
    }
}

document.getElementById("limpar").addEventListener("click", limpar );

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("celular").value = "";
}