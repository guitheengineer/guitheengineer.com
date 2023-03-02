---
layout: ../../layouts/BlogPost.astro
title: 3 Simple ideas for a better ReactJS
publishDate: 25 Feb 2023
name: Guilherme Samuel
value: 128
description: Thoughts on improving an already very well established library
keywords: ['reactjs', 'javascript', 'frameworks']
---

#### 1. Bring something like a platform-agnostic Zustand     
It has an insignificant learning curve and solves the problems of using state anywhere much more gracefully than the current built-in alternative way of accomplishing it (context API, which isn't a state management library to begin with and needs to be tied to a parent component).

#### 2. Release the docs as it is, improvements can come later.     
The perfectionism completely outweighed the benefits of just releasing what is already good. It should be released a while ago, even without a proper landing page.

#### 3. Make the React DevTools relevant again.     
As we're moving towards SSR, would be useful to have some new features there to help us debug server related problems, for example:
- Possibility to go back between renders to check the differences between server and client (to better identify hydration mismatches)
- Visualize suspense data
- Check for waterfalls
- See which components are RSC and which are client, etc