//
// Created by nonnt66 on 12/03/24.
//
//Scrivere un programma che doppo aver caricato un array di N elementi (N positivo scelto dall'utente),
// con numeri digitati dall'utente li sommi tra loro e ne visualizzi il risultato

#include <stdio.h>

int main(){
    int N;
    printf("inserisci dimensione Array: ");
    scanf("%d",&N);
    int vet[N];
    int somma =0;
    for(int i=0;i<N;i++){
        printf("inserisci numero in vet[%d]: ",i);
        scanf("%d",&vet[i]);
        somma += vet[i];
    }
    printf("la somma dei numeri del vettore e' -> %d",somma);
}