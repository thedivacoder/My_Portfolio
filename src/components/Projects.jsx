import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      status: "Completed ✅",
      tech: "React, Tailwind CSS",
      description:
        "Personal portfolio website showcasing skills, projects, and contact information.",
    },
    {
      title: "Expense Tracker",
      status: "In Progress 🚀",
      tech: "React, Tailwind CSS, Local Storage",
      description:
        "Track expenses, manage budgets, and view spending summaries.",
    },
    {
      title: "Job Tracker",
      status: "Planned 📋",
      tech: "React, Tailwind CSS",
      description:
        "Track job applications, interviews, and application status.",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white px-6 md:px-20 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Projects I am building during my Full Stack Development journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">💻</div>

            <h3 className="text-2xl font-bold text-cyan-400">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {project.description}
            </p>

            <div className="mt-4">
              <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                {project.status}
              </span>
            </div>

            <button
              onClick={() => setSelectedProject(project)}
              className="mt-6 text-cyan-400 hover:text-cyan-300"
            >
              Details →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-zinc-900 border border-cyan-400 rounded-2xl p-8 max-w-lg w-full">

            <h3 className="text-3xl font-bold text-cyan-400">
              {selectedProject.title}
            </h3>

            <p className="mt-4 text-gray-300">
              {selectedProject.description}
            </p>

            <div className="mt-5">
              <h4 className="font-semibold text-cyan-400">
                Tech Stack
              </h4>

              <p className="text-gray-300">
                {selectedProject.tech}
              </p>
            </div>

            <div className="mt-5">
              <h4 className="font-semibold text-cyan-400">
                Status
              </h4>

              <p>{selectedProject.status}</p>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-8 bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;