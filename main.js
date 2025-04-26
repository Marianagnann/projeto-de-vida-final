const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
    
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-12-16T00:00:00");
const tempoObjetivo2 = new Date("2025-09-30T00:00:00");
const tempoObjetivo3 = new Date("2030-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3];

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();

//Objetivos Mentais
const botoes2 = document.querySelectorAll(".botao2");
const textos2 = document.querySelectorAll(".aba-conteudo2");

for(let i=0;i <botoes2.length;i++){
    botoes2[i].onclick = function(){

        for(let j=0;j<botoes2.length;j++){
            botoes2[j].classList.remove("ativo2");
            textos2[j].classList.remove("ativo2");
        }

        botoes2[i].classList.add("ativo2");
        textos2[i].classList.add("ativo2");
    }
    
}

const contadores2 = document.querySelectorAll(".contador2");
const tempoObjetivo4 = new Date("2028-07-04T00:00:00");
const tempoObjetivo5 = new Date("2026-07-25T00:00:00");
const tempoObjetivo6 = new Date("2027-04-13T00:00:00");

const tempos2 = [tempoObjetivo4,tempoObjetivo5,tempoObjetivo6];

function calculaTempo2(tempoObjetivo2){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo2 - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro2(){
    for (let i=0; i<contadores2.length;i++){
        document.getElementById("Dias"+i).textContent = calculaTempo2(tempos2[i])[0];
        document.getElementById("Horas"+i).textContent = calculaTempo2(tempos2[i])[1];
        document.getElementById("Min"+i).textContent = calculaTempo2(tempos2[i])[2];
        document.getElementById("Seg"+i).textContent = calculaTempo2(tempos2[i])[3];
    }
}

function comecaCronometro2(){
    atualizaCronometro2();
    setInterval(atualizaCronometro2,1000);
}

comecaCronometro2();