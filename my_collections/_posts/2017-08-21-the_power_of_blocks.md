---
layout: post
title:  "The Power of Blocks"
date:   2017-08-21 14:51:44 -0400
---


Having a fairly good background in Javascript, the concept of a block in Ruby is a bit different for me. <!-- more -->Yes, Javascript does have a few features similar to blocks (anonymous functions), but I'm feeling that blocks in Ruby are something unique in many ways. I'm making progress through procedural Ruby at the moment and felt like I made a mental breakthrough getting the hang of blocks (so far...).

The coolest application of a block was something we're learning in the course content. Roughly, the idea of taking a collection that is being enumerated over and passing the individual collection items to a block is very powerful. The block can be just about anything, which means that the originating method can be set and reused - allowing the blocks to be unique given any particular requirements.

```ruby
def parse_values(array)
 i = 0
 while i < array.length
  array.each do |item|
   yield item
   i += 1
  end
 end
end

names = ["bob", "hal", "kal", "jim"]
parse_values(names) { |name| puts "Hello #{name.capitalize}, nice to meet you." }

numbers = [2, 5, 12, 23]
parse_values(numbers) { |number| puts "Includes even number #{number}" if number.even? }
```

The original method doesn't need to care about what collection is being accepted as a parameter, or what the block is doing, as long as the internal logic of the block makes sense. A method can be used to do some of the mundane iterative tasks, while the block is where the real action is happening.

I know there's more to blocks than what we've learned so far. But I am feeling good about grasping the basics of this concept so far. Also, I found a good article explaining blocks and more entitled [https://mixandgo.com/blog/mastering-ruby-blocks-in-less-than-5-minutes](Masting ruby blocks in less than 5 minutes), posted by Cezar Halmagean.

Looking forward to learning more on this topic soon!
