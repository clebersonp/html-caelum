var inputQuantidade = document.querySelector("#qtd");
var outputTotal = document.querySelector("#total");

inputQuantidade.oninput = function () {
  
  var quantidade = inputQuantidade.value;
  var preco = document.querySelector("#preco").textContent;
  preco = parseFloat(preco.replace("R$ ", "").replace(",", "."));

  var valorTotal = preco * quantidade;

  var totalFormatado = "R$ ".concat(valorTotal.toFixed(2).replace(".", ","));

  outputTotal.textContent = totalFormatado;
}