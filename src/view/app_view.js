import React from "react";
import ProjectCard, { imgDetail } from "../components/project_card";
import { links } from "../helpers/contants";

function AppView() {
  return (
    <React.Fragment>
      {/* Navbar */}
      <div className="md:w-full lg:w-3/5  md:mx-0 lg:mx-auto md:px-5 lg:px-0 ld: mt-10 mx-5 flex items-end gap-5">
        <h1 className="font-bold text-3xl cursor-pointer">tezada.dev</h1>
        <p className="hover:underline">
          <a href="#about">About</a>
        </p>
        <p className="hover:underline">
          <a href="#project">Projects</a>
        </p>
        <p className="hover:underline">
          <a href="#contact">Contact</a>
        </p>
      </div>
      {/* Projects */}
      <div id="project" className="md:w-full lg:w-3/5  md:mx-0 lg:mx-auto md:px-5 lg:px-0 ld: mt-10 mx-5">
        <h2 className="font-bold text-xl mb-4">PROJECTS & WORKS</h2>

        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
          {imgDetail?.map((item) => {
            return <ProjectCard title={item?.title} site={item?.site} github={item.github} img={item.img} />;
          })}
        </div>
      </div>

      <div id="about" className="md:w-full lg:w-3/5  md:mx-0 lg:mx-auto md:px-5 lg:px-0 ld: mt-10 mx-5">
        <h2 className="font-bold text-xl mb-4">ABOUT ME</h2>
        <div className="">
          <p className="font-light text-lg">
            Hi there! I'm Terrence Calzada a fullstack web developer. I utilized ReactJs and Laravel API to deliver
            complex web app projects. Once upon a time I hated javascript because of its strange syntax, when I got a
            software development job with react, I begin to appreciate javascript. Now not only for web but I also use
            javascript to make mobile apps and game development with raylib nodejs binding.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="md:w-full lg:w-3/5  md:mx-0 lg:mx-auto md:px-5 lg:px-0 ld: mt-10 mx-5">
        <h2 className="font-bold text-xl mb-4">CONTACT ME</h2>
        <div className="flex flex-col gap-2">
          <ul className="list-disc mx-4">
            <li>
              <a href="" className="hover:underline">
                Email: terrencecalzada@gmail.com
              </a>
            </li>
            <li>
              <a href={links.facebook} target="_blank" className="hover:underline">
                Facebook: DevTezada
              </a>
            </li>
            <li>
              <a href={links.place} target="_blank" className="hover:underline">
                Place: Taguig City Philippines
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AppView;
