import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Award, Trophy, Users, BookOpen } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Participant",
    description: "8-hour Hackathon at Vemana IT - Rapid problem-solving and team-based coding challenges",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "TED Talks Attendee",
    description: "IEEE sessions at Vemana IT - Insights into innovation and tech leadership",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Digital India Organizer",
    description: "Awareness program with ISTE - Promoting digital literacy and national initiatives",
    color: "accent",
  },
  {
    icon: Award,
    title: "Technical Quiz",
    description: "Basic Science & Humanities Department - ISTE association technical competition",
    color: "primary",
  },
];

const Achievements = () => {
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
    <section id="achievements" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Achievements & Activities
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Beyond code - continuous learning and community engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={achievement.title}
                className={`
                  p-6
                  text-center
                  gradient-card
                  border-${achievement.color}/20
                  hover:border-${achievement.color}
                  transition-smooth
                  hover:-translate-y-3
                  hover:shadow-xl
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full bg-${achievement.color}/10 animate-glow`}>
                    <Icon className={`w-8 h-8 text-${achievement.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;