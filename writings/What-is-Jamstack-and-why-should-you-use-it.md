---
title: "What is Jamstack and why should you use it?"
date: "2020-07-08"
og:
  description: "Learn what Jamstack really means and what are the benefits of Jamstack over traditional solutions like running your own server for back-end using the likes of NodeJS or Ruby on Rails.(updated 2020)."
author:
  twitter: "RajeevSinghN"
  name: "Rajeev Singh Naruka"
---

> Learn what Jamstack really means and what are the benefits of Jamstack over traditional solutions like running your own server for back-end using the likes of NodeJS or Ruby on Rails.

![https://images.unsplash.com/photo-1582732600553-b848eb0c35df?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ](https://images.unsplash.com/photo-1582732600553-b848eb0c35df?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ)

# Why we need Jamstack?

If you have ever created a full-stack web-app you would be familiar with the complexity of the project. There are three major components in it -

1. **Client-side implementation:** Application your users face. It can be a simple create-react-app or a WordPress site or a simple HTML site.

2. **Server-side implementation:** Your server for creating API endpoints or dealing with any backend processing using server-side solutions like NodeJS or Ruby or Rail.

3. **Maintaining Database:** Maintaining a database to your essential data which you can later manipulate using your backend.

Problems you face -

1. **Web-server has to run all the time.** For example, if you have a backend server in NodeJS you will have to rent an EC2 AWS Linux instance to run that server continuously.

2. **Slow website** when compared to Jamstack sites.

3. **Vulnerable to attacks** due to exposed API endpoints.

4. **Expensive to scale** as you will need more servers to scale it up.

![legacy-web.png](/og/legacy-web.png)

_legacy web architecture⬆_

Jamstack simplifies everything 👇 -

![jamstack-architecture.png](/og/jamstack-architecture.png)

Jamstack offers the simplicity of creating a dynamic website. No more maintaining a server and a frontend application. It offers everything at the same place. Let's learn how.

# What is Jamstack?

> JAM in Jamstack stands for - **JAMstack stands for JavaScript, APIs, and Markup.** These can be termed as the basic building blocks of any Jamstack application, however, this is not an exhaustive list of components in a Jamstack application.

Although Jamstack has the word stack in it, it's definition is bound to a particular tech stack. It's more about the the architecture or shall we say, philosophy -

Legacy websites are slow, clunky, and highly complex. A jamstack website, in comparison, is highly modular, scalable , delivers better performance, higher security, lower cost of scaling, and better developer experience.

## How to identify a Jamstack website?

Here are two possible methods to identify whether a website is using Jamstack architecture -

1. They **sometimes** use static site generators like - Next, Gatsby, Nuxt, Jekyll or Hugo. Focus on word sometimes.

2. Most important - they don't maintain/depend on a web-server.

# Why you should use Jamstack?

It's hard to change the status-quo but Jamstack architecture is doing it, one-site at a time. Here is why people prefer a Jamstack architecture over legacy web architecture -

## Blazing fast websites

Speed of a website is the single most influential feature to decide user experience and Jamstack takes care of it like no other. When you deploy a website with Jamstack, the whole site is hosted on CDNs and allow faster access because every page is prebuilt and served from the Edge network.

## Strong security

Since you don't have to maintain your own server, it's a mitigated security risk in itself. Moreover, every server-side process is abstracted into a microservice API which makes it more secure. Since these APIs are working on the server you don't have to worry about your security keys getting exposed as you would expect in an all client-side implementation. For example, you can create an API endpoint for your site to communicate with Firebase and can store Firebase Config credentials in the same API file safely, because these credentials won't be bundled in your client-side code.

## Highly scalable

Since you aren't hosting any servers, all you have to do for scaling is serving static files that you built, on more points of CDN. As for the microservices that are mostly Lambda functions, they are highly scalable, thanks to domain expertise of services like Vercel, AWS, and others.

## Better developer Experience

Since your site and API microservices are decoupled, you have tons of options to choose from, for your CMS like- Firebase, Sanity, Contentful, and others. Also you don't have to maintain your own server, hence removing your Devops problems.

# What should I choose?

For getting started with Jamstack, you have to choose 3 different components -

## Static site Generator

Although you can find the complete list of static site generators from [https://www.staticgen.com](https://www.staticgen.com/), I personally would suggest you using [**NextJS**](https://nextjs.org/) for the following reasons -

1. ⭐ Easy to understand for people who have prior experience with ReactJS.

2. ⭐ Automatic code splitting, filesystem based routing, hot code reloading and universal rendering.

3. ⭐ Dynamic page routing and dynamic API routes generation.

4. ⭐ Easy learning curve.

5. ⭐ Highly optimized for a smaller build size, faster dev compilation and other improvements.

## CMS

If you have to manage a lot of content and that too frequently, you have to choose a CMS according to your need. You can find the one that suits you from [https://headlesscms.org](https://headlesscms.org/). I would personally suggest using Firebase for the following reasons -

1. 🎉 Ease of use

2. 🎉 Generous free tier.

3. 🎉 Authentication and other features out of the box.

4. 🎉 Real-time updates using Firestore.

## Infrastructure

You need an infrastructure to continuously watch for changes you commit to your repository and trigger a build on changes (CI/CD). Then host your static generated files on their CDN. I personally find [**Vercel**](http://vercel.com/) extremely easy and powerful to use for the following reasons -

1. 🚀 Very very generous free tier - no limits on domains, subdomains, build time, file size.

2. 🚀 Out of the box support for NextJS.

3. 🚀 Intuitive UI/UX so that you are never stuck.

4. 🚀 Free SSL certificates :)

5. 🚀 Good community response on Github discussions.

Now if you want to learn more about Jamstack or found anything incorrect, feel free to contact me on Twitter or maybe subscribe to my newsletter. Thanks and keep rockin'.
