import React from "react";
import Layout from "../components/Layout";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineCodepen,
  AiFillLinkedin,
} from "react-icons/ai";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import MyTopTweets from "../components/MyTopTweets";
function Home() {
  return (
    <Layout isHomePage>
      <div className="flex flex-col font-semibold">
        <h1 className="font-ibm-mono text-xl text-brand-blue mt-10">
          Hi, this is
        </h1>

        <h1 className="landing-font font-bold">Rajeev Singh Naruka.</h1>
        <h1 className="opacity-50 landing-font font-bold">
          I build things for the web.
        </h1>
        <p className=" max-w-lg mt-5 font-normal about-intro">
          I am a fullstack web-developer, based in India, pursuing B.E.(Hons.)
          in CSE from BITS Pilani. I love building scalable & robust WebApps,
          dumb side-projects, indieHacking and petting doggos 🐶.
        </p>
        <div className="mt-16 flex flex-col sm:flex-row items-start items-center">
          <button className="font-ibm-mono flex items-center bg-brand-blue text-bg-color px-6 py-3 rounded-sm sm:mr-6 hover:bg-opacity-75">
            <a href="mailto:rajivsingh430@gmail.com"> Get in touch </a>
          </button>

          <button className="font-ibm-mono flex items-center bg-opacity-0 border-2 text-brand-blue border-brand-blue px-12 sn:px-10 py-3 rounded-sm hover:hover:border-white hover:opacity-75 mt-4 sm:mt-0">
            <a
              href="https://drive.google.com/file/d/1j5BaNiTBU-DEwL9GmP_4OTNCjP6iGmE3/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </button>
        </div>
        <div className="flex my-20">
          <a href="https://twitter.com/RajeevSinghN" target="_blank">
            {" "}
            <AiOutlineTwitter className="text-3xl text-gray-600 dark:text-white mr-4 hover:text-brand-blue dark-hover:text-brand-blue cursor-pointer" />
          </a>

          <a href="https://github.com/toughyear" target="_blank">
            {" "}
            <AiOutlineGithub className="text-3xl text-gray-600 dark:text-white mr-4 hover:text-brand-blue dark-hover:text-brand-blue cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajeevsinghnaruka/"
            target="_blank"
          >
            {" "}
            <AiFillLinkedin className="text-3xl text-gray-600 dark:text-white mr-4 hover:text-brand-blue dark-hover:text-brand-blue cursor-pointer" />
          </a>
          <a href="https://codepen.io/toughyear" target="_blank">
            {" "}
            <AiOutlineCodepen className="text-3xl text-gray-600 dark:text-white mr-4 hover:text-brand-blue dark-hover:text-brand-blue cursor-pointer" />
          </a>
        </div>
      </div>

      <AboutSection />

      <ProjectsSection />

      <MyTopTweets />
    </Layout>
  );
}

export default Home;
