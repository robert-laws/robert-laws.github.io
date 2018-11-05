---
layout: post
title:      "Sinatra Portfolio Project - Mountains to Climb"
date:       2017-11-13 16:26:00 +0000
permalink:  sinatra_portfolio_project_-_mountains_to_climb
---


The sinatra section of the curriculum was an exciting change from the CLI section. I'm not saying that the CLI section wasn't important, in fact it might be the most important because of the fundamental skills we learn in it. But it was somewhat abstract and the CLI project did not have a very interesting UI - by definition.

Moving onto Sinatra, it feels like we moved from toddlers just beginning to walk into a teenager running. I felt that the way that the concepts of MVC application development was taught really well. I had tried to grasp the concept of MVC before joining the Flatiron School, but never really got it. With the Sinatra section, it made a lot of sense to me and I really felt comfortable working with the different components and interactions. Having the tools like ``shotgun`` and ``tux`` made a big difference.

The project is called **Euro Mountaineering** and is located at my [GitHub Repo for the Project](https://github.com/robert-laws/portfolio-project-sinatra-euro-mountaineering). I approached the project by focusing on the data model to begin the process. I even designed an Entity Relationship Diagram to visualize the database and models.

![Project Entity Relationship Diagram](https://github.com/robert-laws/portfolio-project-sinatra-euro-mountaineering/raw/master/public/images/erd_sinatra_project.jpg)

This helped me understand how the one-to-many and many-to-many relationships worked out. At first, I thought my table with the mountains was going to be the most important table, but it turned out that it served as mainly a lookup-table. The main table was the hiker_mountains table that connected my hikers to the mountains they could climb. As I progressed in the project I had to rethink the data model a bit and ended up creating 10 migrations to adjust my database as I progressed through the project.

I also wanted to take advantage of the fact that we would be able to create a web-based experience for the user and make a visually appealing user interface. This was fun because I'm trying to learn more about HTML5 and I used the portfolio project as an opportunity to test out some concepts. 

I was pleased to be able to put together a fully-functional application that met all specifications of the project. As with all projects, there were some extra features I was considering to implement, but decided not do too much since projects can go on and on if you let them. In the end, I was happy with the results of my project.
