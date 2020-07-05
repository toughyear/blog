import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Head from "next/head";
import ProgressBar from "react-scroll-progress-bar";
import InnerHTML from "dangerously-set-html-content";
import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";

function Writing({ content, data }) {
  const frontmatter = data;
  const { title, author, og } = frontmatter;
  const avatar = `https://images.weserv.nl/?url=https://unavatar.now.sh/twitter/${author.twitter}&w=40`;
  const convertkit = `
  <script async data-uid="ca6e738f5c" src="https://colossal-maker-600.ck.page/ca6e738f5c/index.js"></script>
  `;

  return (
    <>
      <Head>
        {/* Primary Meta Tags  */}
        <meta
          key="description"
          name="description"
          content={
            og
              ? og.description
              : `I blog about React, NextJS, TailwindCSS, GraphQL, Firebase, and everything related to web-development or indie hacking and also share about the projects I am working on.`
          }
        />

        {/* Open Graph / Facebook  */}
        <meta key="og:title" property="og:title" content={title} />
        <meta
          key="og:description"
          property="og:description"
          content={
            og
              ? og.description
              : `I blog about React, NextJS, TailwindCSS, GraphQL, Firebase, and everything related to web-development or indie hacking and also share about the projects I am working on.`
          }
        />
        <meta
          key="og:image"
          property="og:image"
          content={
            og
              ? `https://og-image.now.sh/${title}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg`
              : `https://rajeevnaruka.com/og/mysite-homepage.png`
          }
        />
        {/* Twitter  */}
        <meta key="twitter:title" property="twitter:title" content={title} />
        <meta
          key="twitter:description"
          property="twitter:description"
          content={
            og
              ? og.description
              : `I blog about React, NextJS, TailwindCSS, GraphQL, Firebase, and everything related to web-development or indie hacking and also share about the projects I am working on.`
          }
        />
        <meta
          key="twitter:image"
          property="twitter:image"
          content={
            og
              ? `https://og-image.now.sh/${title}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg`
              : `https://rajeevnaruka.com/og/mysite-homepage.png`
          }
        />
      </Head>
      <div className="writing-progress">
        <ProgressBar height="5px" />
      </div>

      <Layout secondaryPage noHead>
        <div style={{ marginTop: 50 }}>
          <Link href="/blog" as="/blog">
            <a className="back-button">back</a>
          </Link>
          <h1 className="writing-title-h1">{title}</h1>

          <div className="author">
            <a
              href={`https://twitter.com/${author.twitter}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img src={avatar} />
              {author.name}
            </a>
          </div>

          <div className="writing-container">
            <ReactMarkdown
              source={content}
              escapeHtml={false}
              renderers={{
                code: CodeBlock,
                link: (props) => {
                  if (!props.href.startsWith("http")) {
                    return props.href;
                  }

                  return (
                    <a
                      href={props.href}
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                    >
                      {props.children}
                    </a>
                  );
                },
              }}
            />
            <script
              type="text/javascript"
              src="https://campaigns.zoho.in/js/zc.iframe.js"
            ></script>

            <div className="twitter-follow">
              If you liked this post I'm sure you'll love what I usually share
              on{" "}
              <a
                href="https://twitter.com/RajeevSinghN"
                rel="noopener noreferrer nofollow"
              >
                Twitter
              </a>
              , I share a lot of Growth & coding tips there ✌️
            </div>

            <InnerHTML html={convertkit} className="mt-10" />
          </div>
        </div>
      </Layout>
    </>
  );
}

Writing.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../writings/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

export default Writing;
