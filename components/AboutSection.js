import React, { useState, useEffect } from "react";
import simpleIcons from "simple-icons";
import { Row, Col, Grid } from "react-flexbox-grid";
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

export default function AboutSection() {
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
      <Grid>
        <Row>
          <Col>
            <div style={{ marginTop: 50 }}>
              <h1 className="font-ibm-mono text-2xl text-brand-blue">
                1. About Me
              </h1>
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
                    Hi there 👋, I am Rajeev Singh Naruka, a fullstack
                    web-developer, based in India. This is my personal site
                    where I share my projects and blog about stuff I find
                    interesting. If you stick around here you might find
                    something interesting: code, design or entrepreneurship.
                    <br />
                    <br />
                    Currently I am pursuing bachelor of engineering in computer
                    science from University of BITS Pilani (2017-2021). During
                    my short journey of web-dev I have been fortunate enough to
                    work with some amazing people and start-ups, one of them
                    being backed by Y-Combinator. During my time with
                    internships, client projects and my personal projects, I
                    have worked with a varity of tech stack.
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
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </>
  );
}
