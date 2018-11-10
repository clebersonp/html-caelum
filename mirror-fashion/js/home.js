var botaoNovidades = $(".novidades button");
var botaoMaisVendidos = $(".mais-vendidos button");

botaoNovidades.click(function () {
  /* if($(".novidades").hasClass("painel-aberto")) {
    $(".novidades").removeClass("painel-aberto");
  } else {
    $(".novidades").addClass("painel-aberto");
  } */

  $(".novidades").toggleClass("painel-aberto");
  if ($(".novidades").hasClass("painel-aberto")) {
    $(".novidades button").text("Menos produtos");
  } else {
    $(".novidades button").text("Mostrar mais");
  }
});

botaoMaisVendidos.click(function () {
  $(".mais-vendidos").toggleClass("painel-aberto");
  if ($(".mais-vendidos").hasClass("painel-aberto")) {
    $(".mais-vendidos button").text("Menos produtos");
  } else {
    $(".mais-vendidos button").text("Mostrar mais");
  }
});