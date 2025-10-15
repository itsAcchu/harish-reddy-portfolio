import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer | AI Enthusiast | Creative Problem Solver";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Hi, I'm Harish Reddy 👋
          </h1>
        </div>

        <div className="animate-fade-in-up min-h-[60px] mb-8" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="animate-fade-in-up flex gap-4 justify-center mb-12" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://www.linkedin.com/in/itsacchu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth animate-float hover:glow-primary"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.github.com/itsAcchu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth animate-float hover:glow-primary"
            style={{ animationDelay: "0.2s" }}
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:harishreddy.workmail@gmail.com"
            className="p-4 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth animate-float hover:glow-primary"
            style={{ animationDelay: "0.4s" }}
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="animate-fade-in-up flex gap-4 justify-center" style={{ animationDelay: "0.7s" }}>
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-smooth"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            Get In Touch
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;