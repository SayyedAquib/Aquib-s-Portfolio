import { ABOUT } from "../utils/data";

// eslint-disable-next-line react/prop-types
const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} id="about" className="py-20 md:py-24 lg:py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
          {ABOUT.title}
        </h2>
        <div className="space-y-6 text-gray-400 md:text-lg">
          {ABOUT.introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {ABOUT.whatIDo.title}
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {ABOUT.whatIDo.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {ABOUT.keyHighlights.title}
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {ABOUT.keyHighlights.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {ABOUT.conclusion.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
