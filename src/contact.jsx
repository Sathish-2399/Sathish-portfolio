import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 px-4 md:px-6 bg-gray-900 relative z-20 animate-fade">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 gradient-text">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Let's Connect</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects,
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <a href="mailto:2312099@nec.edu.in" className="text-blue-600 hover:text-blue-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <p className="text-white-400 hover:text-white-600">2312099@nec.edu.in</p>
                {/* <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm md:text-base text-gray-300">2312099@nec.edu.in</span> */}
              </div>
              <div className="flex items-center gap-3">
                <a href="https://github.com/Sathish-2399" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                  <p className="text-white-400 hover:text-white-600">GitHub</p>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span className="text-sm md:text-base text-gray-300">linkedin.com/in/sathish-b-cse</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Send a Message</h3>
            <form 
              action="https://formspree.io/f/xdkqlovp"
              method="POST"
              className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-gray-700/50 border border-gray-600 text-white placeholder:text-gray-400 rounded-md px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-gray-700/50 border border-gray-600 text-white placeholder:text-gray-400 rounded-md px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full bg-gray-700/50 border border-gray-600 text-white placeholder:text-gray-400 rounded-md px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 md:py-3 rounded-md transition-colors text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
