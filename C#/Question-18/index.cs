using System;
using System.Linq;

class MainClass {
  
  public static int x = 5;
  public static int y = 20;
  
  public static int Multiply (int x, int y) {
    return Enumerable.Range(0, y).Aggregate(0, (acc, z) => acc + x);
  }
  
  public static void Main () {
    Console.WriteLine (Multiply(x, y));
  }
}

