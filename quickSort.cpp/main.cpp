// C++ Program to demonstrate how to implement the quick
// sort algorithm
#include <bits/stdc++.h>
#include <cstring>

using namespace std;

int partition(vector<int> &vec, int low, int high) {

    // Selecting last element as the pivot
    int pivot = vec[high];

    // Index of element just before the last element
    // It is used for swapping
    int i = (low - 1);

    for (int j = low; j <= high - 1; j++) {

        // If current element is smaller than or
        // equal to pivot
        if (vec[j] <= pivot) {
            i++;
            swap(vec[i], vec[j]);
        }
    }

    // Put pivot to its position
    swap(vec[i + 1], vec[high]);

    // Return the point of partition
    return (i + 1);
}

void quickSort(vector<int> &vec, int low, int high) { // NOLINT(*-no-recursion)

    // Base case: This part will be executed till the starting
    // index low is lesser than the ending index high
    if (low < high) {

        // pi is Partitioning Index, arr[p] is now at
        // right place
        int pi = partition(vec, low, high);

        // Separately sort elements before and after the
        // Partition Index pi
        quickSort(vec, low, pi - 1);
        quickSort(vec, pi + 1, high);
    }
}

int main() {

    std::ifstream file("IN.txt"); // Apri il file input.txt
    std::ofstream f("OUT.txt"); // Apri il file input.txt


    if (!file) {
        std::cerr << "Errore apertura file!" << std::endl;
        return 1; // Ritorna un valore di errore
    }

    std::string line;
    while (std::getline(file, line)) {
        size_t pos = line.find("car: [");
        size_t fine = line.find("]},");
        string car = line.substr(pos + 6, fine - pos - 6);
        stringstream ss(car);
        string token;
        vector<int> vec;
        while (getline(ss, token, ',')) {
            vec.push_back(stoi(token));
        }

        quickSort(vec, 0, (int) vec.size() - 1);
        stringstream a;
        for (auto x: vec) {
            a << x << ",";
        }
        line.replace(pos + 6, fine - pos - 6, a.str());
        size_t virgola = line.find(",]");
        line.replace(virgola, 2, "]");

        cout << line << endl;
        f << line << endl;
        cout << endl;

    }

    file.close();
    f.close();// Chiudi il file


    return 0;
}



