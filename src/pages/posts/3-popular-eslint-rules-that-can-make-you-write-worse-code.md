---
layout: ../../layouts/BlogPost.astro
title: 3 Popular eslint rules that can make your write worse code
publishDate: 27 Apr 2023
name: Guilherme Samuel
value: 128
description: A look at rules you probably should disable
keywords: ['react', 'javascript', 'typescript']
---

Eslint is a successful tool to maintain style consistency across the codebase. The problem with it is, if you follow some rules blindly it can lead to worse DX, nonsense refactors and more verbose code. Below is a list of 3 rules that most likely you'll want to question if it's really worth it for you and your team:

##### 1. Prefer default export (from airbnb style guide)   
I did drop default exports for a year now to use only named exports and they are actually (a slightly) better option. They provide a better DX, since you'll have autocomplete. The downside can be conflicts (which can be solved using an as to rename it). Don't refactor your entire codebase just to use it, but keep in mind for the next projects that named exports has better tradeoffs.

##### 2. Consistent returns    
Keeps you from doing such a very practical pattern (early returns). Is likely that you'll end up taking some unnecessary time to refactor your code to a less readable version

##### 3. No param reassign  
There can be compelling reasons to avoid param reassigns, but this downside is minimal given the benefits of a more readable and less verbose code where you just reassign the value from your parameters.

Remember, you don't have to go through a worse experience and do nonsense refactors just to conform to some rule imposed by someone else. When a rule is enforcing you (and your team) to write less readable code, question it, and just disable it if isn't a good idea.