import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        project: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 2000));

            toast.success(
                "Thank you! Your project details have been sent successfully. We'll get back to you within 24 hours."
            );

            // Reset form
            setFormData({ name: "", email: "", project: "" });
        } catch (error) {
            toast.error(
                "Something went wrong. Please try again or contact us directly."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleConsultationClick = () => {
        toast.info("Redirecting to consultation booking...");
        // In a real app, this would redirect to a booking system
        setTimeout(() => {
            window.open(
                "mailto:hello@invaritech.ai?subject=Free Consultation Request",
                "_blank"
            );
        }, 1000);
    };

    return (
        <section
            id="contact"
            className="py-24 bg-background-secondary relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
                            Let's Build Your{" "}
                            <span className="text-gradient-jade">
                                Future System
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Ready to transform your business with
                            precision-engineered solutions? Let's discuss your
                            vision and make it reality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="card-luxury">
                            <h3 className="text-2xl font-space-grotesk font-semibold mb-8 text-foreground">
                                Start Your Project
                            </h3>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                                role="form"
                                aria-label="Project inquiry form"
                            >
                                <div>
                                    <Label
                                        htmlFor="name"
                                        className="text-foreground font-medium"
                                    >
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your full name"
                                        required
                                        aria-required="true"
                                        aria-describedby="name-help"
                                        className="mt-2 bg-input/50 border-border/30 focus:border-primary/50 transition-colors"
                                    />
                                    <div id="name-help" className="sr-only">
                                        Enter your full name for project
                                        communication
                                    </div>
                                </div>

                                <div>
                                    <Label
                                        htmlFor="email"
                                        className="text-foreground font-medium"
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="your@email.com"
                                        required
                                        aria-required="true"
                                        aria-describedby="email-help"
                                        className="mt-2 bg-input/50 border-border/30 focus:border-primary/50 transition-colors"
                                    />
                                    <div id="email-help" className="sr-only">
                                        Enter a valid email address for project
                                        communication
                                    </div>
                                </div>

                                <div>
                                    <Label
                                        htmlFor="project"
                                        className="text-foreground font-medium"
                                    >
                                        Project Description
                                    </Label>
                                    <Textarea
                                        id="project"
                                        value={formData.project}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your vision, challenges, and goals..."
                                        rows={6}
                                        required
                                        aria-required="true"
                                        aria-describedby="project-help"
                                        className="mt-2 bg-input/50 border-border/30 focus:border-primary/50 transition-colors resize-none"
                                    />
                                    <div id="project-help" className="sr-only">
                                        Describe your project requirements,
                                        challenges, and goals
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    aria-describedby="submit-status"
                                    className="btn-jade w-full text-lg py-3 h-auto rounded-lg font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Project Details"}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <div
                                    id="submit-status"
                                    className="sr-only"
                                    aria-live="polite"
                                >
                                    {isSubmitting
                                        ? "Submitting your project details..."
                                        : "Ready to submit"}
                                </div>
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
                                            <p className="text-foreground font-medium">
                                                Email
                                            </p>
                                            <p className="text-muted-foreground">
                                                hello@invaritech.ai
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-foreground font-medium">
                                                Phone
                                            </p>
                                            <p className="text-muted-foreground">
                                                +1 (555) 123-4567
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-foreground font-medium">
                                                Location
                                            </p>
                                            <p className="text-muted-foreground">
                                                Global Remote Team
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/10 to-secondary/5 p-8 rounded-xl border border-primary/20">
                                <h4 className="text-xl font-space-grotesk font-semibold mb-4 text-foreground">
                                    Ready to Start?
                                </h4>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Book a free 30-minute consultation to
                                    discuss your project requirements and
                                    discover how INVARITECH can accelerate your
                                    digital transformation.
                                </p>
                                <Button
                                    onClick={handleConsultationClick}
                                    className="btn-gold font-semibold"
                                >
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
