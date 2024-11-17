"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import NavButton from "./NavButton";
import Footer from "./Footer";
import About from "./About";
import Experience from "./Experience";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import { RESUME_LINK, HEADING } from "../utils/data";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const navItems = [
    { label: "About", ref: aboutRef },
    { label: "Experience", ref: experienceRef },
    { label: "Skills", ref: skillsRef },
    { label: "Projects", ref: projectsRef },
    { label: "Contact", ref: contactRef },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const scrollToSection = (ref) => {
    setIsMenuOpen(false);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-14 items-center justify-between">
          
          {/* Laptop */}
          <div className="mx-5 hidden md:flex md:w-full md:justify-between items-center">
            <p
              onClick={() => scrollToSection(heroRef)}
              className="flex items-center space-x-2 cursor-pointer text-indigo-700"
            >
              <span className="hidden font-bold text-2xl sm:inline-block">
                {HEADING}
              </span>
            </p>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navItems.map(({ label, ref }) => (
                <NavButton key={label} onClick={() => scrollToSection(ref)}>
                  {label}
                </NavButton>
              ))}
            </nav>
          </div>

          {/* Mobile */}
          <div className="flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md bg-white ml-2 p-2 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <p
              onClick={() => scrollToSection(heroRef)}
              className="-m-1.5 p-1.5 ml-1 text-indigo-700"
            >
              <span className="font-bold">{HEADING}</span>
            </p>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 left-0 z-50 w-3/4 overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800">
            <div className="flex items-center justify-between">
              <p
                onClick={() => scrollToSection(heroRef)}
                className="-m-1.5 p-1.5 text-indigo-700"
              >
                <span className="font-bold">{HEADING}</span>
              </p>
              <button
                onClick={toggleMenu}
                className="-m-2.5 rounded-md p-2.5 bg-white text-gray-400 hover:text-gray-200"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-800">
                <div className="space-y-2 grid w-fit mx-auto py-6">
                  {navItems.map(({ label, ref }) => (
                    <NavButton
                      key={label}
                      onClick={() => scrollToSection(ref)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-800"
                    >
                      {label}
                    </NavButton>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section
          ref={heroRef}
          id="hero"
          className="py-32 md:py-24 lg:py-28 xl:py-40"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Aquib Sayyed
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Software Engineer with approximately 1.5 years of experience
                  in Frontend Development (React) and Immediate Joiner.
                </p>
              </div>
              <div className=" flex flex-wrap justify-center gap-4">
                <Button onClick={() => scrollToSection(contactRef)}>
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection(projectsRef)}
                >
                  View Projects
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={RESUME_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <About aboutRef={aboutRef} />

        <Experience experienceRef={experienceRef} />

        <Skill skillsRef={skillsRef} />

        <Project projectsRef={projectsRef} />

        <Contact contactRef={contactRef} />
      </main>

      <Footer />
    </div>
  );
}
