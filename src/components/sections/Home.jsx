import React from "react";
import profileImage from "../../assets/my-profile.jpg";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly min-h-screen px-6 bg-black text-white">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Hi, I'm Diksha Jain
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0">
          I'm a Computer Engineering student specializing in React.js, Tailwind CSS, and problem-solving. I build responsive web apps and love turning complex ideas into clean, interactive UIs. 250+ DSA problems solved.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium hover:bg-blue-500/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
