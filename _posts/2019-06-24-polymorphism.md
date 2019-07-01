---
layout: post
title: "What is polymorphism?"
comments: True
categories: [Programming]
date: 2019-06-24
---
Polymorphism is considered an important part of OOP (Object Oriented Programming), and understanding/using it/explaining it will definitely be useful in the future. 


##### Disclaimer: Honestly more than anything, this is for my own benefit so I am able to explain these concepts accurately and easily. 

# Definition
A quick Google search brings up this:
> the ability of an object to take up many forms

# Dynamic Polymorphism

In a class hierarchy, many objects share a common method or trait, but have different behaviors associated with each subclasses’ method or trait. 

For example, Dog and Cat are both subclasses of Animal, and both of them have the ability to make some kind of noise.  
##### Disclamer: This snippet will be in Python, which I had already written this example to contribute to a classwide study guide. The programming language we focused on was Python. 
```python
class Animal():
    def __init__(self):
        ...

    def makeNoise():
        print("Huh? What kind of animal am I")
    
class Dog(Animal):
    def __init__(self):
        ...
    
    def makeNoise():
        print("Woof")

class Cat(Animal):
    def __init__(self):
        ...

    def makeNoise():
        print("Meow?")
```

How does polymorphism apply to this? So what if we had a list of Animals, including Cats and Dogs, that we needed to make a noise. We wouldn’t need to know whether or not if the Animal was a Cat or Dog, we would just call:

```python
myDog = Dog()
mattCat = Cat()
randomAnimal = Animal()
zoo = [myDog, mattCat, randomAnimal]

for resident in zoo:
    resident.makeNoise()
```

# Static Polymorphism

Unlike Python, with other languages like Java and C# it's possible to overload methods. Which means methods that are written for having different types of parameters or a different number of parameters. This allows for different behaviors according to the functions' input. 

```java

class Professor {
    void talkTo(Student kid){
        system.out.println("Hey, what do you need help with?")
    }
    
    void talkTo(Professor acquaintance){
        system.out.println("Hey, how's it going?")
    }

    void talkTo(Student kid1, Student k2) {
        system.out.println("Hi, how can I help you two?")
    }
}

```
# Summary 
To recap, polymorphism essentially refers to the ability of objects or methods to have different behaviors according to the context. For dynamic polymorphism, it depends on what subclass the object is, whereas for static polymorphism it depends on the number and/or type of the data passed into a function. 

> But Matt, why's it called static and dynamic? 

Well, here ya go. 
**static polymorphism** - behavior is already determined at compile time since it is already set

**dynamic polymorphism** - behavior is determined at run time, depending on the object