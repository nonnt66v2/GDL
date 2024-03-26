#include <stdio.h>

void print_row(int N) {
    for(int i = 0; i < N; i++) {
        printf("*");
    }
    printf("\n");
}

void print_column(int N) {
    for(int i = 0; i < N; i++) {
        printf("*\n");
    }
}

void print_diagonal(int N) {
    for(int i = 0; i < N; i++) {
        for(int j = 0; j < i; j++) {
            printf(" ");
        }
        printf("*\n");
    }
}

void print_square(int N) {
    for(int i = 0; i < N; i++) {
        for(int j = 0; j < N; j++) {
            printf("* ");
        }
        printf("\n");
    }
}

void print_right_triangle(int N) {
    for(int i = 0; i < N; i++) {
        for(int j = 0; j <= i; j++) {
            printf("* ");
        }
        printf("\n");
    }
}

int main() {
    int N, choice;

    printf("Enter a number: ");
    scanf("%d", &N);

    printf("Choose an option:\n");
    printf("1. Print a row of N asterisks\n");
    printf("2. Print a column of N asterisks\n");
    printf("3. Print a diagonal of N asterisks\n");
    printf("4. Print a square with side of N asterisks\n");
    printf("5. Print a right triangle with two sides of N asterisks\n");
    printf("0. Exit\n");

    scanf("%d", &choice);

    switch(choice) {
        case 1:
            print_row(N);
            break;
        case 2:
            print_column(N);
            break;
        case 3:
            print_diagonal(N);
            break;
        case 4:
            print_square(N);
            break;
        case 5:
            print_right_triangle(N);
            break;
        case 0:
            printf("Exiting...\n");
            break;
        default:
            printf("Invalid choice\n");
    }

    return 0;
}

#include <stdio.h>
