import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Award, Users, Star, CheckCircle, ArrowRight, ShieldCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { toast } from "@/components/ui/sonner";

const About = () => {
    // Refs for animated elements
    const heroRef = useRef<HTMLDivElement>(null);
    const historyRef = useRef<HTMLDivElement>(null);
    const valuesRef = useRef<HTMLDivElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const refs = [heroRef, historyRef, valuesRef, missionRef, featuresRef];
        refs.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            refs.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    const handleDownload = () => {
        try {
            // Create blob with sample content
            const projectData = {
                name: "RJA Networks",
                version: "1.0.0",
                description: "Premium hardware solutions"
            };

            // In a real implementation, this would be the actual project files
            const fileContent = JSON.stringify(projectData, null, 2);
            const blob = new Blob([fileContent], { type: 'application/json' });

            // Create download link
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'RJA-networks-project.zip';
            document.body.appendChild(link);
            link.click();

            // Clean up
            URL.revokeObjectURL(url);
            document.body.removeChild(link);

            toast.success("Download started successfully", {
                description: "Your project files will be downloaded shortly."
            });
        } catch (error) {
            toast.error("Download failed", {
                description: "There was a problem generating the download."
            });
        }
    };

    return (
        <MainLayout>
            {/* Hero Section with Circuit Board Background */}
            <section className="relative overflow-hidden py-20 bg-slate-900">
                {/* Circuit board pattern background */}
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="circuit-about" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M0 50 H100 M50 0 V100 M25 25 H75 M25 75 H75" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            <circle cx="50" cy="50" r="3" fill="currentColor" />
                            <circle cx="25" cy="25" r="2" fill="currentColor" />
                            <circle cx="75" cy="75" r="2" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuit-about)" />
                    </svg>
                </div>

                {/* Background blur effects */}
                <div className="absolute -top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10" ref={heroRef}>
                    <div className="text-center opacity-0 transform translate-y-8 transition-all duration-1000">
                        <div className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-700/50">
                            Our Story
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 mb-6">
                            About RJA Networks
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Your trusted partner in premium computer hardware solutions since 2005.
                        </p>

                        {/* Download Project Button */}
                        <div className="mt-8">
                            <Button
                                onClick={handleDownload}
                                variant="download"
                                size="lg"
                                className="animate-pulse-slow"
                            >
                                <Download className="mr-2" /> Download Project Source
                            </Button>
                        </div>
                    </div>

                    {/* Animated stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        <StatCard icon={<Star className="h-6 w-6" />} value="18+" label="Years Experience" delay={100} />
                        <StatCard icon={<Users className="h-6 w-6" />} value="10k+" label="Satisfied Clients" delay={200} />
                        <StatCard icon={<Cpu className="h-6 w-6" />} value="25+" label="Countries Served" delay={300} />
                        <StatCard icon={<Award className="h-6 w-6" />} value="15+" label="Industry Awards" delay={400} />
                    </div>
                </div>
            </section>

            {/* Company History - with Side-by-Side Layout */}
            <section className="py-16 bg-slate-800 relative overflow-hidden" ref={historyRef}>
                {/* Circuit traces background */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="circuits" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <path d="M0 100 H200 M100 0 V200" stroke="currentColor" strokeWidth="1" fill="none" />
                            <path d="M30 30 H60 V100 H140 V170 H170" stroke="currentColor" strokeWidth="1" fill="none" />
                            <circle cx="30" cy="30" r="4" fill="currentColor" />
                            <circle cx="60" cy="30" r="2" fill="currentColor" />
                            <circle cx="60" cy="100" r="2" fill="currentColor" />
                            <circle cx="140" cy="100" r="2" fill="currentColor" />
                            <circle cx="140" cy="170" r="2" fill="currentColor" />
                            <circle cx="170" cy="170" r="4" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuits)">
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                from="0 0"
                                to="200 0"
                                dur="60s"
                                repeatCount="indefinite"
                            />
                        </rect>
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 opacity-0 transform translate-y-8 transition-all duration-1000">
                        <div className="md:w-1/2">
                            <div className="mb-6">
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our History</h2>
                            <p className="text-lg text-gray-300 mb-6">
                                Founded in 2005, RJA Computer System & Software Trading LLC began as a small IT solutions provider in Dubai. With a vision to deliver high-quality technology products and services globally, we've steadily grown our operations and expanded our reach.
                            </p>
                            <p className="text-lg text-gray-300 mb-6">
                                Over the years, we've formed strong partnerships with leading technology manufacturers and software developers, allowing us to provide our clients with the best solutions tailored to their specific needs.
                            </p>
                            <p className="text-lg text-gray-300">
                                Today, we serve clients across multiple industries in over 25 countries, establishing ourselves as a trusted name in the global IT hardware solutions market.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative">
                            {/* Main image with hardware theme */}
                            <div className="relative z-10 transform transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
                                <img
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                                    alt="Computer Hardware Circuit"
                                    className="rounded-lg shadow-2xl border border-slate-700"
                                />
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute top-10 -right-5 md:right-10 rotate-12 animate-float-slow">
                                <div className="w-20 h-20 md:w-32 md:h-32 bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700 p-4 flex items-center justify-center">
                                    <Cpu className="w-full h-full text-blue-400" />
                                </div>
                            </div>
                            <div className="absolute -bottom-5 md:-bottom-10 -left-5 md:left-10 -rotate-6 animate-float-slow" style={{ animationDelay: "2s" }}>
                                <div className="w-24 h-24 md:w-40 md:h-40 bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700 p-4 flex flex-col items-center justify-center">
                                    <div className="text-sm md:text-lg font-bold text-green-400">EST.</div>
                                    <div className="text-xl md:text-4xl font-bold text-white">2005</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - Animated Grid */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-green-900 text-white relative overflow-hidden" ref={valuesRef}>
                {/* Hardware circuit pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
                        {/* Circuit board lines */}
                        <pattern id="circuitPattern" width="200" height="200" patternUnits="userSpaceOnUse">
                            <path d="M10,10 h180 v180 h-180 z" fill="none" stroke="white" strokeWidth="1" />
                            <path d="M10,100 h180 M100,10 v180" stroke="white" strokeWidth="1" />
                            <circle cx="100" cy="100" r="5" fill="white" />
                            <circle cx="10" cy="10" r="3" fill="white" />
                            <circle cx="190" cy="10" r="3" fill="white" />
                            <circle cx="10" cy="190" r="3" fill="white" />
                            <circle cx="190" cy="190" r="3" fill="white" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto mb-12 opacity-0 transform translate-y-8 transition-all duration-1000">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
                        <p className="text-xl text-gray-100/80">
                            The principles that guide everything we do at RJA Networks
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <ValueCard
                            title="Integrity"
                            description="We conduct business with unwavering honesty and transparency."
                            icon="shield"
                            delay={100}
                        />
                        <ValueCard
                            title="Innovation"
                            description="We constantly seek new ways to improve our products and services."
                            icon="lightbulb"
                            delay={200}
                        />
                        <ValueCard
                            title="Excellence"
                            description="We strive for the highest quality in everything we do."
                            icon="award"
                            delay={300}
                        />
                        <ValueCard
                            title="Customer Focus"
                            description="We put our customers' needs at the center of our decisions."
                            icon="users"
                            delay={400}
                        />
                    </div>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className="py-16 bg-slate-800 relative overflow-hidden" ref={missionRef}>
                {/* Abstract technology background */}
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="microchip" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <rect width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                <path d="M0,50 H20 M80,50 H100 M50,0 V20 M50,80 V100" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#microchip)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto mb-12 text-center opacity-0 transform translate-y-8 transition-all duration-1000">
                        <div className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-700/50">
                            Our Direction
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Mission and Vision</h2>
                        <p className="text-lg text-gray-300">
                            Guiding principles that shape our company's path and goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-slate-700/50 border-slate-600/50 backdrop-blur hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:translate-y-[-5px] overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <CardContent className="p-8 relative z-10">
                                <div className="mb-6 w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400 transition-transform duration-300 group-hover:scale-110">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 7L12 12L4 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                                <p className="text-gray-300">
                                    To provide innovative and reliable IT solutions that enable businesses to optimize their operations, enhance productivity, and achieve their strategic objectives. We are committed to delivering exceptional value through our products, services, and unwavering customer support.
                                </p>

                                <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-green-500 group-hover:w-full transition-all duration-700"></div>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-700/50 border-slate-600/50 backdrop-blur hover:shadow-xl hover:shadow-green-900/20 transition-all duration-300 hover:translate-y-[-5px] overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <CardContent className="p-8 relative z-10">
                                <div className="mb-6 w-12 h-12 rounded-lg bg-green-900/50 flex items-center justify-center text-green-400 transition-transform duration-300 group-hover:scale-110">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 12H7M17 12H21M12 3V7M12 17V21M12 12L18 18M12 12L6 6M12 12L6 18M12 12L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                                <p className="text-gray-300">
                                    To be recognized as a global leader in IT hardware solutions, known for our innovative approach, technical excellence, and strong customer relationships. We aim to continually evolve our offerings to address the emerging technology needs of businesses worldwide while setting new standards in the industry.
                                </p>

                                <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-700"></div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-slate-900 relative overflow-hidden" ref={featuresRef}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-900/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto mb-12 text-center opacity-0 transform translate-y-8 transition-all duration-1000">
                        <div className="inline-block px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm font-medium mb-4 border border-green-700/50">
                            Our Advantages
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
                        <p className="text-xl text-gray-300">
                            What sets RJA Networks apart in the hardware solutions industry
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            title="Global Reach"
                            description="With operations spanning over 25 countries, we offer comprehensive solutions to businesses worldwide."
                            icon="globe"
                            delay={100}
                        />
                        <FeatureCard
                            title="Expert Team"
                            description="Our team of certified professionals brings decades of combined experience to every project."
                            icon="users"
                            delay={200}
                        />
                        <FeatureCard
                            title="Quality Products"
                            description="We partner with industry-leading manufacturers to provide only the highest quality hardware and software."
                            icon="award"
                            delay={300}
                        />
                        <FeatureCard
                            title="Customized Solutions"
                            description="We understand that every business is unique, and we tailor our solutions to meet your specific requirements."
                            icon="settings"
                            delay={400}
                        />
                        <FeatureCard
                            title="Exceptional Support"
                            description="Our dedicated support team ensures that your systems run smoothly long after implementation."
                            icon="life-buoy"
                            delay={500}
                        />
                        <FeatureCard
                            title="Competitive Pricing"
                            description="We offer enterprise-grade solutions at competitive prices, providing excellent value for your investment."
                            icon="tag"
                            delay={600}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-green-900 text-white relative overflow-hidden">
                {/* Decorative circuit pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="circuit-cta" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M0 50 H100 M50 0 V100 M25 25 H75 M25 75 H75" stroke="white" strokeWidth="1" fill="none" />
                            <circle cx="50" cy="50" r="3" fill="white" />
                            <circle cx="25" cy="25" r="2" fill="white" />
                            <circle cx="75" cy="75" r="2" fill="white" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuit-cta)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Hardware?</h2>
                        <p className="text-xl mb-8">
                            Partner with RJA Networks for premium computer hardware solutions that will transform your business operations.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                                <Link to="/products">Explore Our Products</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-2">
                                <Link to="/contact" className="flex items-center">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                            <Button
                                onClick={handleDownload}
                                variant="download"
                                size="lg"
                                className="flex items-center"
                            >
                                <Download className="mr-2 h-4 w-4" /> Download Source
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon, delay }: {
    title: string;
    description: string;
    icon: string;
    delay: number;
}) => {
    const iconComponents: { [key: string]: React.ReactNode } = {
        globe: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        users: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        award: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        settings: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        "life-buoy": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.93 4.93L9.17 9.17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.83 14.83L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.83 9.17L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.83 9.17L18.36 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.93 19.07L9.17 14.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        tag: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41V13.41Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 7H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    };

    return (
        <div
            className="bg-slate-800/70 backdrop-blur p-6 rounded-xl border border-slate-700/50 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden group animate-fade-in"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="mb-4 text-blue-400 relative z-10">
                <div className="h-12 w-12 rounded-lg bg-blue-900/30 border border-blue-700/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {iconComponents[icon]}
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-white relative z-10">{title}</h3>
            <p className="text-gray-300 relative z-10">{description}</p>

            <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-green-500 group-hover:w-full transition-all duration-500"></div>
        </div>
    );
};

// Value Card Component
const ValueCard = ({ title, description, icon, delay }: {
    title: string;
    description: string;
    icon: string;
    delay: number;
}) => {
    const iconComponents: { [key: string]: React.ReactNode } = {
        shield: <ShieldCheck className="h-8 w-8" />,
        lightbulb: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.2208 7.21497 13.1599 9 14.1973V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V14.1973C16.785 13.1599 18 11.2208 18 9C18 5.68629 15.3137 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        award: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        users: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    };

    return (
        <div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:shadow-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 transform animate-fade-in"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-white">
                    <div className="h-16 w-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center animate-pulse-slow">
                        {iconComponents[icon]}
                    </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
                <p className="text-gray-200">{description}</p>
            </div>
        </div>
    );
};

// Stat Card Component
const StatCard = ({
    icon,
    value,
    label,
    delay
}: {
    icon: React.ReactNode;
    value: string;
    label: string;
    delay: number;
}) => {
    return (
        <div
            className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex items-center">
                <div className="mr-4 h-12 w-12 rounded-lg bg-blue-900/30 border border-blue-700/30 flex items-center justify-center text-blue-400">
                    {icon}
                </div>
                <div>
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                </div>
            </div>
        </div>
    );
};

export default About;
