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
            About Me
          </p>
        </div>

        
        <p className="text-xl mt-6">
          Hi, I'm{" "}
          <span className="font-bold text-teal-400">Prajapati Kaushik</span>, a
          Front-End Developer with expertise in{" "}
          <span className="font-semibold text-teal-400">React.js</span>,{" "}
          <span className="font-semibold text-teal-400">Vue.js</span>, and{" "}
          <span className="font-semibold text-teal-400">Tailwind CSS</span>. I
          build responsive and user-friendly web applications, focusing on clean
          code, performance, and great user experiences.
        </p>

        <br />

        <p className="text-xl mt-6">
          I’m always learning new technologies and improving my skills to stay
          ahead in the fast-evolving world of web development. I'm passionate
          about creating modern, interactive web solutions that are both
          functional and visually appealing.
        </p>
      </div>
    </div>
  );
};

export default About;
