import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Doctor",
    period: "January 2024 – March 2024",
    description: "AI-powered virtual medical assistant providing preliminary diagnostic guidance through a conversational chatbot interface.",
    technologies: ["Python", "NLP", "Streamlit", "scikit-learn"],
    highlights: [
      "Integrated Natural Language Processing for symptom interpretation",
      "Designed user-friendly Streamlit web app",
      "Enhanced early-stage health awareness",
    ],
    color: "primary",
  },
  {
    title: "Ecom AI Comparison",
    period: "February 2025 – April 2025",
    description: "AI-powered e-commerce price comparison tool that scrapes product data from multiple websites for real-time price insights.",
    technologies: ["Python", "BeautifulSoup", "Requests", "NLP", "Streamlit"],
    highlights: [
      "Applied NLP to match similar products accurately",
      "Built interactive web app for real-time insights",
      "Automated price monitoring and comparison",
    ],
    color: "secondary",
  },
  {
    title: "Fake Job Detection",
    period: "March 2024 – May 2024",
    description: "Machine learning model to detect fake job postings using text-based features and classification algorithms.",
    technologies: ["Python", "Pandas", "scikit-learn", "NLP", "Streamlit"],
    highlights: [
      "Implemented Logistic Regression and Random Forest models",
      "Analyzed job descriptions for fraud indicators",
      "Deployed via Streamlit for real-time prediction",
    ],
    color: "accent",
  },
  {
    title: "MERN Realtime Chat App",
    period: "January 2024 – March 2024",
    description: "Real-time chat application enabling instant messaging between users with persistent chat history.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
    highlights: [
      "Bi-directional communication using Socket.io",
      "Built RESTful APIs for user authentication",
      "Designed responsive React frontend",
    ],
    color: "primary",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Building solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`
                group
                gradient-card
                border-${project.color}/20
                hover:border-${project.color}
                transition-smooth
                hover:-translate-y-2
                hover:shadow-2xl
                ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">{project.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Highlights:</h4>
                  <ul className="space-y-1 text-sm">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`text-${project.color} mr-2`}>▸</span>
                        <span className="text-foreground/70">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`
                        border-${project.color}/30
                        hover:bg-${project.color}/10
                        hover:border-${project.color}
                        transition-smooth
                      `}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;