import { ArrowUpRight, Clock, TrendingUp, Zap } from "lucide-react";

const caseStudies = [
  {
    icon: TrendingUp,
    metric: "40%",
    improvement: "faster transactions",
    description: "Optimized checkout → 40% faster transactions for e-commerce brand.",
    details: "Revolutionary payment optimization that transformed user experience"
  },
  {
    icon: Zap,
    metric: "35%",
    improvement: "autonomous lead handling",
    description: "Custom AI sales agent handling 35% of inbound leads autonomously.",
    details: "Intelligent automation that never sleeps, never misses a lead"
  },
  {
    icon: Clock,
    metric: "80%",
    improvement: "processing time reduction",
    description: "Automated finance pipeline → cut processing time by 80%.",
    details: "Streamlined operations that scale with business growth"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-background-secondary relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            <span className="text-gradient-jade">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results for real businesses. See how we've transformed operations across industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div 
              key={study.metric}
              className={`card-luxury group fade-in fade-in-delay-${index + 1}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <study.icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-4xl font-space-grotesk font-bold text-gradient-jade">
                    {study.metric}
                  </span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wide">
                    {study.improvement}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {study.description}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {study.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;