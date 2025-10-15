import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
    color: "primary",
  },
  {
    title: "Frameworks & Libraries",
    skills: ["ReactJS", "ExpressJS", "Pandas", "scikit-learn", "NumPy", "Matplotlib", "Seaborn"],
    color: "secondary",
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
    color: "accent",
  },
  {
    title: "Tools & Platforms",
    skills: ["Postman", "Tableau", "Power BI", "Jupyter", "VS Code", "GitHub"],
    color: "primary",
  },
  {
    title: "AI & ML",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "NLP", "Reinforcement Learning"],
    color: "secondary",
  },
  {
    title: "Soft Skills",
    skills: ["Fast Learner", "Problem Solving", "Team Collaboration", "Communication"],
    color: "accent",
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            A diverse toolkit for building innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className={`text-xl font-semibold mb-4 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`
                      px-4 py-2 text-sm
                      border-${category.color}/30
                      hover:border-${category.color}
                      hover:bg-${category.color}/10
                      hover:glow-${category.color === 'primary' ? 'primary' : 'secondary'}
                      transition-smooth
                      cursor-default
                      hover:-translate-y-1
                    `}
                    style={{
                      transitionDelay: `${skillIndex * 0.05}s`,
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;