import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Sparkles } from "lucide-react";

const About = () => {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 bg-muted/30"
    >
      <div className="container mx-auto max-w-5xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A curious mind with a passion for turning ideas into reality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className={`p-6 gradient-card border-primary/20 hover:border-primary transition-smooth hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/10 animate-glow">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Education</h3>
            <p className="text-muted-foreground text-center">
              B.Tech in <span className="text-primary font-medium">Artificial Intelligence & Machine Learning</span>
              <br />
              <span className="text-sm">Vemana Institute of Technology, Bengaluru</span>
            </p>
          </Card>

          <Card className={`p-6 gradient-card border-secondary/20 hover:border-secondary transition-smooth hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-secondary/10 glow-secondary">
                <Code className="w-8 h-8 text-secondary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Journey</h3>
            <p className="text-muted-foreground text-center">
              My journey began with <span className="text-secondary font-medium">Scratch programming</span>, sparking a deep interest in building web applications and solving complex problems through code.
            </p>
          </Card>

          <Card className={`p-6 gradient-card border-accent/20 hover:border-accent transition-smooth hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-accent/10">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Passion</h3>
            <p className="text-muted-foreground text-center">
              <span className="text-accent font-medium">Self-driven</span> and passionate about contributing to real-world software development challenges with a fresh perspective and strong technical foundation.
            </p>
          </Card>
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            I bring a unique blend of <span className="text-primary font-semibold">AI/ML expertise</span>, 
            <span className="text-secondary font-semibold"> full-stack development skills</span>, and 
            <span className="text-accent font-semibold"> creative problem-solving</span> to every project. 
            My goal is to build innovative solutions that make a real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;