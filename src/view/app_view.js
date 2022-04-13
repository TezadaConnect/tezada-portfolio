import React from "react";
import ProjectCard, { imgDetail } from "../components/project_card";
import { links } from "../helpers/contants";

function AppView() {
  const placeHolder = `<a href=${links.place} target="_blank">Place: Taguig City Philippines</a>`;
  const fbHolder = `<a href=${links.facebook} target="_blank">Facebook: DevTezada</a>`;
  return (
    <React.Fragment>
      {/* Navbar */}
      <div className="md:w-full lg:w-3/5  md:mx-0 lg:mx-auto md:px-5 lg:px-0 ld: mt-10 mx-5 flex">
        <div className="flex items-end gap-5">
          <h1 className="font-bold text-3xl cursor-pointer">tezada.dev</h1>
          <p className="hover:underline">
            <a href="#project">Projects</a>
          </p>
          <p className="hover:underline">
            <a href="#about">About</a>
          </p>
          <p className="hover:underline">
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
      {/* Projects */}
      <div id="project" className="md:w-full lg:w-3/5  md:mx-0 lg:mx-auto md:px-5 lg:px-0 ld: mt-10 mx-5">
        <h2 className="font-bold text-xl mb-4">PROJECTS & WORKS</h2>

        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
          {imgDetail?.map((item, key) => {
            return <ProjectCard key={key} title={item?.title} site={item?.site} github={item.github} img={item.img} />;
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
            javascript to make mobile apps with React Native and game development with Raylib nodejs binding.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="md:w-full lg:w-3/5  md:mx-0 lg:mx-auto md:px-5 lg:px-0 ld: mt-10 mx-5">
        <h2 className="font-bold text-xl mb-4">CONTACT ME</h2>
        <div className="flex flex-col gap-2">
          <ul className="list-disc mx-4">
            <li className="hover:underline cursor-pointer">Email: terrencecalzada@gmail.com</li>
            <li
              className="hover:underline"
              dangerouslySetInnerHTML={{
                __html: fbHolder.replace(/href/g, "target='_blank' href"),
              }}
            ></li>
            <li
              className="hover:underline"
              dangerouslySetInnerHTML={{
                __html: placeHolder.replace(/href/g, "target='_blank' href"),
              }}
            ></li>
          </ul>
        </div>
      </div>
      <div className="md:w-full lg:w-3/5  md:mx-0 lg:mx-auto md:px-5 lg:px-0 ld: mt-10 mx-5">
        <div className="font-thin text-xs py-5">
          COPYRIGHT © <span className="cursor-pointer hover:underline hover:font-normal ">TEZADA.DEV</span> 2022 - ALL
          RIGHTS RESERVE
        </div>
      </div>
    </React.Fragment>
  );
}

export default AppView;
