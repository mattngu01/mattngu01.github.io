---
comments: true
date: "2022-01-22T00:00:00Z"
title: Trials & Tribulations of Tracking Michael Reeves' uploads
---

Hi, it's been awhile since I last wrote about something. I recently created a timer to track how long it's been since Michael Reeves last uploaded, since the time of writing it's been at least 9 months now. Of course, I love his content and it's been a real inspiration for me. 

[Here's the original explanation for the process I went through in making this website](https://www.reddit.com/r/MichaelReeves/comments/s8ztwv/comment/htn64o1/?utm_source=share&utm_medium=web2x&context=3)

[link to the website](https://michaelreeveslastuploaded.herokuapp.com/)

# Initial Approach

I pretty much had this idea on a whim when I wanted to actually calculate exactly how long it's been since Michael last uploaded (searching up the video on Youtube rounds off the time), then decided to make a shitty website about it.

I looked into the Youtube API, which coincidentally had a relevant endpoint which I could just search for videos. I found out Michael's channel ID, and so I could just query from the Youtube API the most recent videos for a specific ID. I created a quick static website (no backend) where every time the website was loaded, it'd query the Youtube API for the most recent video.

Upon creating it and sending it to a couple of friends, it turns out that Youtube is pretty strict on how many times you can actually use their API. They use some kind of convoluted quota system for it (one query is about 100 points, you get something like 8000 points per day), so if you can do quick maths, then that's not many times a user (or many users) can visit a website.

## Alternatively, here's a solution that I thought of to fix this:

Since I have a limited amount of queries, I could query the API at intervals (say, every 2 hours) and save the information in a file. This way, every user wouldn't be hitting the API when loading the site. Instead, when loading the site, it'd just read the information from the file.

# The problems with this solution

I originally had the first site hosted on Netlify, which only could host static websites. Implementing the alternative solution would require a backend (to read the information from a file, frontend can't do that).

In addition, what happens if Michael uploads in-between the intervals where I check if he uploaded? There'd be a period of time where the site wouldn't update until the next time it checks. That sucks! I want it to update right at the moment Michael uploads.

# Introducing: the actual intuitive method of doing this that I didn't think of

![Veggie tales characters with the caption: allow us to introduce ourselves](/assets/images/veggie.jpg)

What if... I could just have the same functionality as the actual Youtube app? Where I get a notification whenever the channel I'm subscribed to uploads?

Little did I know, that's what webhooks are for. That's exactly the situation it was built for. I subscribe to the Youtube API, and now it will let me know whenever Michael uploads.

So, I dig into it and that's the website that you see today. On this current iteration of the site, I save the information of Michael's last video, and read from that file I described earlier whenever someone loads the website. When I get that "notification" from Youtube, then I just save the new video information.

Now, I had to move platforms to Heroku since that supports having a backend. I also had to pay $7 dollars per month so that the website doesn't go to sleep and miss a potential notification from Youtube (I know, not a lot but that's a lot to a college student like me). Also, I have to resub every couple hours or so. Just a quirk of webhooks I guess? I'm not really an expert on web standards.

I hope you enjoyed this, this was just a silly side project that I honestly didn't think would actually get used or looked at.