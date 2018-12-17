---
layout: post
title:  "Fun with my CLI app project"
date:   2017-09-23 16:48:05 +0000
categories: [sinatra]
tags: [sinatra]
---


First of all, the video by Avi about the Daily Deal, and other videos, helped fill in some of the gaps I was having with this project. <!-- more -->I felt confident about putting together the actual code part of the project, the CLI, the Scraper, and the List/Data view object. I was shakier about all this Rubygem stuff. The video helped orient me and I was able to sort out the things not covered in the video. It was really helpful moving me forward.

As for the project itself. I felt really good about putting it together. I think I've found with the labs, especially some of the more advanced ones, that I was struggling. It felt like trying to put together a jig-saw puzzle without really knowing much about the peieces or what the final product was going to be. That said, the labs are very useful to introduce and refine knowledge of code and coding-concepts. But I like this Cli project much better because we get a chance to work through an app from start to finish. It allows for creativity and for the ability to think things through (and solve problems that come up along the way) with an added degree of investment on my part.

---

My project - Discover Dog Breeds Cli App - [RubyGem](https://rubygems.org/gems/discover-dog-breeds) and [GitHub repository](https://github.com/robert-laws/discover-dog-breeds-cli-app)

The project I undertook was about dogs. Now, I'm a dog owner, so my app about dog breeds was fun to research. I have two Westie dogs (Flurry pictured below), so that made the topic of my app more interesting for me. So, I searched for websites that had information about dogs and where it was possible to scrape data - meaning the website had to include some consistent logic to its structure and repeated data about dogs in a standard and predictable way.

{% capture post_image %}http://westieapp.com/img/westie_dog.JPG{% endcapture %}
{% include post-image.html max-width=40 file=post_image caption="Westie Dog" %}

The website I decided to use was the [American Kennel Club's website](http://www.akc.org/). There were, however, a few caveats with the website. It's possible to search for dog breeds based on the letter of an alphabet, but some letters had no dogs listed (think Q and Z). Also, it seems that detailed breed information wasn't always available for a few breeds (think Jindo here), so I would have to account for that in my app.

The approach I took included sketching out the idea and structure of my app on paper before touching the computer. I wrote all the classes, properties, and methods I thought I would be using, inlcuding instance variables versus class variables. After I had worked out in my mind what I thought I would be doing, I began coding. My approach was to code each class independently. For the methods and variables that would depend on other classes, I used filler data/content to fake their existence at the beginning. I made sure that I could get each class working independently before I attempted to make them work interactively. Thankfully, this deliberate approach helped me to isolate tasks and problems before adding the complexity of interaction between classes. I like this approach to coding since I can build up functionality of my apps bit by bit and feel confident that I've got a handle on the process.

I have to admit, I actually built my app twice, which perhaps counts as a personal re-factoring (before the re-factoring that will likely come with the code review). This was good because I had discovered a bug the first go-around that I didn't solve. But I think I got it sorted out on my second version of the app.

My approach to the project was that I had three classes. The CLI class, that was the controller (as Avi mentioned in his video walkthrough) and then I had the Scraper class that was responsible for getting information from the www.akc.org wesite, and the Dog class that was responsible for describing an individual dog breed. I did not want any "scraping" type behavior to happen in the CLI or Dog class, so I contained it only to the Scrape class and returned array data, not Nokogiri elements, from my method calls in the Scrape class (that were passed into the CLI class). Also, I did not want to do any dog breed creation in my CLI app, all that behavior only happens in my Dog class. And neither my Scrape or Dog class do any CLI type things (think ``puts``). I think this is an important design rule. I do feel that my code in the CLI, especially when I'm dealing with method calls that return empty arrays, may not be the most efficient way to handle that situation. I originally had used some instance variables in my CLI class to pass around data, but got a bit nervous about doing that since my main method call re-ran depending on the user's interaction with the app. I was nervous that I would leave some instance variables sitting around from previous method calls that might collide with current method calls. I probably could work my way back to using instance variables, but I'm not 100% sure if it is even a good design pattern in this case.

Finally, I added a class variable and method in my Dog class to collect all the instances of the Dog class I create as the user interacts with the app. It was not necessary to fulfill the requirements of the app, but I thought that since we learned about it, I might as well use the knowledge to enhance the app. I utilize the class variable/method to return a list of all the dog breeds selected and viewed by the user before they exit the app, in case they want to review what they had seen.

I think this project was very good because it was challenging, but well within the skills we've developed and been practicing in the OO Ruby seciton. I also felt that the project was totally manageable, not asking the student to do more than was possible at this point of the course. The best part was the freedom it gave to explore, plan, and work out how to develop, test, and deploy the app. All really useful experience. At the end, I was fairly pleased with the results. Looking forward to continuing to move foward to more challenges.
