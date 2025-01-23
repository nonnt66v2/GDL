//Creare un vettore delle caratteristiche di un personaggio famoso es. (italiano, biondo, occhi azzurri, ecc)

const caratteristica = ['italiano', 'biondo', 'occhi azzurri', 'alto', 'magro', 'capelli corti', 'bello', 'brutto', 'pittore', 'pilota', 'donna', 'uomo', 'attore'];

const nomiPersonaggi = ['brad pitt', 'leonardo di caprio', 'angelina jolie', 'carl cox']

let presente;


var matriceAssociazione = [
    {name: nomiPersonaggi[0]/*brad*/, car: [1, 2, 3]/*biondo, occhi azzurri e alto*/},
    {name: nomiPersonaggi[1], car: [4, 5, 6]},
    {name: nomiPersonaggi[2], car: [7, 8, 9]},
    {name: nomiPersonaggi[3], car: [10, 11, 12]}
]


let risposte = [];


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

function domanda() {
    const risposta = prompt('Vuoi la prossima caratteristica? si/no');
    if (risposta === 'si') {
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
        this.nome = ['italiano', 'biondo', 'occhi azzurri', 'alto', 'magro', 'capelli corti', 'bello', 'brutto', 'pittore', 'pilota', 'donna', 'uomo', 'attore'];
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


let risp = document.getElementById('rispostaLabel');
risp.hidden = true;

function prossimaDomanda() {
    if (caratteristiche.indice >= caratteristiche.nome.length - 2) {
        presente = controllaRisposte(matriceAssociazione);
        if(presente>=0 ){
        //risoltato è il nome del personaggio con le caratteristiche cirrispondenti alla matrice di associazione con eventuale immagine
        let immSrc = document.getElementById('immagine');
        document.getElementById('rispostaLabel').innerHTML = "risultato";
            immSrc.src = "img/"+presente+".png"
            risp.hidden = false;
            risp.innerHTML = matriceAssociazione[presente].name;

        document.getElementById('domandaLabel').hidden = true;
        }
        else  {

            document.getElementById('domandaLabel').hidden = true;
            let immSrc = document.getElementById('immagine');
            immSrc.src = "img/"+404+".png";
            risp.hidden = false;
            document.getElementById('rispostaLabel').innerHTML = "risultato";
            risp.innerHTML = "ATTORE NON TROVATO, RIPROVARE";

        }
    }


    document.getElementById('domandaLabel').innerHTML = "il suo personaggio è " + prossimaCaratteristica().toString() + "?";
}

function inserisciRisposta(risposta) {
    for (const risposteElement of risposte) {
        if (risposteElement === risposta) {
            return false;
        }
    }
    return true;
}

function yes() {
    if (inserisciRisposta(caratteristiche.indice)) risposte.push(caratteristiche.indice);
    if (caratteristiche.indice < caratteristiche.nome.length - 1) caratteristiche.indice += 1;
    // console.log(caratteristiche.nome[caratteristiche.indice]);
    console.log(risposte);
    console.log("indice corrente: " + caratteristiche.indice);
    prossimaDomanda();
}

console.log("dimensione array caratteristiche[" + caratteristiche.nome.length + "]");


function no() {
    prossimaDomanda();
    if (caratteristiche.indice < caratteristiche.nome.length - 1) caratteristiche.indice += 1;
}

//
// function mostraRisposte(){
//     document.getElementById('rispostaLabel').innerHTML = risposte.toString();
// }


// 2,3,4


function controllaRisposte(matriceAssociazione) {
    let trovato = 0
    for (let i = 0; i < matriceAssociazione.length; i++) { ///4
        for (let j = 0; j < risposte.length; j++) {
            if (matriceAssociazione[i].car[j] === risposte[j]) trovato++;
        }
        if (trovato >= risposte.length - 1) {
            return i;
        }
        trovato = 0;
    }
    return -1;
}




