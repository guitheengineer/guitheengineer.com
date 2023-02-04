---
layout: ../../layouts/BlogPost.astro
title: You did css wrong
publishDate: 4 Feb 2023
name: Guilherme Samuel
value: 128
description: A contextual explanation of why and how you (and me) did css wrong for quite some time.
keywords: ['tailwind', 'react', 'css']
---


We've been writing css on separate stylesheets for a long time. This separation was already the goal of HTML in 1990, so we could apply styles globally and reuse them. This has some solid advantages, for example if you want to apply a color to every p element, then you just need to do it once. Also, if you need to change that color again for all the elements, it's only a one place change.

So... it seems it's all good, but at what point did we mess up with it?   


### Custom classes
Later on, as our designs started to get more complex and websites were transitioning from simple chunks of text to fancy layouts with buttons and links, we needed more appropriate ways to style that could fill our needs of customization.     
To solve this problem, we started using classes and... well, this is the point where we were sinking and didn't know about it.

The workflow pretty much changed from "I apply this style to this element on my website and it will look the same everywhere" to "I need to give an identifier to this specific element so I can apply certain styles to it on a separate file, which is far from where the elements are being placed".   

Which is just... Awful. Having to assign an indentifier on a file, then going to another one and editing it just to apply some specific styles is horrible, it is killing one of the most important principles we can have on our codebase, colocation.    

Things make more sense when they're close to where they belong to. Styles are connected to the markup. Think about everytime you had to change a layout structure. In order to do so you had to apply not only css, but change your html. It means they're very related to each other. Doing it on different places make things more hard to find and edit, consequentially making you way more slower.

### The need of something better
With the possibility of reusable pieces of elements (components), now it was possible to apply and maintain a certain style colocated where it makes sense, but the solution we had at the time (inline styles) had a few considerable drawbacks, most notably not having a great DX, being generally slower and enforced as a bad practice in general. 

### The evolution
It was only some years later that we had something that could beat all of this drawbacks, bring the same pros as inline styles, plus theming and more. Full utility based class names changes everything, now you have all the colocation advantages, purge of css and even more speed due to your ability to spread what's on your mind right there, at the element, with shorter utility names.

### How this applies to our web dev world? 
> I'm still trying to mature this argument so every opinion is much welcome, please comment what you think! 

Solutions like tailwind are not only a superior approach than specific css libraries, it strikes on a much more higher level, it is a better approach to styling markup which can reuse it's elements (is not specific to html or css).


### Why isn't this some common sense now?
These solutions like tailwind are getting more and more traction, but there's a huge problem for their adoption. 

They only make sense when you use it. Is easy to get into thinking is shitty by the looks of it, because it's different from what we've being doing for years. Only when you work with it (and honestly people don't try things, they just judge it first) you start to see the abism it is compared to separate style sheets. In a week or so they would realize they're much, much faster. 

Seriously, if you use tailwind for some time, try going back to separate css files, it feels so wrong even though we did it for many years.

But I think that's normal, we still have so much to progress on our dev world that we'll look into things we do today a few years later and think holy shit, that was bad.    

This is the case of using separate css as a way to style all of your components. 

