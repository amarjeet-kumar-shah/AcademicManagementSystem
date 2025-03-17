#include <iostream>
using namespace std;

int main()
{
    char ch;
    cout<<"Enter charecter  "<<endl;
    cin>>ch;
    if (ch>='a'&& ch<='z')
    {
        cout << "lower case" << endl;
    }
    else if (ch>='A'&& ch<='Z')
    {
        cout <<"Upper case"<< endl;
    }
     else if (ch>='0'&& ch<='9')
    {
        cout <<"nomber case"<< endl;
    }
     else 
    {
        cout <<"Not a correct input "<< endl;
    }
}