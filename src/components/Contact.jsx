import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k69gi4o",
        "template_vjwexu9",
        form.current,
        "sX2X15_NNTXgpSspW"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Have an opportunity or project in mind? Send me a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="bg-zinc-900 p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400 transition">
              <h3 className="text-cyan-400 text-xl font-semibold">
                📧 Email
              </h3>
              <p className="text-gray-400 mt-2">
                thedivacoder@gmail.com
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400 transition">
              <h3 className="text-cyan-400 text-xl font-semibold">
                💻 GitHub
              </h3>
              <a
                href="https://github.com/thedivacoder"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                github.com/thedivacoder
              </a>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400 transition">
              <h3 className="text-cyan-400 text-xl font-semibold">
                🔗 LinkedIn
              </h3>
              <a
                href="https://linkedin.com/in/divakartheias"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                linkedin.com/in/divakartheias
              </a>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400 transition">
              <h3 className="text-cyan-400 text-xl font-semibold">
                📸 Instagram
              </h3>
              <a
                href="https://instagram.com/thedivacoder"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                @thedivacoder
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-zinc-900 p-8 rounded-2xl border border-cyan-400/20"
          >
            <h3 className="text-2xl font-bold mb-6">
              Send Me a Message
            </h3>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 mb-4 rounded-xl bg-black border border-gray-700 focus:border-cyan-400 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 mb-4 rounded-xl bg-black border border-gray-700 focus:border-cyan-400 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 mb-4 rounded-xl bg-black border border-gray-700 focus:border-cyan-400 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;