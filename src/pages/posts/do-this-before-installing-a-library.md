---
layout: ../../layouts/BlogPost.astro
title: Do this before installing a library
publishDate: 15 Jan 2023
name: Guilherme Samuel
value: 128
description: 5 things to do in order to make sure you're making the right choice when installing a lib.
keywords: ['AI/ML', 'ChatGPT', 'REGEX']
---

Choosing a library may feel intimidating when your decision is going to have a big impact on the features going to be developed for the next few weeks, months or years. You can have a great choice, good enough that that nobody actually complains about it, or it can be such a bottleneck that causes headaches for every dev for months until is replaced. Either way, it needs to be justified to your teammates as a great choice. This short article will help you by breaking down a successful process to choose a library based on 5 steps.

1. Size
Depending on how performant your app needs to be, check the JS size accordingly. You can do it by using the "Import Cost" extension, which will show the total. The reason why this is first is because JS is an expensive resource for the browser and every lib adds some kbs that may impact a page's performance right away, so check its js kb quantity before adding.

Be mindful that the choice has to be made in comparison with alternatives of same goal, and not between entirely different libraries. It's impossible for a heavy component library to have the same JS amount as a small state management lib.

Essentially, be careful to not miss this step and end up having to change the entire implementation later on because when trying to do performance improvements, the team discovered the library's bundle size is making a bad performance impact.


2. Popularity
When a library is popular it means there's a higher probability that other devs used it before, which is something exceptional since it removes a lot of tech debt (this is actually one of the main strengths of libraries like react), the fact that any FE dev probably knows it well means they can pick up and start being productive with it instantaneously, instead of first making mistakes, learning and then a couple months later writing good code with it.


3. Common and popular issues
Check for issues with a lot of comments. Sometimes a library is performant, popular, but has huge holes that everybody discusses it (most rich text libs have these kind of problems). So what happens is you install the library, develop with it, but at some point it has a bug or is missing a crucial feature that you absolutely need to finish a ticket, then you're blocked and lost all of those hours. Go on github, sort the issues by number of comments and make sure the issues are specific enough to not be a problem of yours later.

4. Modularity
This one is related to the above, because depending on type of customization you'll need based on the feature you're developing, is a good idea to check if in worst case the scenario needed is still achievable, otherwise you'll land at the same problem. For example, if you're using React, sometimes is better to install the JS library and do the porting yourself than installing the React wrapper that someone built for it, because with the JS lib you'll probably have more work to do, but every API is going to be available. That's not the case with a wrapper, since it will only expose the APIs the author think its useful. 

5. Level of activity 
A good sign of a healthy library is how active the maintainers are. When the community is proactive at fixing any issues frequently, everyone is confident that even if a critical issue arises, it will be fixed soon enough. So that's absolutely essential, we don't want to have or own fork and start to bugfix the library on our own.
Caution with a lib that is inactive for years, if you have any unique issues, there's not going to be anyone to rescue you


I hope these steps get you in the right direction. I've not followed all those before the drawbacks were enough for me to write this article, but by making those mistakes, I may have saved you and your team of falling into the same problems :v