---
layout: post
title: "Resizing with Unity UI"
date: 2019-02-11
---
In this post, we'll be covering issues with UI in Unity when dealing with multiple screen sizes.

# Disclaimer: this is assuming you know some basics of Unity UI components. I am also not an expert in Unity and trying to understand more about Unity UI myself! This is also from a 2D game viewpoint, which in 3D UI is something I'm unfamiliar with.

So you've set up your UI and everything, and it looks fine and dandy. Well, on your computer at least.

![alt text](/assets/images/something.jpg "Looks great to me!")
##### This is the main menu for the game we've been working on, SciGuy v. Wizkid!

But let's go to the game window. You can select different aspect ratios, simulating the different screens that your game would run on. This is something that should be solved quickly, if your other team members will also be working on your UI / scenes. 

![alt text](/assets/images/circle-the-display-panel.jpg)
##### You can also create custom resolutions within this menu to test out standard resolutions

Let's change the resolution. Here, you can see that the buttons aren't even in the canvas. That's because of the *anchors* of the component are at the center of the canvas. Anchors are points of reference for the component. A component will be placed in reference to the distance laterally and vertically (so x & y) from the anchor. 

For example, let's say a component is a 800 pixels up from the center with the current screen resolution being 1000x1000. The screen resolution changes such that the screen becomes shorter by 400 pixels. Now, the component will either be cut off or not visible at all. 

![alt text](/assets/images/two-examples-with-component-inside-and-outside-canvas)

