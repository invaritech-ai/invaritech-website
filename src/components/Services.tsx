import { Server, Zap, Brain, ShoppingBag } from "lucide-react";

const services = [
    {
        icon: Server,
        title: "Backend Development",
        description:
            "Scalable, robust APIs and databases engineered for performance and reliability.",
    },
    {
        icon: Zap,
        title: "Automation",
        description:
            "Smart workflows that save time and cut costs through intelligent process optimization.",
    },
    {
        icon: Brain,
        title: "AI Agentic Solutions",
        description:
            "Intelligent assistants and autonomous business workflows powered by cutting-edge AI.",
    },
    {
        icon: ShoppingBag,
        title: "E-Commerce Stores",
        description:
            "Bespoke, performance-driven Shopify & custom builds that convert visitors to customers.",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="py-24 bg-background-secondary relative"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
                        <span className="text-gradient-jade">What We Do</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We craft premium digital solutions that transform your
                        business operations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`card-luxury fade-in fade-in-delay-${
                                index + 1
                            } group`}
                        >
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                    <service.icon className="w-8 h-8 text-primary" />
                                </div>
                            </div>

                            <h3 className="text-xl font-space-grotesk font-semibold mb-4 text-foreground">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
