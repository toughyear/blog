import React from "react";
import TweetEmbed from "react-tweet-embed";
import { TopTweets } from "../constants/Tweets";

export default function MyTopTweets() {
  return (
    <div>
      <div className="about-intro">
        <hr />
        Follow me on{" "}
        <a
          href="https://twitter.com/RajeevSinghN"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Twitter
        </a>
        . That's where I usually hangout.
        <br />
      </div>
      {TopTweets.map((tweet) => (
        <TweetEmbed
          key={tweet.tweetID}
          id={tweet.tweetID}
          placeholder={"loading"}
          options={{ theme: localStorage.getItem("BLOG_THEME") }}
        />
      ))}
    </div>
  );
}
