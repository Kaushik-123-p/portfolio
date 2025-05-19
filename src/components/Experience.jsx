import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-24"
    >
      <div className="max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Here is my internship experience</p>
        </div>

        {/* Experience Section */}
        <div className="mt-10">
          <p className="text-2xl font-semibold">
            Jspider Training and Development Center
          </p>
          <p className="text-xl text-teal-400">Front-End Developer Intern</p>
          <p className="text-lg text-gray-400">
            Jul 2024 - Oct 2024 | Bangalore
          </p>

          <ul className="list-disc ml-5 mt-4">
            <li>
              Developed interactive and responsive web applications using
              React.js and Tailwind CSS.
            </li>
            <li>
              Enhanced UI/UX by implementing modern design patterns and ensuring
              accessibility.
            </li>
            <li>
              Gained hands-on experience in state management, API handling, and
              performance optimization.
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Experience;
