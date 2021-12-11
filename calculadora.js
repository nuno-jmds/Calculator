$(document).ready(function () {
  $("#btnPercentagem").click(function () {
    AplicarPercentagem();
  });

  $("#btnCE").click(function () {
    LimparCalculadora();
  });

  $("#btnC").click(function () {
    LimparDisplayCalculadora();
  });

  $("#btnBksp").click(function () {
    ApagarUltimoElementoDigitado();
  });
  $("#btnDivx").click(function () {
    DividirPorX();
  });
  $("#btnX2").click(function () {
    Potencia();
  });
  $("#btnSqrt").click(function () {
    Raiz();
  });

  $("#btnPlusMinus").click(function () {
    AlterarSinal();
  });

  $("#btnDot").click(function () {
    InserirPonto($(this).val());
  });

  $("#btnResult").click(function () {
    ApresentarResultado();
  });

  $(".btnOperacao").click(function () {
    GuardarValorAtual($(this).val());
  });

  $(".btnNumerico").click(function () {
    AtualizarDisplay($(this).val());
  });
});
