
import { useRef } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, HardDrive, Network, Server, Computer, Monitor, Cpu, Shield, Settings, Check, ArrowUpRight, Image, GalleryHorizontal } from "lucide-react";
import ParticlesBackground from "@/components/hero/ParticlesBackground";
import { HeroSection } from "@/components/hero/HeroSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
    const servicesRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    const scrollToServices = () => {
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <MainLayout>
            {/* Particles Background */}
            <ParticlesBackground />

            {/* Hero Section */}
            <HeroSection
                scrollToServices={scrollToServices}
                scrollToContact={scrollToContact}
            />

            {/* Company Intro */}
            <section className="py-20 bg-slate-800 relative overflow-hidden">
                <div className="absolute -top-10 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-green-900/10 rounded-full blur-3xl"></div>

                {/* Circuit board pattern overlay - subtle */}
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="circuit-intro" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M0 50 H100 M50 0 V100 M25 25 H75 M25 75 H75" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            <circle cx="50" cy="50" r="3" fill="currentColor" />
                            <circle cx="25" cy="25" r="2" fill="currentColor" />
                            <circle cx="75" cy="75" r="2" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuit-intro)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full animate-pulse-slow"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6 animate-fade-in">Premium Hardware Solutions for Your Business</h2>
                        <p className="text-xl text-gray-300 text-center mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
                            RJA Computer System & Hardware Trading LLC delivers top-tier computing infrastructure tailored for business-critical operations. We specialize in high-performance servers, advanced workstations, networking solutions, and essential IT components. Our commitment to quality ensures that your business runs on a stable, efficient, and future-ready foundation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-slate-700/50 backdrop-blur-md p-8 rounded-xl border border-slate-600/50 transition-transform duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "300ms" }}>
                                <div className="flex items-center mb-4">
                                    <Server className="h-8 w-8 mr-3 text-blue-400" />
                                    <h3 className="text-xl font-semibold text-blue-400">Hardware Excellence</h3>
                                </div>
                                <p className="text-gray-300">
                                    We supply enterprise-grade computer hardware sourced from globally trusted manufacturers. Each component undergoes rigorous testing to ensure it meets stringent standards for performance, durability, and reliability—supporting mission-critical operations with confidence.
                                </p>
                            </div>
                            <div className="bg-slate-700/50 backdrop-blur-md p-8 rounded-xl border border-slate-600/50 transition-transform duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "400ms" }}>
                                <div className="flex items-center mb-4">
                                    <Cpu className="h-8 w-8 mr-3 text-green-400" />
                                    <h3 className="text-xl font-semibold text-green-400">Technical Expertise</h3>
                                </div>
                                <p className="text-gray-300">
                                    Our certified hardware professionals provide expert guidance in selecting the right components for your business. From configuration to compatibility, we ensure your IT infrastructure is built for efficiency, stability, and long-term performance.
                                </p>
                            </div>
                        </div>

                        <div className="text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
                            <Button asChild variant="outline" className="text-blue-400 border-blue-600/50 hover:bg-blue-900/20">
                                <Link to="/about" className="flex items-center">
                                    Discover Our Hardware Range <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section ref={galleryRef} className="py-20 bg-slate-900 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="circuit-gallery" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M0 20 H100 M20 0 V100" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                            <circle cx="20" cy="20" r="2" fill="currentColor" />
                            <circle cx="60" cy="60" r="2" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuit-gallery)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10 mb-12">
                    <div className="max-w-4xl mx-auto mb-12 text-center">
                        <div className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-700/50">
                            Hardware Gallery
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">Explore Our Premium Hardware</h2>
                        <p className="text-xl text-gray-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
                            View our range of high-performance computer hardware and networking solutions designed for enterprise environments.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Carousel
                            opts={{ align: "start", loop: true }}
                            className="w-full"
                        >
                            <CarouselContent>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="border-slate-700/50 bg-slate-800/50 overflow-hidden">
                                            <div className="relative aspect-square overflow-hidden">
                                                <img
                                                    src="/images/server.jpg"
                                                    alt="Server Hardware"
                                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                                                    <div className="p-4 w-full">
                                                        <h3 className="text-lg font-semibold text-white">Enterprise Servers</h3>
                                                        <p className="text-sm text-gray-300">High-performance rack servers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="border-slate-700/50 bg-slate-800/50 overflow-hidden">
                                            <div className="relative aspect-square overflow-hidden">
                                                <img
                                                    src="/images/storage.jpg"
                                                    alt="Storage Solutions"
                                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                                                    <div className="p-4 w-full">
                                                        <h3 className="text-lg font-semibold text-white">Storage Solutions</h3>
                                                        <p className="text-sm text-gray-300">Enterprise-grade storage systems</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="border-slate-700/50 bg-slate-800/50 overflow-hidden">
                                            <div className="relative aspect-square overflow-hidden">
                                                <img
                                                    src="/images/network.jpg"
                                                    alt="Networking Equipment"
                                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                                                    <div className="p-4 w-full">
                                                        <h3 className="text-lg font-semibold text-white">Networking</h3>
                                                        <p className="text-sm text-gray-300">Enterprise networking solutions</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="border-slate-700/50 bg-slate-800/50 overflow-hidden">
                                            <div className="relative aspect-square overflow-hidden">
                                                <img
                                                    src="/images/cpu.jpg"
                                                    alt="CPU and Processing"
                                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                                                    <div className="p-4 w-full">
                                                        <h3 className="text-lg font-semibold text-white">Processing Power</h3>
                                                        <p className="text-sm text-gray-300">High-performance CPUs</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="border-slate-700/50 bg-slate-800/50 overflow-hidden">
                                            <div className="relative aspect-square overflow-hidden">
                                                <img
                                                    src="/images/monitor.jpg"
                                                    alt="Display Solutions"
                                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                                                    <div className="p-4 w-full">
                                                        <h3 className="text-lg font-semibold text-white">Display Solutions</h3>
                                                        <p className="text-sm text-gray-300">Professional monitors</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="border-slate-700/50 bg-slate-800/50 overflow-hidden">
                                            <div className="relative aspect-square overflow-hidden">
                                                <img
                                                    src="/images/peripheral.jpg"
                                                    alt="Peripherals"
                                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                                                    <div className="p-4 w-full">
                                                        <h3 className="text-lg font-semibold text-white">Peripherals</h3>
                                                        <p className="text-sm text-gray-300">Keyboards, mice and more</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <div className="flex justify-center mt-8">
                                <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
                                <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
                            </div>
                        </Carousel>

                        <div className="text-center mt-8">
                            <Button asChild className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                                <Link to="/products" className="flex items-center">
                                    View All Products <GalleryHorizontal className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section ref={featuresRef} className="py-16 bg-slate-900 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-900/20 rounded-full blur-3xl"></div>

                {/* Animated circuit board pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="circuit-features" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <path d="M0 100 H200 M100 0 V200 M50 50 H150 M50 150 H150" stroke="currentColor" strokeWidth="1" fill="none" />
                            <circle cx="100" cy="100" r="5" fill="currentColor" />
                            <circle cx="50" cy="50" r="3" fill="currentColor" />
                            <circle cx="150" cy="150" r="3" fill="currentColor" />
                            <circle cx="150" cy="50" r="3" fill="currentColor" />
                            <circle cx="50" cy="150" r="3" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuit-features)">
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                from="0 0"
                                to="200 0"
                                begin="0s"
                                dur="40s"
                                repeatCount="indefinite"
                            />
                        </rect>
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto mb-12 text-center">
                        <div className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-700/50 animate-pulse-slow">
                            Why Choose RJA Hardware
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">Superior Hardware Solutions</h2>
                        <p className="text-xl text-gray-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
                            We deliver enterprise-grade hardware with expert technical support that powers your business infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <FeatureCard
                            title="Premium Hardware Brands"
                            description="Authorized dealer of top-tier hardware manufacturers including HP, Dell, Cisco, and more."
                            icon={<Computer className="h-6 w-6" />}
                            delay={100}
                            color="blue"
                        />
                        <FeatureCard
                            title="Data Networks and Wireless Solutions"
                            description="⁠⁠Plan, Design & Install Wireless Networks • Wi-Fi Site Surveys • Monitor, Maintain & Upgrade Networks"
                            icon={<Settings className="h-6 w-6" />}
                            delay={200}
                            color="green"
                        />
                        <FeatureCard
                            title="Performance Guaranteed"
                            description="Every system is meticulously tested and verified for optimal performance and reliability."
                            icon={<Check className="h-6 w-6" />}
                            delay={300}
                            color="purple"
                        />
                        <FeatureCard
                            title="Technical Support"
                            description="Expert hardware specialists available to assist with installation, troubleshooting, and maintenance."
                            icon={<Shield className="h-6 w-6" />}
                            delay={400}
                            color="indigo"
                        />
                        <FeatureCard
                            title="Enterprise Solutions"
                            description="Scalable hardware infrastructure designed for businesses of all sizes, from startups to enterprises."
                            icon={<Network className="h-6 w-6" />}
                            delay={500}
                            color="cyan"
                        />
                        <FeatureCard
                            title="Competitive Pricing"
                            description="Direct relationships with manufacturers allow us to offer premium hardware at competitive rates."
                            icon={<Cpu className="h-6 w-6" />}
                            delay={600}
                            color="emerald"
                        />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section ref={servicesRef} className="py-16 bg-slate-800 relative overflow-hidden" id="services">
                {/* Animated hardware pattern background */}
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="hardware-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <rect width="40" height="40" fill="none"></rect>
                            <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#hardware-pattern)">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 50 50"
                                to="360 50 50"
                                dur="240s"
                                repeatCount="indefinite"
                            />
                        </rect>
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto mb-12 text-center">
                        <div className="inline-block px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm font-medium mb-4 border border-green-700/50">
                            Our Hardware Products
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Premium Computer Hardware</h2>
                        <p className="text-xl text-gray-300">
                            Enterprise-grade hardware solutions to power your business operations and IT infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Workstations & Desktops"
                            description="High-performance workstations and desktop computers engineered for professional environments."
                            icon={<Computer className="h-10 w-10" />}
                            delay={100}
                        />
                        <ServiceCard
                            title="Servers & Storage"
                            description="Enterprise-grade servers and storage solutions for mission-critical applications and data."
                            icon={<Server className="h-10 w-10" />}
                            delay={200}
                        />
                        <ServiceCard
                            title="Networking Hardware"
                            description="Complete networking infrastructure including routers, switches, and wireless solutions."
                            icon={<Network className="h-10 w-10" />}
                            delay={300}
                        />
                        <ServiceCard
                            title="Components & Parts"
                            description="Premium computer components including CPUs, motherboards, memory, and graphics cards."
                            icon={<Cpu className="h-10 w-10" />}
                            delay={400}
                        />
                        <ServiceCard
                            title="Display Technologies"
                            description="Professional monitors, displays, and digital signage solutions for every business need."
                            icon={<Monitor className="h-10 w-10" />}
                            delay={500}
                        />
                        <ServiceCard
                            title="Storage Solutions"
                            description="Enterprise storage hardware including SSDs, HDDs, NAS, and backup systems."
                            icon={<HardDrive className="h-10 w-10" />}
                            delay={600}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={contactRef} className="py-20 bg-gradient-to-r from-blue-900 to-green-900 text-white relative overflow-hidden" id="contact">
                {/* Hardware-inspired decorative elements */}
                <div className="absolute top-0 left-0 w-full h-20 opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,0 L0,100 L1000,100 L1000,0 L0,0 Z" fill="none" stroke="white" strokeWidth="2"></path>
                        {[...Array(20)].map((_, i) => (
                            <rect key={i} x={i * 50} y="0" width="2" height="30" fill="white" />
                        ))}
                        {[...Array(10)].map((_, i) => (
                            <circle key={i} cx={i * 100 + 50} cy="50" r="5" fill="white" />
                        ))}
                    </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-20 opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,0 L0,100 L1000,100 L1000,0 L0,0 Z" fill="none" stroke="white" strokeWidth="2"></path>
                        {[...Array(20)].map((_, i) => (
                            <rect key={i} x={i * 50} y="70" width="2" height="30" fill="white" />
                        ))}
                        {[...Array(10)].map((_, i) => (
                            <circle key={i} cx={i * 100 + 50} cy="50" r="5" fill="white" />
                        ))}
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Upgrade Your Hardware?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
                            Contact our team of hardware experts today and discover the perfect technology solutions for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
                            <Button asChild size="lg" variant="secondary" className="px-8 shadow-lg transform hover:scale-105 transition-all duration-300 bg-white text-blue-900 hover:bg-gray-100">
                                <Link to="/contact">Get Hardware Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="px-8 bg-transparent border-2 border-white text-white hover:bg-white/10">
                                <Link to="/contact">Schedule a Consultation</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

// Feature Card Component
interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    delay: number;
    color: "blue" | "green" | "purple" | "indigo" | "cyan" | "emerald";
}

const FeatureCard = ({ title, description, icon, delay, color }: FeatureCardProps) => {
    const colorStyles = {
        blue: "bg-blue-900/30 border-blue-700/30 text-blue-400",
        green: "bg-green-900/30 border-green-700/30 text-green-400",
        purple: "bg-purple-900/30 border-purple-700/30 text-purple-400",
        indigo: "bg-indigo-900/30 border-indigo-700/30 text-indigo-400",
        cyan: "bg-cyan-900/30 border-cyan-700/30 text-cyan-400",
        emerald: "bg-emerald-900/30 border-emerald-700/30 text-emerald-400"
    }

    return (
        <div
            className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-900/20 animate-fade-in group"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className={`h-12 w-12 rounded-lg ${colorStyles[color]} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-blue-400">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
};

// Service Card Component
interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => (
    <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-slate-700/50 border-slate-600/50 animate-fade-in overflow-hidden group relative" style={{ animationDelay: `${delay}ms` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardContent className="p-6 relative z-10">
            <div className="mb-4 text-blue-400 transition-all duration-300 transform group-hover:scale-110 group-hover:text-blue-300">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-blue-300">{title}</h3>
            <p className="text-gray-300">{description}</p>

            <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-green-500 group-hover:w-full transition-all duration-500"></div>
        </CardContent>
    </Card>
);

export default Index;
