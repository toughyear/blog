import React from "react";
import Layout from "../components/Layout";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineCodepen,
} from "react-icons/ai";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";

function Home() {
  return (
    <Layout isHomePage>
      <div className="flex flex-col font-semibold">
        <h1 className="font-ibm-mono text-brand-blue mt-20">Hi, this is</h1>
        <h1 className="" style={{ fontSize: "60px" }}>
          Rajeev S. Naruka.
        </h1>
        <h1 className="opacity-50 " style={{ fontSize: "60px" }}>
          I build things for the web.
        </h1>
        <p className="opacity-75 max-w-lg mt-5 tracking-wide font-normal">
          I am a fullstack web-developer, based in India, pursuing B.E.CSE
          (Hons.) from BITS Pilani University. I love building scalable & robust
          WebApps, dumb side-projects, indieHacking and petting doggos 🐶.
        </p>
        <div className="mt-16 flex">
          <button className="font-ibm-mono flex items-center bg-brand-blue text-bg-color px-6 py-3 rounded-sm mr-6 hover:bg-opacity-75">
            Get in touch
          </button>
          <button className="font-ibm-mono flex items-center bg-opacity-0 border-2 text-brand-blue border-brand-blue px-10 py-3 rounded-sm hover:hover:border-white hover:opacity-75">
            <a href="https://blog.rajeevnaruka.com/">Resume</a>
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
          <a href="https://codepen.io/toughyear" target="_blank">
            {" "}
            <AiOutlineCodepen className="text-3xl text-gray-600 dark:text-white mr-4 hover:text-brand-blue dark-hover:text-brand-blue cursor-pointer" />
          </a>
        </div>
      </div>

      <AboutSection />

      <ProjectsSection />
    </Layout>
  );
}

export default Home;
