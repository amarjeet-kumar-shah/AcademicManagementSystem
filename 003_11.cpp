#include <iostream>
using namespace std;

int main()
{
   float f,c;
   cout<<"Enter fahrenheit :"<<" "; 
   cin>>f;
    c = (f - 32)*(5.0/9.0);
   
   cout<<"The value in Celsius is : "<<c;
}