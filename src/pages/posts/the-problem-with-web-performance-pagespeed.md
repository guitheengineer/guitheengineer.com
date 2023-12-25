---
layout: ../../layouts/BlogPost.astro
title: The problem with web performance and pagespeed
publishDate: 25 Dec 2023
name: Guilherme Samuel
value: 128
description: Why and how chasing web performance improvements can actually harm your UX/DX
keywords: ['performance', 'pagespeed', 'seo']
---

The project you worked for a year is finally being launched, most of the bugs were patched. You're wondering what's next...

Planning comes and here we go:

The client wants perf improvements, more specifically, increase their score on pagespeed (since they heard this also impacts SEO)

Your website currently scores a "horrible" 40 (in the eyes of the client), even though the user experience is actually not bad.


Without any context the client throws you a number which they think its ideal for the score.

- Has to be at least 90

But, fine, you say... In the pagespeed report there's a lot of opportunities to tackle on, plus you're unexperienced with it since you never did pagespeed before, so you think, well if I tackle all the opportunities we'll probably reach that number

Let's stop right here, there are a bunch of problems with this already

First, lets talk about the main issue, expectations.

The expectations should be realistic, so they need to come from the developer, not the stakeholder. The client can analyze competitors and define an imaginary good score, but they have no idea about what's possible to do technically to reach that number

Also to be more concrete, what I mean on having realistic expectations is: they should be based on what the app consists of. Is going to be incredibly hard to reach 90 if the client itself decided to have a giant high quality hero background image. (Not putting away the fact that is also our job as developers to communicate clearly the downsides of those decisions performance wise)

The second issue, reaching the expectations

Suppose you continued on the pagespeed ticket and you successfully did go through the easiest actions, because of that you reached 75 points in your score. Now you're trying to get the last 25 points which the client wants

The last dozen of points is usually very not worth it to be chasing for. Is too much time and effort invested to research and try stuff that won't work and even if it does is going to be at some cost 

That cost can be the complexity of the codebase is getting raised substantially to deal with all the performance improvements, but can also be the user experience itself. There's a fine line where "having a better pagespeed score means your website is faster" versus "pursuing better pagespeed scores will actually hurt your website's user experience"

Pagespeed is far from perfect, proof is they update their metrics frequently to fix previous ways of measure. there are still a lot of issues with it, for example a common way to get rid of some js is to lazy load things, but depending on what you choose to lazy load, you can actually turn the experience worse for users by making adding a delay to the feature. It's going to work against you if the feature that's lazy loaded is very commonly used, since instead of having it ready for the user, it will have to load the interaction starts with it. 

The entire pagespeed philosophy is not positive, resuming the entire user experience of an app to a number based on its resources can actually cause more harm for developers that need to reach higher scores, but also for users which are going to be affected by those changes.

There's still a lot of work to do to make pagespeed something that really reflects the ux.

Too bad I'm just pointing to the problem, not working on the solution for it, yet