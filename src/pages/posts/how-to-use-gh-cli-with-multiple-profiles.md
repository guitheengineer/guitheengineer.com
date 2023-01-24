---
layout: ../../layouts/BlogPost.astro
title: How to use the GH CLI with multiple profiles
publishDate: 24 Jan 2023
name: Guilherme Samuel
value: 128
description: It's incredibly boring having to do a gh auth login every time you want to use a different account. We're going to learn how to solve that once for all.
keywords: ['github', 'gh', 'cli']
---

It's incredibly boring having to do a gh auth login every time you want to use a different account. Today we're going to learn how to solve that by using an extension which allows us to create multiple profiles and switch between them based on the current directory. To do so, the steps are really simple:

1. Install the extension    
`gh extension install gabe565/gh-profile`

2. Create your first profile     
`gh profile create [NAME]`

3. Login as you usually do     
`gh auth login`


Now, you have created a profile with an associated github account. You can create other ones too by following the same steps above.    

<div class="divider"></div>

If you want to switch between multiple profiles you can use `gh profile switch [NAME]`

<div class="divider"></div>

That's better, but I promised you we were going to be able to use different profiles based on the current directory. In order to achieve it, follow these steps:

1. Install and setup direnv following their official tutorial: https://direnv.net/docs/installation.html

2. Whenever you want to set a profile for the current repo, use the -l option:
`gh profile switch [NAME] -l` 

Done. Now whenever you use your terminal on the current directory, is going to be using that specific github profile. No need to keep switching anymore!

