// window.onload = () => {
//     "use strict";
//     if ("serviceWorker" in navigator) {
//         navigator.serviceWorker.register("./sw.js");
//     }
// };


function calcular() {

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const sexo = document.getElementById("sexo").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;



    soma = peso / (altura * altura);


    nome_tela.textContent = nome + ",";
    idade_tela.textContent = idade + " anos";
    sexo_tela.textContent = sexo;
   altura_tela.textContent = altura;
   peso_tela.textContent =  peso;
    resultado.textContent = soma.toFixed(2);

    if (soma < 18.5) {

        tabela.textContent = "Abaixo do peso";

    } else if (soma > 18.5 & soma < 24.9) {

        tabela.textContent = "Peso normal";

    } else if (soma > 25.0 & soma < 29.9) {

        tabela.textContent = "Excesso de peso";

    } else if (soma > 30.0 & soma < 34.9) {

        tabela.textContent = "Obsidade classe I";

    } else if (soma > 35.0 & soma < 39.9) {

        tabela.textContent = "Obsidade classe II";

    } else if (soma > 40) {

        tabela.textContent = "Obsidade classe III";
    }

}

function limpar() {
    const nome = document.getElementById("nome").value = "";
    const idade = document.getElementById("idade").value = "";
    const sexo = document.getElementById("sexo").value = "";
    const peso = document.getElementById("peso").value = "";
    const altura = document.getElementById("altura").value = "";

}

function downloadPDF() {
    const item = document.querySelector(".resultados");
    const nome = document.getElementById("nome").value;
    const fileName = nome + '.pdf'
  
    var opt = {
      margin: 0,
      filename: fileName,
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
  
    html2pdf().set(opt).from(item).save();
  }