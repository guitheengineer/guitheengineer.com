---
layout: ../../layouts/BlogPost.astro
title: 3 Simple ideas for a better ReactJS
publishDate: 25 Feb 2023
name: Guilherme Samuel
value: 128
description: A few simple ideas that could greatly impact React on the short term. 
keywords: ['reactjs', 'javascript', 'frameworks']
---

React has certainly made a notable stride on the quality of our DX. Features like hooks were major breakthroughs on how we develop client side applications. It is important to note however, that even though React has matured a lot, there is still plenty of room for innovation and improvement. We're currently heading towards a merge between the client and server, which is going to be a costly shift in the things we are going to have to deal with and care about. I hope that these long term plans work out, but while we watch this progression, I have a few ideas that could impact React on the short term. 

#### 1. Bring something like a platform-agnostic Zustand     
Zustand is a simple state management library capable of covering most of our needs of small to medium size state complexity. It has an insignificant learning curve and solves the problems of using state anywhere much more gracefully than the current built-in alternative way of accomplishing it (context API, which isn't a state management library to begin with and needs to be tied to a parent component). Bringing something like this to the core would encourage the simplicity and easiness that Zustand tackles state managemente.

#### 2. Release the docs as it is, improvements can come later.     
It is been several years since the docs are outdated. Still using hooks. The perfectionism here completely outweighed the benefits of just releasing what is already good. It should be released a while ago, even if we don't have a proper landing page.

#### 3. Make the React DevTools relevant again.     
I don't know if is either because a core contributor isn't there anymore or the roadmap was completed, but this project is pretty much stale.
As we're moving towards SSR, would be useful to have some new features there to help us debug server related problems, for example:
- Possibility to go back between renders to check the differences between server and client (to better identify hydration mismatches)
- Visualize suspense data
- Check for waterfall requests
- See which components are RSC and which are client, etc


Implementing these short term ideas could have a significant impact on the React community and make our development experience even better.