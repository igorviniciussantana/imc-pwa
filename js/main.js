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


    nome_tela.textContent = nome + ", ";
    idade_tela.textContent =  idade + " anos";
    sexo_tela.textContent = sexo;
   altura_tela.textContent = altura + "m -";
   peso_tela.textContent = peso + "kg";
    resultado.textContent = soma.toFixed(2);

    if (soma < 18.5) {
        tabela.style.color = "#FF3636"
        tabela.textContent = "Abaixo do peso";
       

    } else if (soma > 18.5 & soma < 24.9) {
        tabela.style.color = "#47AA25"

        tabela.textContent = "Peso normal";

    } else if (soma > 25.0 & soma < 29.9) {
tabela.style.color = "#FFBB36"
        tabela.textContent = "Excesso de peso";
        

    } else if (soma > 30.0 & soma < 34.9) {
        tabela.style.color = "#FF3636"
        tabela.textContent = "Obsidade classe I";

    } else if (soma > 35.0 & soma < 39.9) {
        tabela.style.color = "#FF3636"
        tabela.textContent = "Obsidade classe II";

    } else if (soma > 40) {
        tabela.style.color = "#FF3636"
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

// function downloadPDF() {
//     const item = document.querySelector(".resultados");
//     const nome = document.getElementById("nome").value;
//     const fileName = nome + '.pdf'
  
//     var opt = {
//       margin: 0,
//       filename: fileName,
//       html2canvas: { scale: 2},
//       jsPDF: { unit: "cm", format: "letter", orientation: "portrait" },
//     };
  
//     html2pdf().set(opt).from(item).save();
//   }

function downloadPDF() {
    const item = document.querySelector(".resultados");
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const sexo = document.getElementById("sexo").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const fileName = nome + '.pdf'

  
const div = document.createElement('div')

div.insertAdjacentHTML('afterbegin', 

`
<div class="file">
<h1 class="fileTitle">Relatório IMC</h1>
        <div class="cima" id="cima">
          <div class="nomeIdade">
            <h1 id="nome_tela">${nome}, </h1>
            <h1 id="idade_tela">${idade} anos</h1>
          </div>
          <h1 id="sexo_tela">${sexo}</h1>

          <div class="pesoAltura">
            <h1 id="altura_tela">${altura} -</h1>
            <h1 id="peso_tela"> ${peso}</h1>
          </div>
        </div>
        Seu IMC é:
        <h1 id="resultado">0</h1>
        <h1 id="tabela"></h1>
        <h1 class="generate">Gerado com <span>Calculadora IMC</span></h1>
      </div>


`



)
  
    html2pdf(div, {

        margin: 0,
        filename: nome + ".pdf",
        html2canvas: { scale: 2, backgroundColor: "#ff8dd0" },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" }

    });
  }