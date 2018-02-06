using System;

/*
  Principals of Object Oriented Programming
*/

// Object

public class Human { }

// Object with members

public class Person
{
    public string name;
    public int age;
}

// Object with members and methods (Encapsulation)
public class Circle
{
    private int radius;

    public void SetRadius (int radius)
    {
        this.radius = radius;
    }

    public double Area ()
    {
        return this.radius * this.radius * Math.PI;
    }
}

/*
  Object with varying access modifiers (Encapsulation)
  public    -- Accessed by any other code in the same or different assembly
  protected -- Accessed only by code in the same class
  private   -- Default for members / methods, accessed only by code in the same class or struct
  internal  -- Default for classes, access restricted to this assembly
*/

public class Car
{
    public int speed;
    protected int mass;
    private int torque;
    internal int acceleration;
}

// Objects using Inheritance
public class BaseClass
{
    public string greeting = "Hello, World!";
}

public class InheritedClass : BaseClass
{
    public void PrintBaseClassMember ()
    {
      Console.WriteLine(this.greeting);
    }
}

// Object with multiple constructors (Polymorphism)
public class ShoppingCart
{
    public ShoppingCart () { }

    public ShoppingCart (string item) { }

    public ShoppingCart (string item, int quantity) { }
}

// Object using constructor chaining
public class ShoppingCart
{
    public ShoppingCart (string item) { }

    public ShoppingCart () : this("Apple") { }
}

// Object with member override (Abstraction)
public class Person
{
    private string firstName = "Bob";
    private string lastName = "Smith";

    public override string ToString ()
    {
      return String.Format("{0} {1}", this.firstName, this.lastName)
    }
}

// Object with base constructor call
public class Person
{
    protected string firstName = "Bob";
    protected string lastName = "Smith";

    public Person (string firstName, string lastName)
    {
      this.firstName = firstName;
      this.lastName = lastName;
      String.Format("{0} {1}", this.firstName, this.lastName)
    }
}

public class OtherPerson : Person
{
    public OtherPerson (string firstName, string lastName) : base(firstName, lastName)
    {
      String.Format("{0} {1}", firstName, lastName)
    }
}

//Object using an Abstract class
public abstract class Food
{
    private string foodName;

    public abstract int GetCalories ();

    public string GetFoodName (string foodName)
    {
      this.foodName = foodName;
      return this.foodName;
    }
}

public class Tacos : Food
{
  public const int calories = 600;

  public override int GetCalories ()
  {
    return this.calories;
  }
}
