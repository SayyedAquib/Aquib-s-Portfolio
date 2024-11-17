import { EXPERIENCE } from "../utils/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// eslint-disable-next-line react/prop-types
const Experience = ({ experienceRef }) => {
  return (
    <section
      ref={experienceRef}
      id="experience"
      className="py-20 md:py-24 lg:py-20"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
          Professional Experience
        </h2>
        <div className="mt-8 space-y-8">
          {EXPERIENCE.map(
            (
              { title, company, location, duration, responsibilities },
              index
            ) => (
              <Card key={index} className="bg-gray-800 text-gray-100">
                <CardHeader>
                  <CardTitle className="text-white">{title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {company} | {location} | {duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2 text-gray-300">
                    {responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
