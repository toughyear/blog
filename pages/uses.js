import React from "react";

import Layout from "../components/Layout";
import { USES } from "../constants/Uses";

function Uses({ og }) {
  const avatar = `https://images.weserv.nl/?url=https://unavatar.now.sh/twitter/RajeevSinghN`;
  return (
    <>
      <img className="about-avatar" src={avatar} />
      <Layout secondaryPage>
        <h1 className="uses-h1">Just so you know...</h1>

        <div className="uses-intro">
          In my free time, I am often scrolling through my twitter feed,
          stumbling on interesing blogs or dreaming after reading documentations
          of new frameworks. I sometime also share information tidbits on my{" "}
          <a
            href="https://twitter.com/RajeevSinghN"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Twitter
          </a>
          , so don't forget to follow me there.
        </div>

        {USES.map(({ title, stack }) => (
          <ul className="uses-list" key={title}>
            <li className="head">{title}</li>

            {stack.map(({ name, description, link }) => (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {name}
                </a>
                <span>{description}</span>
              </li>
            ))}
          </ul>
        ))}
      </Layout>
    </>
  );
}

Uses.getInitialProps = () => {
  return {
    data: {
      og: {
        description: "What Rajeev uses on a daily basis.",
        image: "https://blog.rajeevnaruka.com/og/uses.png",
      },
    },
  };
};

export default Uses;
