#include <stdio.h>

int main() {
    //scrivi un programma C che ricevuto un numero in input ne scriva l'equivalente in binario
    // in un vettore di 8 elementi
    //controlla l'input utente e stampa un messaggio di errore se l'input non è valido

    int n;
    int v[8] = {0};
    printf("Inserisci un numero: ");
    scanf("%d", &n);
    if (n < 0 || n > 255 ) {
        printf("Il numero che hai inserito non è valido");
        return 1;
    }
    for (int i = 0; i < 8; i++) {
        v[i] = n % 2;
        n = n / 2;
    }
    for (int i = 7; i >= 0; i--) {
        printf("%d", v[i]);
    }
    return 0;

}
