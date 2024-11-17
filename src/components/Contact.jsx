import { Github, Linkedin, Mail, X, Phone } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Contact = ({ contactRef }) => {
  return (
    <section
      ref={contactRef}
      id="contact"
      className="py-20 md:py-24 lg:py-28 bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:sayyed.aquib89@gmail.com"
                target="_blank"
                className="flex items-center space-x-3 text-gray-200 hover:text-gray-100 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>sayyed.aquib89@gmail.com</span>
              </a>
              <a
                href="tel:+919766188241"
                target="_blank"
                className="flex items-center space-x-3 text-gray-200 hover:text-gray-100 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>+919766188241</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex space-x-4 w-full justify-center md:justify-end">
              <a
                href="https://x.com/Sayyed_Aquibb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-gray-200 p-3 rounded-full hover:bg-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sayyedaquib/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-gray-200 p-3 rounded-full hover:bg-gray-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/SayyedAquib"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-gray-200 p-3 rounded-full hover:bg-gray-600 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
