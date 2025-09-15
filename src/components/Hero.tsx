import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { toast } from "sonner";

const Hero = () => {
    const handleGetStartedClick = () => {
        // Scroll to contact section
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        } else {
            toast.info("Scroll down to the contact section to get started!");
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center hero-bg grid-pattern overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-radial opacity-60" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />

            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="fade-in flex justify-center">
                    <Logo
                        variant="image"
                        size="lg"
                        className="mb-12"
                        showGlow={true}
                    />
                </div>

                <h1 className="fade-in fade-in-delay-1 text-6xl md:text-8xl font-space-grotesk font-bold mb-8 tracking-tight">
                    <span className="text-gradient-jade">Your Vision,</span>
                    <br />
                    <span className="text-foreground">
                        Intelligently Executed
                    </span>
                </h1>

                <p className="fade-in fade-in-delay-2 text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto font-inter font-light">
                    Backend Systems. Automation. AI Agents. Premium E-Commerce.
                </p>

                <p className="fade-in fade-in-delay-3 text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
                    Precision-engineered solutions for forward-thinking
                    businesses.
                </p>

                <div className="fade-in fade-in-delay-4">
                    <Button
                        onClick={handleGetStartedClick}
                        className="btn-jade text-lg px-10 py-4 h-auto rounded-full font-semibold"
                        aria-label="Start your project today - scroll to contact section"
                    >
                        Start Your Project Today
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
