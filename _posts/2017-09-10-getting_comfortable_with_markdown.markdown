---
layout: post
title:  "Getting Comfortable with Markdown"
date:   2017-09-10 13:16:59 -0400
---


So, this blog post utilizes Markdown. I first got introduced to Markdown, probably like many others, when using GitHub.

![GitHub](https://www.socialtalent.co/wp-content/uploads/2015/03/github-logo.jpg)

At first, I was cusious about the README.md file. I just thought it was a regular readme file, just like a text file. But I was wrong, it was something really impressive.

In my mind, **Markdown** was meant to help write for the web fast, but still include most of the stylistic, structural, and media features we like to add in HTML. One of the most attractive features of **Markdown** that I've heard highlighted by others is that it helps keep writers within the flow of writing, without needing to break from the keyboard to click on a formatting button, etc.

# Starting with Standard Markdown

Most of what people do when writing Markdown is accomplished with _Standard Markdown_, which allows users to do things like render:

* Headings
* Text formatting
* Images
* Lists
* Quotes

Another major feature that coders especially love is the ability to write code snippets and give their code specialized syntax highlighting. For example, I just completed the Ruby OO Inheritance Lab. Some of what I learned looks like this:

    class Student < User

This is an awesome feature, and makes writing and especially reading code easier.

# Flavors of Markdown

Beyond simple Standard Markdown, there are some other flavors of **Markdown** that have more features than are available in the standard version. Two of the most popular flavors include [GitHub](https://guides.github.com/features/mastering-markdown/) and [Ghost](https://help.ghost.org/hc/en-us/articles/224410728-Markdown-Guide).

Markdown Flavor | Example of Extra Feature
------------ | -------------
GitHub | Tables
Ghost | Highlights

Also, code syntax highlighting is an advanced feature, shown at work with Ruby here.

```ruby
class User
 attr_accessor :first_name, :last_name
	
 def initialize(first_name, last_name)
  @first_name = first_name
  @last_name = last_name
 end
end

class Student < User
 def declare_major(subject)
  puts "#{@first_name.capitalize} #{@last_name.capitalize} is majoring in #{subject}."
 end
end

hal = Student.new("hal", "hope")
hal.declare_major("biology")

# > Hal Hope would like to major in biology.
```

# Time Needed to Learn Markdown

A great thing about **Markdown** is that it doesn't take too long to learn it. Mostly, the challenge of **Markdown** isn't the syntax, but just practicing it regularly to remember all the features. For modern web development, knowing how to write good documentation - often a key feature of code that's uploaded to GitHub - requires having a solid understanding and control of **Markdown** so that users who come to read about how your code works will have an easy time reading nicely styled and helpful documentation text.

I recommend spending some time to learn **Markdown** since it is easy to use and can make ordinary code documentation text look amazing. :smile:
