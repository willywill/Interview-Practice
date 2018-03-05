using System;

static class Print
{
  public static void ln (int x)
  {
    Console.WriteLine(x);
  }
}

/// <summary>
/// Performs a binary search in O(log(n)) fashion over a sorted array.
/// If the element is in the center it becomes O(1), constant time. Uses a iterative solution.
/// </summary>
class BinarySearch
{
  public int Search (int[] numberArray, int min, int max, int key)
  {
    while (min <= max)
    {
      // Returns the middle point of the search
      int middle = (min + max) / 2;

      if (numberArray[middle] == key)
      {
        return middle;
      }

      else if (numberArray[middle] > key)
      {
        max = middle - 1;
      }

      else
      {
        min = middle + 1;
      }

    }

    return -1;
  }
}


class Program
{
  public static void Main ()
  {
    BinarySearch binarySearch = new BinarySearch();

    int[] numberArray = new int[] {1, 2, 3, 4, 5, 8, 11, 15, 30};

    const int key = 8;
    const int min = 0;
    int max = numberArray.Length - 1;

    int result = binarySearch.Search(numberArray, min, max, key);

    Print.ln (result);
  }
}
