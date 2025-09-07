import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow Solutions",
    content: "INVARITECH transformed our entire backend architecture. The level of precision and attention to detail is unmatched. Our system performance improved by 300%.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO, Luxe Commerce",
    content: "Working with INVARITECH was like having a team of senior engineers dedicated to our vision. They delivered beyond expectations, on time and on budget.",
    rating: 5
  },
  {
    name: "Dr. Emily Watson",
    role: "Founder, MedTech Innovations",
    content: "The AI automation solutions they built for us are game-changing. What used to take our team hours now happens automatically. Truly intelligent systems.",
    rating: 5
  }
];

const techStack = [
  { name: "AWS", icon: "☁️" },
  { name: "Python", icon: "🐍" },
  { name: "Node.js", icon: "🟢" },
  { name: "Shopify", icon: "🛒" },
  { name: "Zapier", icon: "⚡" },
  { name: "OpenAI", icon: "🤖" },
  { name: "React", icon: "⚛️" },
  { name: "PostgreSQL", icon: "🐘" }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/2 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            <span className="text-gradient-jade">Trusted</span> by Innovators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the leaders who've already transformed their businesses with INVARITECH
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`card-luxury fade-in fade-in-delay-${index + 1}`}
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border/30 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tech Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-space-grotesk font-semibold mb-8 text-muted-foreground">
            Powered by Industry-Leading Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full bg-card/30 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-300 fade-in fade-in-delay-${index + 1}`}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-foreground font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;