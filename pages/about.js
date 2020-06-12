import React, { useState, useEffect } from "react";
import simpleIcons from "simple-icons";
import Head from "next/head";
import { Row, Col } from "react-flexbox-grid";
import dynamic from "next/dynamic";
import { config } from "react-spring";

const TextTransition = dynamic(() => import("react-text-transition"), {
  ssr: false,
});

import Layout from "../components/Layout";
import { PRESENT, SKILLS } from "../constants/Stack";

const Icon = ({ stack, style }) => {
  const icon = simpleIcons.get(stack);

  return (
    <div
      data-icon={stack}
      style={{
        fill: `#${icon.hex}`,
        display: "inline-block",
        width: "50px",
        margin: "0 auto",
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};

function About() {
  const [index, setIndex] = useState(0);
  const avatar = `https://images.weserv.nl/?url=https://unavatar.now.sh/twitter/RajeevSinghN`;

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
  }, []);

  return (
    <>
      <img className="about-avatar" src={avatar} />

      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          <h1 className="about-h1">
            Rajeev{" "}
            <TextTransition
              text={SKILLS[index % SKILLS.length]}
              springConfig={config.gentle}
              style={{ display: "inline-block" }}
            />
          </h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>
                Hi there 👋, I am Rajeev Singh Naruka. Thanks for checking out
                my blog. If you stick around here you might find something
                interesting: code, design or entrepreneurship.
                <br />
                <br />
                Currently I am pursuing bachelor of engineering in computer
                science from University of BITS Pilani (2017-2021). During my
                few internships in last few years and working on some personal
                projects, I have worked with a varity of tech stack.
              </Col>
            </Row>
            <hr />
            <h3>What I've worked with so far</h3>
            <Row style={{ marginTop: 30 }}>
              {PRESENT.map((s) => (
                <Col
                  md={2}
                  xs={4}
                  key={s}
                  style={{ textAlign: "center", marginBottom: 40 }}
                >
                  <Icon stack={s} />
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>
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
            Thanks to{" "}
            <a
              href="https://twitter.com/telmo"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Telmo
            </a>{" "}
            for opensourcing this blog built with NextJS.
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
