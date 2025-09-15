import { CheckCircle, Target, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Precision-engineered solutions",
    description: "Every line of code crafted with meticulous attention to detail and performance."
  },
  {
    icon: TrendingUp,
    title: "Luxury-grade digital experiences",
    description: "Premium interfaces and seamless user journeys that set you apart from competitors."
  },
  {
    icon: CheckCircle,
    title: "Scalable systems that grow with your vision",
    description: "Architecture designed to evolve with your business from startup to enterprise."
  },
  {
    icon: Shield,
    title: "Trusted by innovators across industries",
    description: "Proven track record with forward-thinking companies worldwide."
  }
];

const WhyInvartech = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Why <span className="text-gradient-jade">INVARITECH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just build software—we engineer digital experiences that define the future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className={`flex items-start space-x-6 p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/20 hover:bg-card/50 transition-all duration-500 fade-in fade-in-delay-${index + 1}`}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-space-grotesk font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvartech;