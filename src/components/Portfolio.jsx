import React from "react";
import dreamJob from "../assets/dreamJob.png";
import eCommerce from "../assets/EcommerceRoute.png";
import employeeTracker from "../assets/employeeTracker.png";
import jate from "../assets/jateTextEditor.png";
import noteTaker from "../assets/noteTaker.png";
import teamGenerator from "../assets/teamGeneratorLive.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: dreamJob,
      link: "https://sheetaljwl795.github.io/dream-job-finder/",
      repo: "https://github.com/sheetaljwl795/dream-job-finder",
    },
    {
      id: 2,
      src: eCommerce,
      link: "",
      repo: "https://github.com/GarzaNate/E-Commerce-Backend",
    },
    {
      id: 3,
      src: employeeTracker,
      link: "https://drive.google.com/file/d/1If8XyUEfQNAAEQkPYaI1k4XcDJMGwumD/view",
      repo: "https://github.com/GarzaNate/Employee-tracker",
    },
    {
      id: 4,
      src: jate,
      link: "https://desolate-citadel-42669.herokuapp.com",
      repo: "https://github.com/GarzaNate/Jate-Text-Editor",
    },
    {
      id: 5,
      src: noteTaker,
      link: "",
      repo: "https://github.com/GarzaNate/Note-taker",
    },
    {
      id: 6,
      src: teamGenerator,
      link: "",
      repo: "https://github.com/GarzaNate/team-profile-generator",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md: h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={repo}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
