import React from "react";
import profile from "../assets/Divakar_about.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6 md:px-20"
    >

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">


        {/* Image */}
        <div className="md:w-1/3 flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20"></div>

            <img
              src={profile}
              alt="Divakar Kumar"
              className="relative w-[300px] rounded-2xl shadow-2xl"
            />

          </div>

        </div>



        {/* About */}
        <div className="md:w-2/3">

          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>


          <p className="text-gray-400 text-lg leading-8">
            I'm Divakar, a BCA student and Full Stack Developer
            passionate about creating modern and responsive web
            applications. I enjoy learning new technologies,
            solving problems, and building projects that improve
            my skills.
          </p>


          <p className="text-gray-400 text-lg leading-8 mt-4">
            My goal is to become a skilled developer and create
            meaningful digital experiences through technology.
          </p>


        </div>


      </div>

    </section>
  );
};

export default About;