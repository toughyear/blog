---
title: "How to use NextJS API routes?"
date: "2020-07-07"
og:
  description: "This is a complete guide to understand how API routes work in NextJS and how you can use them easily in your next project. We will also cover examples to fully understand it (updated 2020)."
author:
  twitter: "RajeevSinghN"
  name: "Rajeev Singh Naruka"
---

> This is a complete guide to understand how API routes work in NextJS and how you can use them easily in your next project. We will also cover examples to fully understand it (updated 2020).

One of the most powerful things about NextJS is the fact that you don't have to handle two different things like front-end app and a backend server (say a NodeJS server) for API functions. You get all the power that comes with ReactJS for your client side and all the best things about a NodeJS server in the same directory, at the same place. Also the learning the curve is not high.

![https://og-image.now.sh/Ease%20of%20React%20%2B%20Power%20of%20NodeJS.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg](https://og-image.now.sh/Ease%20of%20React%20%2B%20Power%20of%20NodeJS.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg)

# Gettting started with your NextJS app

To create a new NextJS app type the following command in a directory -

```bash
npx create-next-app
```

Let me explain if the above command if you are new to it. As you must have seen already when creating a new React App using the command **npx create-react-app** and not **npm create-react-app**. The **npm create-react-app** command requires you to download the package globally and then use it to install wherever you want. This causes some problems of caching and is generally not preferred. The npx command is an alternative to npm command and requires you to download the package from the network and execute it and hence the x in npExecute.

That being said, the above command will create a new next app in the current directory with a set layout ready for you. Although I will try to explain most of the things, this article however doesn't deal with all the basics of NextJS app and we will mostly be dealing with NextJS API routes.

# Understanding file structure of NextJS app

One thing to keep in mind is NextJS app enables routing based on your file structure and filename. This will be made clear more later.

Here are the folders of your interest -

## Public folder in NextJS app

Your Next.js application can serve all type of static files from a folder called public in the root directory (./public).

For example you want to use an image in your component or a NextJS page. Create a folder called images inside public folder. You can then reference it by putting src="/images/mycutedog.png". Remember, the extensions are case sensitive and .PNG is not equal to .png (you learn a few things when your projects break).

## Pages folder in NextJS app

The most interesting folder and where most of your magic happens, atleast initially. Each file inside this folder you write, will create it's own route in your app.

Here is how. Say you have files inside pages folder called aboutMe.js and projects.js with default function exports of any name (but preferrably of the same name as the file).

Now both of these pages will be accessible like this -

yourdomain.com/aboutme and yourdomain.com/projects

## API folder in NextJS app

You can create a special folder inside the pages folder in your NextJS app with name called /api.

This folder has a special meaning. All the filese inside this folder are basically API endpoints in your nextJS application.

For example you have a file called name.js inside the api subfolder (./pages/api/name.js).

this name.js will behave as an API endpoint and can be accessed by going to [yourdomain.com/api/name](http://yourdomain.com/api/name) and this endpoint can handle all types of requests like GET, POST, etc.

Each file you write inside the API folder ending with a .js extension is basically a serverless function, meaning you don't have to worry about maintaining a server and can be scaled gracefully when load increases on the API endpoint.

These API files have a defined structure -

```jsx
export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name: "John Doe" }));
};
```

As you can see it has to have a default export which is picked up NextJS. The default export function has request and response as two props which can be accessed and used just like any other NodeJS routing functions.

Following is a codesandbox for a NextJS app pointing at /api/name after the domain. What you are seeing is a JSON response by the API endpoint. This is how the API routes basically work in NextJS app.

<iframe  src="https://codesandbox.io/embed/blog-nextjs-api-jr3u0?fontsize=14&hidenavigation=1&initialpath=%2Fapi%2Fname&theme=dark" frameborder="0" allowfullscreen width="100%"  height="400" class="mb-10 shadow-2xl"></iframe>

But here is special quirk. All API requests to these endpoints emerging from a different source (domain) will get rejected due to same source origin policy error.

You can try this yourself by making a call to this api from a different origin say [postwoman.io](http://postwoman.io). Press the send button -

<iframe  src="https://postwoman.io/?method=GET&url=https%3A%2F%2Fjr3u0.sse.codesandbox.io&path=%2Fapi%2Fname" frameborder="0" allowfullscreen width="80%" height="400" class="mb-10 shadow-2xl"></iframe>

You will see an network error. When you see in your chrome dev tools you will see this error -

```bash
Access to XMLHttpRequest at
 'https://jr3u0.sse.codesandbox.io/api/name'
 from origin 'https://postwoman.io' has been blocked
by CORS policy: No 'Access-Control-Allow-Origin' header
is present on the requested resource.
```

CORS stands for Cross-Origin Resource Sharing policy which prohibits sharing of resources within cross-origins due to security reasons. That means that only the requests emerging from your own domain/origin are allowed to access your API endpoints. It's good to have such security but maybe you want these API endpoints to be accessible by everyone else out there. As you might already know by working with NodeJS servers, you can make use of an NPM package called cors to help with this issue and change CORS policy according to our needs.

# Implementing CORS policy in NextJS API routes

first of all install cors using npm

```bash
npm install cors
```

Now create a new API file called work.js and ofcourse you can create with any name but this API endpoint will be accessible from any origin because we will allow it to have more flexible CORS policy.

Here is the file work.js

```jsx
import Cors from "cors";

const corsInstance = Cors({
  methods: ["GET", "HEAD"],
});

async function HandleCors(req, res) {
  try {
    await corsInstance(req, res);
  } catch (error) {
    console.log(error);
  }
}

export default (req, res) => {
  HandleCors(req, res);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      message:
        "Hi from work! This API endpoint  can be accessed from anywhere!",
    })
  );
};
```

First we import the Cors module from 'cors' package we just installed and create a new instance of cors policy which will allow all the GET and HEAD requests. Head is similar to GET but limited so use both of them when that particular API endpoint is for giving some information.

As you can see we still have the export default function that deals with API endpoint. But now we need to change a few things before sending the response. For this, we create a new function called HandleCors to handle CORS Policy for us. It's an async function because it takes some time and we want to stop further execution of default function before we deal with this. The code is pretty self-explanatory at this point.

Now here is the good part. Let's make a new request to the new API endpoint at domain.com/api/work

<iframe  src="https://postwoman.io/?method=GET&url=https%3A%2F%2Fjr3u0.sse.codesandbox.io&path=%2Fapi%2Fwork" frameborder="0" allowfullscreen width="80%" height="400" class="mb-10 shadow-2xl"></iframe>

It should work now showing the following response -

```json
{
  "message": "Hi from work! This API endpoint  can be accessed from anywhere!"
}
```

Although the method we used to apply the cors middleware a better approach would to define a generic function to pass all the middlewares to and then use it -

```jsx
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
```

Then you can call it like this -

```jsx
async function APIHandler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  res.send({ message: "It works!" });
}

export default APIHandler;
```

The possibilities of using the API endpoints are endless. Here is a tip for you - These API endpoints are not bundled into your client application and are run as serverless functions, on servers of course. Hence you can probably store your API secret keys and call them from your application from client side without exposing those keys to users. It's a little bit more secure than storing those keys in client side implementation but I won't bet on it.

Finally it's a wrap. There are a lot things though, you can even create dynamic API routes! How awesome is that.

If you find any errors in this article or need any help feel free to reach out to me on Twitter. Keep rockin'.
