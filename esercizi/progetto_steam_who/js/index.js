
//Creare un vettore delle caratteristiche di un personaggio famoso es. (italiano, biondo, occhi azzurri, ecc)

const caratteristica = ['italiano', 'biondo', 'occhi azzurri', 'alto', 'magro', 'capelli corti','bello','brutto','pittore','pilota','donna','uomo','attore'];

// creare una variabile indice che parte da 0

let indice = 0;

// creare una funzione che restituisca la caratteristica corrente

function getCaratteristica() {
    return caratteristica[indice];
}

// creare una funzione che restituisca la prossima caratteristica

function prossimaCaratteristica() {
    indice = (indice + 1) % caratteristica.length;
    return getCaratteristica();
}

// creare una funzione che restituisca la caratteristica precedente

function precedenteCaratteristica() {
    indice = (indice + caratteristiche.length - 1) % caratteristiche.length;
    return getCaratteristica();
}

function domanda(){
    const risposta = prompt('Vuoi la prossima caratteristica? si/no');
    if(risposta === 'si'){
        console.log(prossimaCaratteristica());
    } else {
        console.log(precedenteCaratteristica());
    }
}
// stampare la caratteristica corrente

// domanda();

// creare una calsse Caratteristiche che contenga le seguenti proprietà:
// un vettore con delle caratteristiche e l'indice di ogni caratteristica



class Caratteristiche {
    constructor() {
        this.nome = ['italiano', 'biondo', 'occhi azzurri', 'alto', 'magro', 'capelli corti','bello','brutto','pittore','pilota','donna','uomo','attore'];
        this.indice = 0;
    }

    // creare un metodo che restituisca la caratteristica corrente
    getCaratteristica(numero) {
        return this.nome[numero];
    }

    // creare un metodo che restituisca la prossima caratteristica
    prossimaCaratteristica() {
        this.indice = (this.indice + 1) % this.nome.length;
        return this.getCaratteristica();
    }

    // creare un metodo che restituisca la caratteristica precedente
    precedenteCaratteristica() {
        this.indice = (this.indice + this.nome.length - 1) % this.nome.length;
        return this.getCaratteristica();
    }
}

// creare un oggetto caratteristiche

const caratteristiche = new Caratteristiche();

// stampare la caratteristica corrente

//crea una funzione yes() che restituisca la prossima caratteristica in una label di nome "domandaLabel" e salvi l'indice della caratteristica corrente allìinterno di un vettore di indici




let risposte = [];



function prossimaDomanda(){
    if(caratteristiche.indice >=  caratteristiche.nome.length-2)  {

            //risoltato è il nome del personaggio con le caratteristiche cirrispondenti alla matrice di associazione con eventuale immagine
            let immSrc = document.getElementById('immagine');
            document.getElementById('rispostaLabel').innerHTML = "risultato" ;
            if(risposte.length > 5 ) immSrc.src = "img/img_1.png";
            else immSrc.src = "img/img_2.png";
            document.getElementById('domandaLabel').hidden = true;
        }
    document.getElementById('domandaLabel').innerHTML = "il suo personaggio è "+prossimaCaratteristica().toString()+"?" ;
}

function inserisciRisposta(risposta){
    for (const risposteElement of risposte) {
        if(risposteElement === risposta){
                return false;
        }
    }
    return true;
}

function yes(){
    if(inserisciRisposta(caratteristiche.indice)) risposte.push(caratteristiche.indice);
    if(caratteristiche.indice < caratteristiche.nome.length-1)caratteristiche.indice+=1;
    // console.log(caratteristiche.nome[caratteristiche.indice]);
    console.log("indice corrente: "+caratteristiche.indice);
    prossimaDomanda();
}

console.log("dimensione array caratteristiche["+caratteristiche.nome.length+"]");


function no(){
    prossimaDomanda();
    if(caratteristiche.indice < caratteristiche.nome.length-1)caratteristiche.indice+=1;
}
//
// function mostraRisposte(){
//     document.getElementById('rispostaLabel').innerHTML = risposte.toString();
// }



