import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Recent BootCamp graduate seeking an entry level full - stack developer
          position with a technically innovative company.I am highly
          collaborative and a creative problem solver.My strong work ethic along
          with my innate ability to bring energy to the workplace makes me an
          excellent addition to any team!
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          quibusdam, amet molestiae vitae, provident quam quos facere sint nulla
          consectetur minus magnam, quis officia repellendus deserunt qui
          mollitia labore odio?
        </p>
      </div>
    </div>
  );
};

export default About;
