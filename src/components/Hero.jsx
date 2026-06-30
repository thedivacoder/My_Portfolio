import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-24">

      {/* Left Side */}
      <div className="max-w-xl text-center md:text-left">

        <h3 className="text-2xl md:text-3xl mb-2">
          Hello, It's Me
        </h3>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3">
          Divakar Kumar
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold mb-5">
          And I'm a{" "}
          <span className="text-cyan-400">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg mb-8">
          Passionate about building modern web applications
          using React, Node.js, PostgreSQL and modern web technologies.
        </p>

        <button
          className="
            bg-cyan-400
            text-black
            px-8
            py-3
            rounded-full
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            shadow-[0_0_20px_#22d3ee]
          "
        >
          Download Resume
        </button>

      </div>

      {/* Right Side */}
      <div className="mb-10 md:mb-0">

        <img
          src={profile}
          alt="Divakar Kumar"
          className="
            w-[250px]
            md:w-[350px]
            lg:w-[420px]
            rounded-xl
            shadow-2xl
            hover:scale-105
            transition-all
            duration-500
          "
        />

      </div>

    </section>
  );
};

export default Hero;