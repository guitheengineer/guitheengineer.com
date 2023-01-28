---
layout: ../../layouts/BlogPost.astro
title: Typescript + tailwind = typewind (first impressions)
publishDate: 28 Jan 2023
name: Guilherme Samuel
value: 128
description: First impressions of a promising library that brings the typesafety of typescript with the advantages of tailwind
keywords: ['typescript', 'tailwind', 'typewind']
---



<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Introducing a library to make tailwind DX so much better...<br><br>typewind ✨<br><br>The magic of Tailwind combined with the safety of Typescript<a href="https://t.co/2EpcYlPKiJ">https://t.co/2EpcYlPKiJ</a> <a href="https://t.co/DFsoqAxX0e">pic.twitter.com/DFsoqAxX0e</a></p>&mdash; Mokshit Jain (@Mokshit06) <a href="https://twitter.com/Mokshit06/status/1617880004846825474?ref_src=twsrc%5Etfw">January 24, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

> This article is about my first impressions with the library, if you're looking to getting started typewind, read https://livecode247.com/typewind-the-magic-of-tailwind-combined-with-the-safety-of-typescript

I decided to try out this promising library by implementing it on their own website! I believe judging a tech without trying it can lead to huge misconceptions (just like everybody hated tailwind until they tried it). After finishing the refactoring I had some thoughts worth sharing it:

### Pros
1. It embeds pretty much every tailwind positive point and at some important ones like productivity, it seems to come even better. The ability to just keep typing what utilities you want - dot after dot - seems ever smoother than tailwind classes.
2. Multiple utilities for the same variants (this feels good). Tailwind doesn't support this for [very understandable reasons](https://github.com/tailwindlabs/tailwindcss/discussions/8337#discussioncomment-4036320), but with typewind this is completely functional. See a comparison below: 
    ```html
    // tailwind
    className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-100"

    // typewind
    className={tw.focus(tw.outline_none.ring_2.ring_slate_400.ring_offset_2.ring_offset_slate_100)}
    ```

3. It actually will catch some mistakes that any tailwind plugin wouldn't be able to. By converting their website, I frequently got type errors because they were actually using nonexistent utilities (bg-black-500, offset-slate-50). This is important because it will ensure we're not messing up our styles. It's easy to not see a minor tweak like a light border not being applied. 


### Cons
1. On the same way that it increases tailwind positive points, it also worsen the negative ones. Readability is even poorer than the inline utilities because there's no space between each utility. Prettier also seems to make it worse by not "inlining" them:
    ```jsx
    <p
      className={
    tw.text_xl.font_medium.text_gray_400.md(tw.text_xl).mx_auto.max_w_full.w_[
          "880px"
        ].text_center.px_4
      }
    />
    ```
2. (At the time of writing) it lack of support for relevant features, like [color opacity](https://github.com/Mokshit06/typewind/issues/11) and the [important modifier](https://github.com/Mokshit06/typewind/issues/13)
3. A little bit unfair to say, since the library didn't reach a major release, but is not tested, prone to bugs and very probable that lacks support for a lot of features (we didn't try yet to discover). 


### Conclusion

Typewind has a lot of potential and I believe it will be successful if they figure out how to keep the advantages of Tailwind while minimizing the limitations of their approach (which use objects and properties instead of strings).
<div class="divider"></div>


The crucial positive point for using this library in the future will be type safety. As I said on the pros, it's actually more common than we think to have nonexistent utilities being applied.

<div class="divider"></div>

What is your opinion about it? Thanks for reading and see you next time :)