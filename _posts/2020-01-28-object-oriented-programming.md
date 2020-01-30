---
layout: post
title: "Object Oriented Programming"
comments: True
date: 2020-01-28 23:00:00
---

In this post, I'll be giving a quick primer on Object Oriented Programming or OOP.

This explanation will be using Python - each programming language has its own nuances and syntax for the various things explained in here. 




# Base Definitions and Knowledge 
Objects -> essentially the same definition as a regular object, an entity that can be acted upon

Classes -> these are the blueprints for objects -- these are referred to when creating a new object

Instances -> these are the actual manifestations of objects in your code. For example, you could have people that own a Honda Accord. The Honda Accord car line is the object, while the individual cars that people own are the instances. They can also be referred to as instance objects.

Attributes -> information about a specific instance

# Pillars of Object Oriented Programming
There are four pillars to OOP. Incorporate these into your programming, and you'll be sure to become a gR8 programmer.
- inheritance
- polymorphism
- encapsulation
- abstraction


## Inheritance
The most prominent of all is inheritance.

Inheritance is well... inheritance. 

> Well, that's a not very good explanation of inheritance, Matt.

Aptly named, inheritance refers to the ability of objects to pass down behaviors to another line of objects. It's similar to biology, where blue-eyed parents would pass down their trait of blue eyes to their children. 

In programming, there are parent-child relationships between classes. For example, let's establish the `Animal` and `UnknownAnimal` class:

```Python
class Animal():
    # initialization here, etc..
    def __init__(self):
        self.numLegs = 4
    
    def makeNoise():
        print("This animal made a strange noise.")
    
    def eat():
        print("This animal ate something.")

class UnknownAnimal(Animal):
    pass
```


Now it's pretty straightforward to see that the class `Animal` has a function named `makeNoise` that prints to the console. The **child**, `UnknownAnimal`, also has the functions `makeNoise` and `eat` because its **parent** is `Animal`. The `UnknownAnimal` class inherits the behavior of the Animal class, as a result. 

In addition, inheritance applies to variables defined in classes. Variables defined in classes are passed down the hierarchy also. A `UnknownAnimal` object has access its own `numLegs` since it's a child of `Animal`. (There is a distinction between class variables vs. instance variables, but that should have a post dedicated to it.)

And that's all to inheritance!

## Polymorphism

[I already explained Polymorphism here!](/_posts/2019-06-24-what-is-polymorphism.md)

What was not mentioned in the polymorphism post, however, is that static polymorphism is achieved by **method overloading**, where you can rewrite the contents of a parent's function to make its own specialized behavior. 

## Encapsulation

Encapsulation is the concept that each class encapsulates, or contains, relevant variables/information within its individual unit. In addition, these variables/information are typically unaccessable outside of the class, except through getters and setters. It'll make more sense in the example.

Python doesn't really have a true way to prevent variables from being accessed. So for this example, I'll use Java.

```Java
public class Person{
    private SSN;
    private lastName;

    public string getSSN() {
        return SSN;
    }

    public string getLastName() {
        return lastName;
    }

    public void setLastName(string lastName) {
        this.lastName = lastName;
    }

    // other implementation here
}
```

In this code bit, the only way to interact the SSN and lastName of `Person` is through the getters and setters, which respectively return and set the values of the variables. If we were to create an instance object of `Person` named `Carlos`, calling `Carlos.SSN` would not be possible since it's a private variable. You can try it out for yourself what happens when that occurs.

## Abstraction

Abstraction is not necessarily represented or shown through code and is more of an _abstract_ concept. Essentially, objects hide how they work, in order to simplify their behavior to end users. 

A perfect example for this is the `print()` function in Python or any way to print messages to the console. You don't know how it works exactly, you just know what it does and how to use it. Knowing how `print()` works is unnecessary information that the user most likely wouldn't need to know, and thus the concept of abstraction is used.

Similarly, in Apple products, a lot of people just want it to "just work". In this case, Apple abstracts the inner workings of an iPhone and then people just have to learn how to use it.

Abstraction and encapsulation usually go hand in hand, since encapsulation is used to achieve abstraction. 

