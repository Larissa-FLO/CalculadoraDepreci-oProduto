var vt = document.getElementById('valorEstimado');
var vs = document.getElementById('valorSucata');
var vu = document.getElementById('vidaUtil');
var tu = document.getElementById('tempoUso');
var calcular = document.getElementById('btn');
var resultado = document.getElementById('saidaCalculo');

calcular.addEventListener("click", function () {
  

  
    resultado.value = ((vt.value-vs.value)/vu.value)*tu.value;

    console.log(resultado.value);

  });