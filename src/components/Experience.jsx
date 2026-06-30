import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-black text-white py-24 px-6 md:px-20 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Internship & practical learning journey
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {/* Imagivite */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div>
                <h3 className="text-3xl font-bold">Web Development Intern</h3>

                <p className="text-cyan-400 text-xl mt-2">
                  Imagivite Technology Pvt Ltd
                </p>

                <p className="text-gray-400 mt-2">01 May 2026 - 31 May 2026</p>

                <p className="text-gray-400 mt-5 leading-7">
                  Completed a Web Development internship where I worked with
                  HTML, CSS and JavaScript. Gained experience in creating web
                  pages, understanding development workflow and working on
                  real-world project tasks.
                </p>
              </div>

              <a
                href="/certificates/imagivite.pdf"
                target="_blank"
                className="h-fit bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* Java Project */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-3xl font-bold">Java Project Intern</h3>

            <p className="text-cyan-400 text-xl mt-2">Internz Learn</p>

            <p className="text-gray-400 mt-2">05 Dec 2024 - 05 Jan 2025</p>

            <p className="text-gray-400 mt-5 leading-7">
              Worked on Java based projects and improved programming logic,
              problem solving and software development fundamentals.
            </p>

            <a
              href="/certificates/javaProject.pdf"
              target="_blank"
              className="inline-block mt-5 bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold"
            >
              View Certificate
            </a>
          </div>

          {/* Java Training */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-3xl font-bold">Java Training</h3>

            <p className="text-cyan-400 text-xl mt-2">Internz Learn</p>

            <p className="text-gray-400 mt-2">05 Nov 2024 - 05 Dec 2024</p>

            <p className="text-gray-400 mt-5 leading-7">
              Completed Java training and learned core Java concepts,
              programming fundamentals and coding practices.
            </p>

            <a
              href="/certificates/javaTraining.pdf"
              target="_blank"
              className="inline-block mt-5 bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
