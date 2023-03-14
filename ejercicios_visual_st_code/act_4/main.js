const miInputName = document.getElementById("Nombre");
const miInputAp = document.getElementById("Ap");
const miInputDirec = document.getElementById("Direc");
const miInputE = document.getElementById("E");
const miInputSol = document.getElementById("Sol");
const miInput1 = document.getElementById("N1");
const miInput2 = document.getElementById("N2");
const resultado = document.getElementById("Resultados")
const resultadoSum = document.getElementById("ResultadosSum")
const resultadoRes = document.getElementById("ResultadosRes")

const btn = document.getElementById("btnEnviar");
const suma =  document.getElementById("btnSumar");
const resta = document.getElementById("btnRestar");

btn.addEventListener('click', inputs);
suma.addEventListener('click', sum)
resta.addEventListener('click', res)

function inputs()
{
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Nombre: " + miInputName.value + "<br>Apellido: " + miInputAp.value + "<br>Direccion: " + miInputDirec.value + "<br>Edad: " + "<br>Soltero: " + miInputSol.value;
    resultado.append(paragraph);
}

function sum()
{
    const r = document.createElement("n");
    r.innerHTML = parseInt(N1.value)+parseInt(N2.value);
    resultadoSum.append(r);
}

function res()
{
    const m = document.createElement("n");
    m.innerHTML = parseInt(N1.value)-parseInt(N2.value);
    resultadoRes.append(m);
}