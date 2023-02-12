---
layout: ../../layouts/BlogPost.astro
title: Better way to think when creating components
publishDate: 11 Feb 2023
name: Guilherme Samuel
value: 128
description: This advice will unblock you and avoid future pitfalls when building your components.
keywords: ['react', 'javascript', 'typescript']
---

When in doubt of how your component should look like and what it needs to support, start by how you would consume it. A few examples:

A dropdown which will receive a title and the content (which should be able to also receive JSX). An icon will be optional:    
```jsx
<Dropdown title="My title" content={<p>My content</p>} />

<Dropdown icon={<MyIcon />} title="My title" content={<p>My content</p>} />
// Now you know you need to accept an optional icon (ReactNode), a title string and the content (which is also a ReactNode)
```
A customizable flexible card with a lot of different variations:    
```jsx
<Card>
  <Card.IconWrapper>
    <MyIcon />
  </Card.IconWrapper>
  <Card.Title>My title</Card.Title>
  <Card.Content>My content</Card.Content>
</Card>

<Card>
  <Card.Title>My title</Card.Title>
  <Card.Content>My content</Card.Content>
  <Card.IconWrapper>
    <MyIcon />
  </Card.IconWrapper>
</Card>

<Card>
  <Card.Title>My title</Card.Title>
  <Card.Content>My content</Card.Content>
</Card>
// Now you know you'll need to create separate components (title, content, iconwrapper) and assign to the main card.
```
A sidebar that I can just pass a structured data to it:    
```jsx
<Sidebar
  items={[
    {
      name: "Home",
      icon: HomeIcon,
      link: '/',
    },
    {
      name: "About us",
      icon: AboutUsIcon,
      link: '/about-us',
    },
    {
      name: "Terms and conditions",
      icon: TermsIcon,
      link: '/terms',
    },
  ]}
/>

// Now you know you'll need an items prop, which you'll loop for each item and render the name, icon and pass the link as a href.
```
Instead of starting with the solution right away, a better approach may be starting by the use cases, which you will know more carefully what you need to build in order to support your needs.