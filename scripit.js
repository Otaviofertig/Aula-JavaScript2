
const carros = ["Uno", "Escort", "Gol"]

const conteudo = document.getElementById("conteudo");

function criaSecao(titulo,dadosf) {
    let secao = document.createElement("div");
secao.innerHTML = "<h2>Loop While</h2>"+dados;
conteudo.appendChild(secao);
}



let dados ="";
let i = 0;
while(i < 4) 
{
    dados += "<p>" + carros[i] +  "<//p>";
    i++;
}

criaSecao("Loop While", dados);

criaSecao("Loop While 2", dados2)

let dados2 ="";
let i2 = 0;
while(i2 < carros.length) 
{
    dados2 += "<p>" + carros[i2] +  "<//p>";
    i2++;
}
