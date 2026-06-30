function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-cyan-400/20 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Side */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400">
            Divakar Kumar
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            Full Stack Developer
          </p>
        </div>

        {/* Center */}
        <div className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Divakar Kumar. All Rights Reserved.
        </div>

        {/* Right Side */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/thedivacoder"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/divakartheias"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:thedivacoder@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;