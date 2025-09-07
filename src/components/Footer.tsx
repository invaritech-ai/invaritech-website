import logo from "@/assets/invaritech-logo.png";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <img 
                src={logo} 
                alt="INVARITECH" 
                className="h-12 w-auto mb-6"
              />
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Precision-engineered digital solutions for forward-thinking businesses. 
                We build the systems that power tomorrow's innovations.
              </p>
              <p className="text-sm text-muted-foreground/80">
                © {currentYear} INVARITECH. All rights reserved.
              </p>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-space-grotesk font-semibold text-foreground mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  "Backend Development",
                  "Automation Solutions", 
                  "AI Agentic Systems",
                  "E-Commerce Stores"
                ].map((service) => (
                  <li key={service}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 link-jade"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-space-grotesk font-semibold text-foreground mb-6">Company</h4>
              <ul className="space-y-3">
                {[
                  { name: "About", href: "#" },
                  { name: "Case Studies", href: "#" },
                  { name: "Contact", href: "#" },
                  { name: "Privacy Policy", href: "#" }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 link-jade flex items-center group"
                    >
                      {item.name}
                      {item.name === "Case Studies" && (
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <span>Your Vision, Intelligently Executed</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="mailto:hello@invaritech.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  hello@invaritech.com
                </a>
                <a 
                  href="tel:+15551234567"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;