import { SKILLS } from "../utils/data";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// eslint-disable-next-line react/prop-types
const Skill = ({ skillsRef }) => {
  return (
    <section
      ref={skillsRef}
      id="skills"
      className="py-20 md:py-24 lg:py-20"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
          Skills
        </h2>
        <div className="grid gap-4 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {SKILLS.map((skill) => (
            <Card key={skill} className="bg-gray-800 text-gray-100">
              <CardHeader>
                <CardTitle className="text-white">{skill}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill