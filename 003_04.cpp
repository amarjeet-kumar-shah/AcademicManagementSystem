#include <iostream>
using namespace std;

int main()
{
    int a;
    cout << "Enter the value of a " << endl;
    cin >> a;

    if (a > 0)
    {
        cout << "a is positive." << endl;
    }
    else if (a < 0)
    {
        cout << "a is zero." << endl;
    }
    else
    {
        cout << "a is grater." << endl;
    }
}