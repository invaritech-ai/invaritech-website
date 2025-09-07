import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              Let's Build Your <span className="text-gradient-jade">Future System</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with precision-engineered solutions? 
              Let's discuss your vision and make it reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="card-luxury">
              <h3 className="text-2xl font-space-grotesk font-semibold mb-8 text-foreground">
                Start Your Project
              </h3>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input 
                    id="name"
                    placeholder="Your full name"
                    className="mt-2 bg-input/50 border-border/30 focus:border-primary/50 transition-colors"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-2 bg-input/50 border-border/30 focus:border-primary/50 transition-colors"
                  />
                </div>
                
                <div>
                  <Label htmlFor="project" className="text-foreground font-medium">Project Description</Label>
                  <Textarea 
                    id="project"
                    placeholder="Tell us about your vision, challenges, and goals..."
                    rows={6}
                    className="mt-2 bg-input/50 border-border/30 focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-jade w-full text-lg py-3 h-auto rounded-lg font-semibold group"
                >
                  Send Project Details
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
            
            {/* Contact Info & CTA */}
            <div className="space-y-8">
              <div className="card-luxury">
                <h3 className="text-2xl font-space-grotesk font-semibold mb-6 text-foreground">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Email</p>
                      <p className="text-muted-foreground">hello@invaritech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Location</p>
                      <p className="text-muted-foreground">Global Remote Team</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-secondary/5 p-8 rounded-xl border border-primary/20">
                <h4 className="text-xl font-space-grotesk font-semibold mb-4 text-foreground">
                  Ready to Start?
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Book a free 30-minute consultation to discuss your project requirements 
                  and discover how INVARITECH can accelerate your digital transformation.
                </p>
                <Button className="btn-gold font-semibold">
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;