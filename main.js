/**
 * Created by douglasamai on 23/10/2016.
 */
function Validar(pTexto){
    if (pTexto == ''){
        alert('Sem nome não eras :/')
    } else {
        OlaMundo(pTexto)
    }
}

function OlaMundo(pNome) {
    alert(pNome + ' Bem vindo ao mundo');
}

function MostrarHello(){
    alert('Ola mundao');
}

function ResultadoEstatico() {
    alert(10 + 10);
}

function Resultado21() {
    alert(15 - 8);
}

function Resultado22() {
    alert(15 * 8);
}

function Resultado23() {
    alert(10 / 2);
}

function Resultado24(v1, v2) {
    alert(parseFloat(v1) + parseFloat(v2));
}

function Resultado25(v1, v2) {
    alert(parseFloat(v1) - parseFloat(v2));
}

function Resultado26(v1, v2) {
    var resut = parseFloat(v1) * parseFloat(v2);

    document.getElementById("resultado26").innerHTML = resut;
}

function Resultado27(v1, v2) {
    var resut = parseFloat(v1) / parseFloat(v2);

    document.getElementById("resultado27").innerHTML = resut;
}

var tipoOperacao;

function SetarOperacao28(pTipo) {
    tipoOperacao = pTipo;
}

function Resultado28(v1, v2) {
    var result;

    if (tipoOperacao == "+"){
        result = parseFloat(v1) + parseFloat(v2);
    } else if (tipoOperacao == "-"){
        result = parseFloat(v1) - parseFloat(v2);
    } else if (tipoOperacao == "*"){
        result = parseFloat(v1) * parseFloat(v2);
    } else if (tipoOperacao == "/"){
        result = parseFloat(v1) / parseFloat(v2);
    }


    document.getElementById("resultado28").innerHTML = result;
}