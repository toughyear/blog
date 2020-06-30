import React from "react";
import { FeaturedProjects, OtherProjects } from "../constants/Projects";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { GiAstronautHelmet } from "react-icons/gi";

export default function ProjectsSection() {
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="flex flex-col mt-20">
      <h1 className="font-ibm-mono text-2xl text-brand-blue">2. Projects.</h1>
      <h1 className="about-intro mt-10">
        Here are some of the projects I've built. 🚀
      </h1>

      {FeaturedProjects.map((project) => (
        <div key={project.title} className="flex flex-col md:flex-row mt-10">
          <img
            src={`/images/projects/${project.image}`}
            alt="hi"
            className="w-100 md:w-3/5 shadow-xl"
          />

          <div className="flex flex-col md:text-right justify-center items-start md:items-end md:ml-10">
            <h1 className="text-brand-blue font-bold font-ibm-mono">
              Featured Project
            </h1>
            <h1 className="font-bold my-2 bg-highlighted">{project.title}</h1>
            <p className="mb-4">{truncate(project.Description, 250)}</p>
            <h1 className="font-ibm-mono">
              {project.stack.map((item) => (
                <span>{item}&nbsp;</span>
              ))}
            </h1>
            <div className="flex md:justify-end text-3xl mt-6">
              {project.github && (
                <a href="https://www.youtube.com/">
                  <AiFillGithub />
                </a>
              )}
              {project.live && (
                <a href="https://www.youtube.com/" className="ml-5">
                  <FiExternalLink />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
      <h1 className="font-ibm-mono text-2xl text-brand-blue mt-20">
        And some more...
      </h1>
      <h1 className="about-intro mt-10">
        Here are Some of my other past projects, if you wish to explore. &nbsp;
        <GiAstronautHelmet className="inline text-brand-blue text-2xl" />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="py-10 px-5 shadow-xl hover:shadow-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          dolorem deleniti, debitis iure blanditiis, a labore vero ipsa maxime
          voluptate, fugit tenetur cupiditate at quibusdam suscipit autem quo
          officia. Error quis et quisquam illo voluptates. Vero doloremque porro
          esse, accusamus voluptate ducimus, itaque minima placeat odit quo
          debitis mollitia voluptatem?
        </div>
      </div>
    </div>
  );
}
