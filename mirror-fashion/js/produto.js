var inputTamanho = document.querySelector("[name='tamanho']");
var outputTamanho = document.querySelector("[name='valorTamanho']");


inputTamanho.oninput = mostrarTamanho;

function mostrarTamanho() {
  outputTamanho.textContent = inputTamanho.value;
}