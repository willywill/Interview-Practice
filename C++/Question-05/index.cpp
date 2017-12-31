#include <iostream>
#include <iomanip>
#include <math.h>

using namespace std;

void Print (int const &n)
{
  cout << setw(10) << n << endl;
}

// 5, 25, 30, 125, 130 (k = 5 here)
int MagicNumber (int n)
{
  if (n == 1)
  {
    return 5;
  }

  else if (n % 2 != 0)
  {
    int distToOne = n - 1;
    int evenNumbersBetween = distToOne / 2;
    int power = n - evenNumbersBetween;
    int magic = pow(5, power) + 5;
    return magic;
  }

  else
  {
    int distToOne = n - 1;
    int oddNumbersBetween = distToOne / 2;
    int power = n - oddNumbersBetween;
    int magic = pow(5, power);
    return magic;
  }
}

int main ()
{
  for (int k = 1; k <= 5; k++)
  {
    Print(MagicNumber(k));
  }

  return 0;
}
