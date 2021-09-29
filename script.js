//400g/pessoa de carne, se +6h 650g
//1200ml/pessoa de cerveja, se +6h 2000ml
//1000ml/pessoa de refrigerante, se +6h 1500ml
//criança consome 0.5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao)*adultos+(carnePP(duracao)/2*criancas);
    let qtdTotalCerveja = cervejaPP(duracao)*adultos;
    let qtdTotalRefrigerante = refrigerantePP(duracao)*criancas;

    resultado.innerHTML = `<p>${qtdTotalCarne}g de Carne`
    resultado.innerHTML += `<p>${qtdTotalCerveja}ml de Cerveja`
    resultado.innerHTML += `<p>${qtdTotalRefrigerante}ml de Refrigerante`

}
function carnePP(duracao){
    if(duracao>=6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(duracao){
    if(duracao>=6){
        return 2000;
    }else{
        return 1200;
    }
}
function refrigerantePP(duracao){
    if(duracao>=6){
        return 1500;
    }else{
        return 1000;
    }
}

