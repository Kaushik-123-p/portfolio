import HeroImage from "../assets/profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row gap-10 ">
        <div className="flex flex-col justify-center h-80 text-center md:text-left md:w-1/2 ">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Hi, I'm
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white">
            Kaushik Prajapati
          </h1>
          <p className="text-gray-300 py-4 max-w-md mx-auto md:mx-0">
            I’m a passionate Front-End Developer with expertise in building
            modern, responsive web applications using technologies like
            React.js, Vue.js, Tailwind CSS, and more.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                offset={-80}
                className="group inline-flex items-center bg-gradient-to-r from-teal-500 to-indigo-500 text-white px-6 py-3 rounded-lg my-2 w-fit cursor-pointer transition-transform transform hover:scale-105"
              >
                Discover My Work
                <span className="group-hover:rotate-90 duration-300 ml-1">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </Link>
            </div>

            <div>
              <a
<<<<<<< HEAD
                href="/kaushik-prajapati.pdf"
=======
                href="/resume.html"
>>>>>>> 551cffe9e9ed2a89d80d8eeb27ac4311209c9a38
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-gradient-to-r from-teal-500 to-indigo-500 text-white px-6 py-3 rounded-lg my-2 w-fit cursor-pointer transition-transform transform hover:scale-105"
              >
                View Resume
                <span className="group-hover:rotate-90 duration-300 ml-1">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-80  md:mt-0 md:w-[50%] flex justify-center ">
          <img
            src={HeroImage}
            alt="Profile of Prajapati Kaushik"
            className="rounded-xl shadow-2xl w-64 sm:w-72 md:w-80 lg:w-96 object-cover transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
