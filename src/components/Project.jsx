import { PROJECTS } from "../utils/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line react/prop-types
const Project = ({ projectsRef }) => {
  return (
    <section
      ref={projectsRef}
      id="projects"
      className="py-20 md:py-24 lg:py-20"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
          Projects
        </h2>
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col bg-gray-800 text-gray-100"
            >
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="object-fit w-full h-[200px] rounded-lg"
                />
                <CardTitle className="mt-4 text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc pl-5 space-y-1">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-gray-300">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="w-full sm:w-1/2 bg-gray-700 text-gray-200 hover:bg-gray-600"
                  asChild
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-1/2 bg-gray-700 text-gray-200 hover:bg-gray-600"
                  asChild
                >
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project