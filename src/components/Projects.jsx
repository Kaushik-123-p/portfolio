import React from "react";
import diceGame from "../assets/portfolio/DiceGame.png";
import ticTacToe from "../assets/portfolio/Tic-Tac_toe.png";
import ecommerce from "../assets/portfolio/E-comerce.png";
import foodApp from "../assets/portfolio/yammiGo-food-app.png"; // Add image for Yummigo if available
import todoListVue from "../assets/portfolio/todo.png"; // Add image for Todo List Vue
import movieSearchVue from "../assets/portfolio/Movie-Search-app .png"; // Add image for Movie Search Vue

const Project = () => {
  const Projects = [
    {
      id: 1,
      src: diceGame,
      title: "Dice Game",
      demo: "https://dice-game-six-snowy.vercel.app/",
      code: "https://github.com/Kaushik-123-p/Dice-Game",
    },
    {
      id: 2,
      src: ticTacToe,
      title: "Tic Tac Toe",
      demo: "https://tic-tac-toe-game-one-beta.vercel.app/",
      code: "https://github.com/Kaushik-123-p/Tic_Tac_Toe_Game",
    },
    {
      id: 3,
      src: ecommerce,
      title: "E-Commerce Website",
      demo: "https://e-comerce-website-frontend.vercel.app/",
      code: "#", // Replace with GitHub repo when available
    },
    {
      id: 4,
      src: foodApp,
      title: "Yummigo Food App",
      demo: "https://yummigo-food-app.vercel.app/",
      code: "#", // Replace with GitHub repo when available
    },
    {
      id: 5,
      src: todoListVue,
      title: "Todo List (Vue.js)",
      demo: "https://todo-list-vuejs-two.vercel.app/",
      code: "#", // Replace with GitHub repo when available
    },
    {
      id: 6,
      src: movieSearchVue,
      title: "Movie Search App (Vue.js)",
      demo: "https://movie-search-app-vuejs.vercel.app/",
      code: "#", // Replace with GitHub repo when available
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen pt-36"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  p-10 sm:px-0 ">
          {Projects.map(({ id, src, title, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={title}
                className="rounded-t-md duration-200 hover:scale-105 w-full h-48 object-cover"
              />
              <div className="text-center text-lg font-semibold mt-2 px-2 py-2 bg-gray-900">
                {title}
              </div>
              <div className="flex items-center justify-center bg-gray-800 py-4">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-4 py-2 mx-2 duration-200 hover:scale-105 text-center bg-cyan-500 rounded-lg font-medium"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-4 py-2 mx-2 duration-200 hover:scale-105 text-center bg-blue-500 rounded-lg font-medium"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
