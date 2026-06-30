function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MySQL",
    "Git",
    "GitHub",
    "Linux",
    "Python",
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white py-24 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Technologies I use to build modern web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                px-6
                py-3
                rounded-2xl
                border
                border-cyan-400/30
                bg-zinc-900
                cursor-pointer
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
              "
            >
              <span className="relative z-10 font-medium">
                {skill}
              </span>

              <div
                className="
                  absolute
                  inset-0
                  bg-cyan-400/10
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-zinc-900 border border-cyan-400/20 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">12+</h3>
            <p className="text-gray-400 mt-2">Technologies Learning</p>
          </div>

          <div className="bg-zinc-900 border border-cyan-400/20 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">3+</h3>
            <p className="text-gray-400 mt-2">Projects Planned</p>
          </div>

          <div className="bg-zinc-900 border border-cyan-400/20 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">2024-2026</h3>
            <p className="text-gray-400 mt-2">Learning Journey</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
