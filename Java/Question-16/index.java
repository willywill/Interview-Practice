import java.lang.StringBuilder;

class PalindromeChecker {
  public Boolean CheckString (String s) {
    String word = s.toLowerCase();
    String reverseWord = new StringBuilder(word).reverse().toString().toLowerCase();
    Boolean isPalindrome = reverseWord.equals(word) ? true : false;
    return isPalindrome;
  }
}

class Main {
  
  public static void Print (Object obj) {
    System.out.println(obj);
  }
  
  public static void main(String[] args) {
    String word = "Racecar";
    PalindromeChecker palindromeChecker = new PalindromeChecker();
    Boolean isPalindrome = palindromeChecker.CheckString(word);
    Print(isPalindrome);
  }
}