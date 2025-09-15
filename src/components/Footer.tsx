import Logo from "@/components/Logo";
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
                            <Logo 
                                variant="text" 
                                size="md" 
                                className="mb-6" 
                                showGlow={false}
                            />
                            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                                Precision-engineered digital solutions for
                                forward-thinking businesses. We build the
                                systems that power tomorrow's innovations.
                            </p>
                            <p className="text-sm text-muted-foreground/80">
                                © {currentYear} INVARITECH. All rights reserved.
                            </p>
                        </div>

                        {/* Services */}
                        <nav aria-label="Services navigation">
                            <h4 className="font-space-grotesk font-semibold text-foreground mb-6">
                                Services
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Backend Development",
                                    "Automation Solutions",
                                    "AI Agentic Systems",
                                    "E-Commerce Stores",
                                ].map((service) => (
                                    <li key={service}>
                                        <a
                                            href="#services"
                                            className="text-muted-foreground hover:text-primary transition-colors duration-300 link-jade"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const servicesSection =
                                                    document.getElementById(
                                                        "services"
                                                    );
                                                if (servicesSection) {
                                                    servicesSection.scrollIntoView(
                                                        { behavior: "smooth" }
                                                    );
                                                }
                                            }}
                                        >
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Company */}
                        <nav aria-label="Company navigation">
                            <h4 className="font-space-grotesk font-semibold text-foreground mb-6">
                                Company
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { name: "About", href: "#about" },
                                    {
                                        name: "Case Studies",
                                        href: "#case-studies",
                                    },
                                    { name: "Contact", href: "#contact" },
                                    {
                                        name: "Privacy Policy",
                                        href: "#privacy",
                                    },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-muted-foreground hover:text-primary transition-colors duration-300 link-jade flex items-center group"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (
                                                    item.name ===
                                                    "Privacy Policy"
                                                ) {
                                                    // For now, just show a toast - in a real app, this would go to a privacy policy page
                                                    alert(
                                                        "Privacy Policy page coming soon!"
                                                    );
                                                    return;
                                                }
                                                const section =
                                                    document.getElementById(
                                                        item.href.substring(1)
                                                    );
                                                if (section) {
                                                    section.scrollIntoView({
                                                        behavior: "smooth",
                                                    });
                                                }
                                            }}
                                        >
                                            {item.name}
                                            {item.name === "Case Studies" && (
                                                <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-border/20">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                                <span>Your Vision, Intelligently Executed</span>
                            </div>

                            <div className="flex items-center space-x-6">
                                <a
                                    href="mailto:hello@invaritech.ai"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                                >
                                    hello@invaritech.ai
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
