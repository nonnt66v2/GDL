
// creare una funzione che restituisca la caratteristica precedente

//Creare un vettore delle caratteristiche di un personaggio famoso es. (italiano, biondo, occhi azzurri, ecc)

const caratteristica = ['italiano', 'biondo', 'occhi azzurri', 'alto', 'magro', 'capelli corti', 'bello', 'brutto', 'pittore', 'pilota', 'donna', 'uomo', 'attore', 'inglese', 'capelli lunghi', 'youtuber', 'ricci', 'calciatore', 'occhi verdi', 'cuoco', 'barba', 'capelli dreadlocks corti', 'cantante', 'afro', 'mago','cicatrice','occhiali', 'politico', 'tatuaggi', 'occhiali', 'calvo'];

const nomiPersonaggi = ['brad pitt', 'leonardo di caprio', 'angelina jolie', 'carl cox', 'Favij', 'Tom Holland', 'Cristiano Ronaldo', 'Chiara Ferragni', 'Carlo Cracco', 'Xxxtentacion', 'Harry Potter', 'Giorgia Meloni', 'Sabrina Cereseto', 'Elon Musk', 'Billie Elish', 'Fedez', 'St3pny', 'Gabby16bit', 'Pedro Pascal', 'Alessandro Siani', 'Maria Esposito']

let presente;

let riprovaBtn = document.getElementById("riprovaBtn");
riprovaBtn.hidden = true;

let riprovaLabel = document.getElementById("riprovaLabel");
riprovaLabel.hidden = true;
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
yesBtn.hidden = false;
noBtn.hidden = false;


var matriceAssociazione = [
    {name: nomiPersonaggi[0], car: [1, 2, 3, 13]},
    {name: nomiPersonaggi[1], car: [4, 5, 13]},
    {name: nomiPersonaggi[2], car: [0, 3, 6, 12]},
    {name: nomiPersonaggi[3], car: [11, 13, 22, 23, 30]},
    {name: nomiPersonaggi[4], car: [0, 3, 15, 16]},
    {name: nomiPersonaggi[5], car: [ 11, 12, 13]},
    {name: nomiPersonaggi[6], car: [3, 11, 17]},
    {name: nomiPersonaggi[7], car: [3, 4, 10, 15]},
    {name: nomiPersonaggi[8], car: [0, 11, 14, 19]},
    {name: nomiPersonaggi[9], car: [11, 13, 21, 22, 23]},
    {name: nomiPersonaggi[10], car: [2, 5, 11, 12, 13]},
    {name: nomiPersonaggi[11], car: [0, 1, 5, 10, 27]},
    {name: nomiPersonaggi[12], car: [0, 10, 14, 15]},
    {name: nomiPersonaggi[13], car: [5, 13, 11]},
    {name: nomiPersonaggi[14], car: [2, 10, 13, 14, 22]},
    {name: nomiPersonaggi[15], car: [0, 3, 11, 22]},
    {name: nomiPersonaggi[16], car: [0,  3, 5, 11, 15,]},
    {name: nomiPersonaggi[17], car: [0, 3, 4, 11, 15 ]},
    {name: nomiPersonaggi[18], car: [5, 11, 13, 20]},
    {name: nomiPersonaggi[19], car: [0, 3, 5, 11, 12, 16]},
    {name: nomiPersonaggi[20], car: [0, 3, 4, 6, 10, 12]},
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
        this.nome = ['italiano', 'biondo', 'occhi azzurri', 'alto', 'magro', 'capelli corti', 'bello', 'brutto', 'pittore', 'pilota', 'donna', 'uomo', 'attore', 'inglese', 'capelli lunghi', 'youtuber', 'ricci', 'calciatore', 'occhi verdi', 'cuoco', 'barba', 'capelli dreadlocks corti', 'cantante', 'afro', 'mago','cicatrice','occhiali', 'politico', 'tatuaggi', 'occhiali', 'calvo'];
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
        yesBtn.hidden = true;
        noBtn.hidden = true;
        if (presente >= 0) {
            //risultato è il nome del personaggio con le caratteristiche corrispondenti alla matrice di associazione con eventuale immagine
            let immSrc = document.getElementById('immagine');
            document.getElementById('rispostaLabel').innerHTML = "risultato";
            immSrc.src = "img/" + presente + ".png"
            risp.hidden = false;
            risp.innerHTML = matriceAssociazione[presente].name;
            riprovaBtn.hidden = false;
            riprovaLabel.hidden = false;


            document.getElementById('domandaLabel').hidden = true;
        } else {

            document.getElementById('domandaLabel').hidden = true;
            let immSrc = document.getElementById('immagine');
            immSrc.src = "img/" + 404 + ".png";
            risp.hidden = false;
            document.getElementById('rispostaLabel').innerHTML = "risultato";
            risp.innerHTML = "ATTORE NON TROVATO, RIPROVARE";
            riprovaBtn.hidden = false;


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
    console.log(indice);
    if (inserisciRisposta(caratteristiche.indice)) risposte.push(caratteristiche.indice);
    if (caratteristiche.indice < caratteristiche.nome.length - 1) caratteristiche.indice += 1;
    // console.log(caratteristiche.nome[caratteristiche.indice]);
    console.log(risposte);
    console.log("indice corrente: " + caratteristiche.indice);
    prossimaDomanda();
}

console.log("dimensione array caratteristiche[" + caratteristiche.nome.length + "]");


function no() {
    console.log(indice);
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


function riprova() {
    risposte = [];
    location.reload();
}



console.log(caratteristica);
console.log(nomiPersonaggi);

