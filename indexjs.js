const botao = document.createElement("button");

botao.textContent = "Clique e Receba uma Benção!"

document.getElementById("botao-container").appendChild(botao);

botao.addEventListener("click", function() {
const mensagem = document.getElementById("mensagem");
mensagem.textContent = "Que Deus te abençoe e nunca falte paz!";

});