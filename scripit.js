
function mostraSaudacao() {
    const nome = document.getElementById("nome").value;
    const hora = parseInt(document.getElementById("hora").value);
    const mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = "Teste";
}

function saudacaoPersonalizada (nome,hora) {
    if(hora < 12)
    {
        return"Bomdia, " + nome + "!";
    }
    else if(hora > 12&& hora < 18)
    {
        return "Boa tarde, " + nome + "!";
    }
    else if(hora > 18)
    {
        return "Boa noite, " + nome + "!";
    }
    else{
        return"";
    }
}