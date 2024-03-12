//
// Created by nonnt66 on 11/03/24.
//
//scrivere un programma che dato vet1 e vet2 scriva in vet0 gli elementi in posizione pari di vet2 e gli elementi in posizione dispari di vet1

#include <stdio.h>

int main() {
    int vet1[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int vet2[10] = {6, 7, 8, 9, 10, 11, 12, 13, 14, 15};
    int vet0[10];
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            vet0[i] = vet2[i];
        } else {
            vet0[i] = vet1[i];
        }
    }
    for (int i = 0; i < 10; i++) {
        printf("%d ", vet0[i]);
    }
    return 0;
}

//6 2 8 4 10



















