numeroSecreto = 0;
let intentos = 0;

let listaNumerosSorteados = [];
let numeroMax = 10;

function Elements(elemento, texto){

    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
    return;

}

function numeroUsuario(){

    console.log(numeroSecreto);

    let numeroU = parseInt(document.getElementById('numeroUsuario').value);
    
    if(numeroU === numeroSecreto){

        Elements('p', `Haz acertado el número en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');

    }else{

        if(numeroU > numeroSecreto){
            Elements('p', 'El número secreto es menor');

        }else{
            Elements('p', 'El número secreto es mayor');

        }
        intentos++;
        limpiarcaja();

    }
    return;
}

function numeroAleatorio(){

    let numeroGenerado = Math.floor(Math.random()*numeroMax) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length() == numeroMax){
        Elements('p', 'Ya se sortearon todos los números posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return numeroAleatorio();
        }else{
            
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }   
    }
}

function limpiarcaja(){
   document.querySelector('#numeroUsuario').value = '';
}

function condicionesIniciales(){
    Elements('h1', 'Juego del número secreto');
    Elements('p', `Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = numeroAleatorio();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function reiniciarJuego(){
    limpiarcaja();
    condicionesIniciales();
}
condicionesIniciales();