---
layout: ../../layouts/BlogPost.astro
title: Biggest groundbreaking solutions in the React ecosystem
publishDate: 19 Mar 2023
name: Guilherme Samuel
value: 128
description: A look at the most valuable innovations that were brought by our awesome open source community.
keywords: ['react', 'javascript', 'typescript']
---

It's not something unknown that one of React biggest strengths it is ecosystem. It's so powerful, that although React could (unknowingly) have big pain points, they were solved gracefully by other libraries. This article attempts to acknowledge each groundbreaking solution.


### Data fetching with React query (tanstack query)
Before it, we tried to pretty much think and imitate lifecycles with hooks (because we carried this mental model from classes), leading to dirty effects, a lot of repeated state everywhere, waterfalls and bad implementations to handle complex problems like caching. 

RQ pretty much erased a lot of app's state, with [powerful defaults](https://tanstack.com/query/v5/docs/react/guides/important-defaults) that already improved our apps UX (by refetching on window focus, having retries when requests fail or when the user's internet reconnects) and abstracting a lot of work we would have to do in every single app.

I think this is by far the library that aggregated the most value on the React community and it should be the default to fetching data on the client (while `use` isn't ready yet). On the server we should be using what the framework provides.


### State across components with Zustand (previously Redux)
Initially, we had some problems to solve related to state management. One of the most popular was prop drilling, which in order to solve it we started using a huge bloated library with a lot of boilerplate (Redux). We needed a stick and they gave us a nuclear bomb. 

Eventually, Redux got much better when toolkit came, and still is a great solution today, but for most apps, state management can be solved with a simpler approach. People started migrating to the built-in solution Context API and what happened was interesting, it started to be overused and even having a negative impact as we were reinventing a worse implementation of RTK itself. 

This is where this gap was filled nicely because with Zustand, we now have a tiny, but flexible and scalable API. Creating stores, updating and reading state is much much easier nowadays.


### Forms with React hook form (previously Formik)
Everyday a new React dev complains about how difficult is building forms using React compared to other libraries. This completely changed for the better with hook based approaches, initially with formik (that sadly has performance problems), but now with an even better API and performance focused solution, React hook form, killed our needs with easy to build validations, transformations, etc. It cover a lot of use cases and can scale very well (personally I've saved a lot of hours by reusing a form and input components that have been registered using useFormContext).


### SSR with NextJS/Remix
For years we developed rich client side apps, to only realize that we were shipping a lot of JS and having sub-optimal SEO as HTML wasn't being printed for the crawler. 

This only became obvious when NextJS came as an abstraction that was pretty much focused on generating content as static as possible, eventually leading to generally faster React apps.

It was just too much work to build a SSR app yourself, so having a framework which already save us hundreds of hours by giving us the ability to pre-render content ahead of time showed up to have a great UX in the end, but also led the community to a shift from client side only focused apps to using the server to save as much JS as we can. This shift is still happening these days and only in a few years we will realize if it's all worth it. 


### What's next?

The future of React is exciting and unexpected, as there are problems we don't fully acknowledge yet, which still can not only be solved by the core team, but by our awesome community as well. Either way is always a great option to think deeply about the pain points we encounter in every new project, so we can start digging deeper and hopefully find new solutions.