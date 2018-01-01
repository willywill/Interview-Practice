// Fibonacci sequence - print out the last 2 previous numbers added
class Main {

  public static void Print (Object obj) {
    System.out.println(obj);
  }

  public static long storedValues[] = new long[10];

  public static long Fibonacci (int x) {
    // Set initial values
    long fib = 0;
    if (x == 0) return 0;
    else if (x <= 2) return 1;
    else if (storedValues[x] != 0) return storedValues[x];
    else {
      fib = Fibonacci(x - 1) + Fibonacci(x - 2);
      storedValues[x] = fib;
      return fib;
    }
  }

  public static void main(String[] args) {
    for( int i = 0; i < 10; i++)
    {
      Print(Fibonacci(i));
    }
  }
}
