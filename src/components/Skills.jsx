import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Competitive Programming
  { name: "Data Structures & Algorithms", level: 90, category: "cp" },
  { name: "Problem Solving", level: 92, category: "cp" },
  { name: "C++", level: 90, category: "cp" },
  { name: "Java", level: 75, category: "cp" },
  { name: "Python", level: 70, category: "cp" },

  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 72, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "cp", "frontend", "backend", "tools"];

export const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2 rounded-full transition-all duration-300 capitalize cursor-pointer",
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-secondary/70 text-foreground hover:bg-primary/10 hover:scale-105 hover:shadow-md hover:border hover:border-primary/40"
            )}
          >
            {category}
          </button>


          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm transition-all duration-300 
                         hover:scale-105 hover:shadow-lg hover:border hover:border-primary/60"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
