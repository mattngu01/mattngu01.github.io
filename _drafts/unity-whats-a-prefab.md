---
layout: post
title: "Unity: What's a prefab?"
date: 2019-02-04
---

When using Unity, there is probably some kind of asset or game object that needs to be replicated to other scenes, or even within the same scene. 

You can just _copy-paste_ it, _right_?

No. Bad. Stop right there.

This would probably be okay to use on a very small scale, but still would create more work than you need to. Copy-pasting these objects would create its own _individual_ object. What happens if you want to implement a change that affects all of those replicated objects? That means you'd have to implement the change one by one to each object.

Prefabs make it significantly easier to do this. It's essentially a template for whatever object you want to replicate, holding all its properties and settings. 

So if you wanted to change a specific value or setting within the replicated objects, then changing it within the prefab would apply it to all existing objects created from the prefab.

Let's say you created a Mario clone, and you have a prefab for the red flag marking the end of the level. What if you wanted to change the flag's color to green? 

If you had already created the flag objects in each level from the prefab, then you'd only have to change the color of the flag prefab, which in turn would make all the other flags turn blue.

But what if you wanted to change the flag's color to blue on the last level? 

You can still do that! Making a change within the individual scene wouldn't affect the prefab or other levels' flags. 

So for any replicated object across scenes or within a scene, it's always good to create a prefab for it to make your life significantly easier.