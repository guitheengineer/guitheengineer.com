---
layout: ../../layouts/BlogPost.astro
title: ChatGPT is a regex god
publishDate: 11 Mar 2023
name: Guilherme Samuel
value: 128
description: Generating regular expressions is one of the things ChatGPT is almost ready to take over.
keywords: ['AI/ML', 'ChatGPT', 'REGEX']
---



ChatGPT can give you statements that either:
1. Sounds very truthful, but has something wrong with it
2. Is surprisingly good and accurate 

With Regex questions, it seems to weigh way more on the latter.

![image](https://i.ibb.co/vwq3Lkv/image.png)

A few examples:

1. Match a Reddit post URL
![image](https://i.ibb.co/vwJYx7N/image.png)

2. Match a Twitter reply 
![image](https://i.ibb.co/1s6f2mX/image.png)

3. Match a document format from a country
![image](https://i.ibb.co/VQmK4pg/image.png)

4. Match any email address that ends with "gmail.com" and contains a plus  sign (+) followed by any combination of alphanumeric characters before  the @ symbol
![image](https://i.ibb.co/mHyX7ZN/image.png)


5. Match any phone number in the format (XXX) XXX-XXXX where the first three digits cannot be 555
![image](https://i.ibb.co/7G88n7x/image.png)


> Be careful, it's prone to mistakes, so it's always a good idea to test it on an app like https://regex101.com/

Overall, I feel like most of the generated regular expressions are already going to be good enough to save some valuable minutes of your life.