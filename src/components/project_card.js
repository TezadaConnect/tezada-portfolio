import React from "react";
import ulos from "../assets/img/ulos.png";
import dlw from "../assets/img/dlw_project.png";

export const imgDetail = [
  {
    title: "Ulos Renting Platform ReactJs",
    img: ulos,
    site: "http://ulos-renting.herokuapp.com/home",
    github: "https://github.com/TezadaConnect/ulos-renting-platform",
  },
  {
    title: "DLW Project React Native",
    img: dlw,
    site: null,
    github: "https://github.com/TezadaConnect/dlw_project",
  },
];

const ProjectCard = ({ title, github, site, img }) => {
  return (
    <React.Fragment>
      <div>
        <div className="shadow-lg rounded-lg hover:scale-105 box-border transition delay-75 border">
          <div>{img && <img className="inline rounded-t-lg" src={img ?? ""} alt={title ?? ""} />}</div>
          <div className="p-3">
            <h3 className="text-lg font-bold mb-1">{title ?? "Add Title"}</h3>
            <ul className="flex flex-row gap-2">
              {site && (
                <li>
                  <a className="hover:underline text-blue-700" href={site ?? ""} target="_blank">
                    Open site
                  </a>
                </li>
              )}

              {github && (
                <li>
                  <a className="hover:underline text-blue-700" href={github ?? ""} target="_blank">
                    Github Repo
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectCard;
