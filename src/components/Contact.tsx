import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Let's Build Something Cool Together 💻💬
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Have a project in mind? Let's connect and make it happen!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
            <Card className="p-6 gradient-card border-primary/20 hover:border-primary transition-smooth">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:harishreddy.workmail@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    harishreddy.workmail@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card border-secondary/20 hover:border-secondary transition-smooth">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-secondary/10">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href="tel:+917022977720"
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    +91 70229 77720
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card border-accent/20 hover:border-accent transition-smooth">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm text-muted-foreground">Bengaluru, India</p>
                </div>
              </div>
            </Card>

            <div className="flex gap-4 justify-center pt-4">
              <a
                href="https://www.linkedin.com/in/itsacchu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth glow-primary"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.github.com/itsAcchu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth glow-primary"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <Card className={`p-8 gradient-card border-primary/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-primary/20 focus:border-primary transition-smooth"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-primary/20 focus:border-primary transition-smooth"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-primary/20 focus:border-primary transition-smooth resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-smooth"
              >
                Send Message 🚀
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;