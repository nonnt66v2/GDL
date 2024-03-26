//Dato un vettore di 8 numeri interi caricato da programma stampare in uscita la somma e la media dei valori in esso contenuti..
#include <stdio.h>

int main(){
    int vet[8];
    int somma =0;
    for(int i=0;i<8;i++){
        printf("inserisci numero in vet[%d]: ",i);
        scanf("%d",&vet[i]);
        somma += vet[i];
    }
    printf("la somma dei numeri del vettore e' -> %d\n",somma);
    printf("la media dei numeri del vettore e' -> %f",(float)somma/8);
}