---
layout: ../../layouts/BlogPost.astro
title: Sorry, but everything is a tradeoff
publishDate: 5 Feb 2023
name: Guilherme Samuel
value: 128
description: Thoughts seeking opening your mind towards a less biased, more rational approach to software development.
draft: true
keywords: ['react', '']
---

You just used a library, it's now your favorite one, it worked well for that project.

Now you want to use it for every single project from now on...

Stop.

Take a step back and analyze each pros and cons considering the new needs. 

Technologies were created to solve specific problems, your Astro blog project was successful, but that doesn't mean you'll have the same results for a heavy dashboard (probably not, astro itself is focused on content heavy websites).

Your zustand store worked very well for managing your theme. It doesn't mean you should also use it for on your new event managing app with large amounts of state that will have some complex logic to update it (redux, yes, may be a more appropriate option) 

There's no silver bullet in our field. 
(except Tailwind, use it everywhere you can because is that good :kappa:)

> Disclaimer: It's important to say that stack choices aren't always made seeking the most appropriate tech stack for the project, but it also considers your team skills.