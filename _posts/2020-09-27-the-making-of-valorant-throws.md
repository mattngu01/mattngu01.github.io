---
layout: post
title: "The making of Valorant Throws"
date: 2020-09-27
---

This will give an insight into how I came to solve a problem I was having as of late.

# The Problem
[Valorant](playvalorant.com) came out and I was absolutely obsessed with it. It's a 5v5 tactical shooter similar to Counter-Strike: Global Offensive (or CS:GO for short). 

Valorant, like CS:GO, has the capacity to throw grenades across the map to set up strategies and gain an advantage by blocking vision or damaging enemies. The major difference was that in Valorant, each character (otherwise called agents) each had their own unique abilities - everyone in CS:GO had access to the same types of grenades. 

However, for Valorant there wasn't a good place to find tutorials on how to do these setups - the main ways were to browse through Reddit or watch Youtube videos. This would lead to a ton of bookmarks and no one really likes that.

So I wanted to create a website that allowed for community input and would be a center for learning these setups or being a reference. 

Specifically, here's what I wanted out of the website:
- as I emphasized before, allow users to submit their own lineups
- use gif / videos to portray how to do these, instead of using static images
- filtering by agent / map / ability

# Solution

I really liked the card-based look such as in <csgonades.com>, so I took a lot of inspiration from them. 

Also, a couple of friends of mine suggested to take a look at the [Blitz](blitz.gg) app. They also use a card layout, but I really didn't like the way their lineups were titled or how the information was portrayed.

![image of blitz.gg card with comments like this title is unreadable! who would do this...](/assets/images/blitzgg.jpg)

I'm Not Really Sure How People Can Read Posts Like This.

## Tech Stack

First thing that came to my mind on what to use to implement this was Flask or Django. I had used Flask briefly before in a hackathon and it seemed pretty simple to use. I wanted to stick with Python because I was entering a new area of programming and I wanted to start quickly on this project.

From looking online on comparisons on which to use, Django was touted as the framework to use in my situation since it generally "held your hand" more by providing a multitude of features such as: 
- built-in Object Relation Mapping (ORM) and provided support for databases out of the box; I knew that I would have to be storing data somewhere and this wouldn't be just a single page app
- forms -> I had no idea how to make forms, I figured Django's class-based views would help me out here

This isn't a comprehensive list of the pros of Django at all, but this is what caught my eye. Mainly, the built-in ORM was the biggest feature that appealed to me. At the time, I didn't want to have to worry about how to deal with the database other than configuring it.

As for the front-end, it was pretty simple. I didn't really think I would have the need for a dynamic page, so just HTML and CSS would do the trick. Later, I would end up using Javascript for some very small "dynamicness" on a page, but that's about it. 

In terms of how I was going to portray the gif / video of the lineup, I saw on [csgonades](csgonades.com) that it uses gfycat to display gifs. A quick google search for "gfycat iframe" gave me the [documentation](https://developers.gfycat.com/iframe/). Looking closer into the process of uploading a gif, gfycat allows you to add subtitles to video and has a very basic editor. I found this useful in providing more context/information when trying to demonstrate a lineup.

# Learning from this project

This is mainly for myself and to articulate what I have learned.

## Hidden inputs on forms
I had a problem with trying to save previous query parameters on a filter. I was using query parameters to filter through the different lineups, however at that moment I could only have one filter applied at a time.

I learned by using hidden fields, you could pre-populate those fields with your previous query parameters. In doing so, when you submit the "form" to filter out the lineups, it would save those hidden fields along with the additional filters applied.

## MVT structure, extended to MVC structure
On this, it's more just like working with these structures and knowing where to look if I wanted something done.

Normally in MVC (Model-View-Controller), the request to see the details of a object is created through the controller. The controller receives input and passes it to the model. The controller has the logic to retrieve the details of the object. The model manages and returns the data. Then, the object details are rendered in the view. 

In Django however, it handles the logic in retrieving the object details where normally in MVC you would have to write it on your own.

## Relationships in Databases

Stuff like foreign keys, what fields are in a model, etc.

# Future Plans

At this point, the project hasn't really gotten a lot of traction in the Valorant community. Have lost a bit of motivation to keep making features for this when no one really uses it and lately I haven't been playing Valorant as much nor as competitively. 

But if I were to be working on this again I would add:
- an interactive map like with [blitz](https://blitz.gg/valorant/maps/ascent)
- a system to personally review and accept/reject lineups people post, instead of automatically letting people post their lineups (which may lead to redundancies or loss of quality in lineups)

All in all, it was a great project to keep myself occupied in with the beginning of lockdown. 