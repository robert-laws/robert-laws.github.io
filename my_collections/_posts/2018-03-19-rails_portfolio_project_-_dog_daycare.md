---
layout: post
title:      "Rails Portfolio Project - Dog Daycare"
date:       2018-03-19 13:48:25 -0400
author: Robert Laws
categories: [ruby-on-rails]
tags: [ruby-on-rails, web-design, css, html]
featured-image: stock-4.jpg
---

The concept for my rails portfolio project is a dog daycare website called [Dog Daycare](https://rails-dog-daycare.herokuapp.com). <!-- more -->Think daycare for kids, except for dogs. The idea is to allow users to register for the service, add their dogs to their account, and create reservations for the dogs in their account.

I decided to take some time to get through the course material in the rails section and then I went back and reviewed all the course material again. I found that there were some concepts and techniques that didn't "sink in" on the first go-round that made a lot more sense when I reviewed them.

**Challenges**

One of the most challenging aspects of the project was creating a many-to-many relationship with a join table that also contained data other than the assoicated ids of other tables. In my case, I chose to create a table with reservation data with a many-to-many relationship with a set of available activities. The join table contained some extra data - the duration of the activity. This data made sense to include in the join table since it would vary for each reservation and for each activity associated with the reservation. The diagram shown below shows the relationships. I also had to associate the reservation with a user and with a dog, which is the whole point of having a reservation in the first place.

![Entity Relationship Diagram - Rails Project](http://www.robdlaws.com/photos/erd-rails.png)

Figuring out how to handle committing data to the database using custom methods was also challenging. The form I created for this included date and time information, checkboxes for the activities available, inputs for the duration data, and another set of form fields for creating a custom activity if user wanted something other than the listed activities.

After battling with how to update the join table with the additional data (integer values for a duration field), I settled on a solution that worked. The key for me was to determine how the form hash was structured and modifying the form fields for duration to create a duration array that held key, value pairs for the activity_id and the duration. If there was no value listed in the hash, then that told me that the duration was zero and the activity (represented by the key value) was not checked.

**Advancing my Understanding of Rails**

The project was a great opportunity to advance my understanding of Rails in areas that weren't highlighted heavily in the course material. The asset pipeline was one area I learned a lot about from researching its use. I made use of the asset pipeline to load stylesheets, a little javascript, and images.

I also felt comfortable using partials with locals in interesting ways. This was covered by the course material, so I built on that knowledge.

Rails impressed me with the amount of built-in logic and features available. The sheer amount of options within ActiveRecord along is very impressive. I was also impressed with the ways in which I could mold and shape rails to work in ways that I wanted.
