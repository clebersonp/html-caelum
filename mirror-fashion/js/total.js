var inputQuantidade = document.querySelector("#qtd");
var outputTotal = document.querySelector("#total");

inputQuantidade.oninput = function () {
  
  var quantidade = inputQuantidade.value;
  var preco = document.querySelector("#preco").textContent;
  preco = parseFloat(preco.replace("R$ ", "").replace(",", "."));

  var valorTotal = preco * quantidade;

  var valorTotalFormatado = formatarValorMoedaReal(valorTotal);

  outputTotal.textContent = valorTotalFormatado;
}

function formatarValorMoedaReal(valor) {
  var valorFormatter = new Intl.NumberFormat("pt-BR",
                            { style: "currency", currency: "BRL",
                              minimumFractionDigits: 2 });
  return valorFormatter.format(valor);
}