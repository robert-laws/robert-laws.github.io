---
title: "Introduction"
process_order: 1
---
## Introduction

As part of the [Flatiron School](https://flatironschool.com/) curriculum, I am producing small, self-contained projects that highlight core skills and solutions to common web development challenges. This project - [Restaurant Explorer](https://rails-js-restaurant-explorer.herokuapp.com/) - aims to build a Rails back-end, serialize data as json, and use a javascript front-end to present it dynamically to a user.

#### The Challenge

There were a few challenges to this project. First, I wanted to build on my previous Rails skills. Although the project requirements didn't specify things like secure user accounts, complex data relationships, validation, or named scopes, I wanted to take the opportunity to reinforce those areas in this project. Next, I wanted my project to be functional and attractive - which meant not skipping on the design. I got an opportunity to use the asset pipeline to load Bootstrap 4 and write a little bit of Sass to spruce up the look & feel of my project. Finally, the main challenge of the project was to walk from Rails to Javascript via the serialization process using Active Model Serializers.

#### The Solution

The result for my portfolio project is for website that allows users to explorer and comment on a set of restaurants - in the mold of a Yelp-type website. The website allows users to view detailed information about individual restaurants and page backwards and forwards through the list of all restaurants. Finally, the detail page for an individual restaurant includes user comments associated with each restaurant. A signed-in user can add new comments - displayed immediately upon submission.

Users can sign-up for a new account and log in and out with an existing account. Only signed in users are able to add new comments, but any visitors can view existing comments made by other users.

Additional features include the incorporation of the [Bootstrap 4](https://getbootstrap.com/) front-end component library, [Font-Awesome](https://fontawesome.com/) icons, and royalty free images from [Pexels.com](https://www.pexels.com/).

![Restaurant Explorer - Project Website](../../assets/img/project/restaurant-home-page.png){:class="project-detail-image--full"}
{:class="project-detail-container"}

Restaurant Explorer - Project Website
{:class="project-detail-caption"}

#### Requirements

The following requirements formed the baseline of functionality for the initial release of the project.

* Must have a Rails Backend
* Makes use of ES6 features
* Must translate the JSON responses into Javascript Model Objects
* Must render at least one index page via JavaScript and an Active Model Serialization JSON Backend
* Must render at least one show page via JavaScript and an Active Model Serialization JSON Backend
* Your Rails application must reveal at least one has-many relationship through JSON that is then rendered to the page
* Must use your Rails application to render a form for creating a resource that is submitted dynamically through JavaScript
* At least one of the JS Model Objects must have a method on the prototype