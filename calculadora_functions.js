//---------------------------------------Mudar tema-----------------------
let tema = 0;
function muda() {
  let link = document.getElementById("a");
  let href = "https://bootswatch.com/5/flatly/bootstrap.min.css";
  tema++;
  switch (tema) {
    case 1:
      href = "https://bootswatch.com/5/cerulean/bootstrap.min.css";
      break;
    case 2:
      href = "https://bootswatch.com/5/darkly/bootstrap.min.css";
      break;
    default:
      href = "https://bootswatch.com/5/flatly/bootstrap.min.css";
      tema = 0;
  }
  link.href = href;
}

//---------------------------------------Ações da calculadora-----------------------

//Variaveis globais
var primeiroValor = 0;
var limpar = false;
var operadorGlobal = "";

function AplicarPercentagem() {
  var valorDisplay = $("#txtDisplay").val();
  var valorPercentagem = (primeiroValor * valorDisplay) / 100;
  let fltPrimeiroValor = parseFloat(primeiroValor);
  let fltValorPercentagem = parseFloat(valorPercentagem);
  switch (operadorGlobal) {
    case "+":
      resultado = fltPrimeiroValor + fltValorPercentagem;
      break;
    case "-":
      resultado = fltPrimeiroValor - fltValorPercentagem;
      break;
    case "x":
      resultado = fltPrimeiroValor * fltValorPercentagem;
      break;
    case "/":
      resultado = fltPrimeiroValor / fltValorPercentagem;
      break;
  }
  if (operadorGlobal == "") {
    resultado = 0;
  }
  $("#txtDisplay").val(resultado);
}

function LimparCalculadora() {
  document.getElementById("txtDisplay").value = "0";
  document.getElementById("txtAreaDeTestes").value = "";
  primeiroValor = 0;
  operadorGlobal = "";
}

function LimparDisplayCalculadora() {
  document.getElementById("txtDisplay").value = "0";
}

function ApagarUltimoElementoDigitado() {
  var display = document.getElementById("txtDisplay");
  var valorAtual = display.value;
  var posicaoApagar = valorAtual.length >= 1 ? valorAtual.length - 1 : 0;
  var valorAposApagar = valorAtual.substring(0, posicaoApagar);
  if (valorAposApagar.length == 0) {
    valorAposApagar = "0";
  }
  display.value = valorAposApagar;
}

function DividirPorX() {
  var valorAtual = $("#txtDisplay").val();
  resultado = 0;
  if (valorAtual != "0") {
    resultado = 1 / valorAtual;
  }
  limpar = true;
  $("#txtDisplay").val(resultado);
}

function Potencia() {
  var valorAtual = $("#txtDisplay").val();
  resultado = valorAtual * valorAtual;
  limpar = true;
  $("#txtDisplay").val(resultado);
}
function Raiz() {
  var valorAtual = $("#txtDisplay").val();
  resultado = Math.sqrt(valorAtual);
  limpar = true;
  $("#txtDisplay").val(resultado);
}

function AlterarSinal() {
  var valorAtual = $("#txtDisplay").val();
  var sinal = valorAtual[0];

  if (sinal == 0 && valorAtual.length == 1) {
    //GuardCondition -- Boa prática defendida por Uncle Bob
    return;
  }

  if (sinal != "-") {
    valorAtual = "-" + valorAtual;
  } else {
    valorAtual = valorAtual.substring(1, valorAtual.length);
  }
  $("#txtDisplay").val(valorAtual);
}

function InserirPonto(parametro) {
  var display = $("#txtDisplay").val();
  if (display.indexOf(parametro) < 0) {
    AtualizarDisplay(parametro);
  }
}

function ApresentarResultado() {
  let resultado = 0;
  let valorAtual = $("#txtDisplay").val();
  let fltPrimeiroValor = parseFloat(primeiroValor);
  let fltSegundoValor = parseFloat(valorAtual);

  switch (operadorGlobal) {
    case "+":
      resultado = fltPrimeiroValor + fltSegundoValor;
      break;
    case "-":
      resultado = fltPrimeiroValor - fltSegundoValor;
      break;
    case "x":
      resultado = fltPrimeiroValor * fltSegundoValor;
      break;
    case "/":
      resultado = fltPrimeiroValor / fltSegundoValor;
      break;
  }
  limpar = true;
  $("#txtDisplay").val(resultado);
}
function GuardarValorAtual(operador) {
  var valorAtual = $("#txtDisplay").val();
  primeiroValor = valorAtual;

  let areaTestes = $("#txtAreaDeTestes").val();
  areaTestes = areaTestes + valorAtual + operador;

  $("#txtAreaDeTestes").val(areaTestes);
  limpar = true;
  operadorGlobal = operador;
}

function AtualizarDisplay(parametro) {
  if (limpar) {
    LimparDisplayCalculadora();
    limpar = false;
  }
  var display = document.getElementById("txtDisplay");
  if (
    (display.value == "0" || display.value == "Infinity") &&
    parametro != "."
  ) {
    display.value = "";
  }
  display.value += parametro;
}
