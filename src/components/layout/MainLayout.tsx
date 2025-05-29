
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Clock, HardDrive, Server, Cpu, Monitor, Contact } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedLogo } from "@/components/layout/AnimatedLogo";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    // Handle scroll effect for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Top header with contact information - FIXED */}
            <div className="bg-slate-800 text-white py-2 fixed top-0 left-0 right-0 z-50 shadow-md hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-6 text-sm">
                            <div className="flex items-center animate-pulse-slow">
                                <Phone className="h-4 w-4 mr-2" />
                                <div className="flex gap-3">
                                    <span>+9710563861260</span>
                                    <span>+9710566930268</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-2" />
                                <span>rjanetworkllc@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 text-sm">
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>Mon-Sun: 8am - 6pm</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>RJA Computer System PO Box: 111013 , Dubai</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - FIXED */}
            <header className="fixed top-[2.2rem] w-full z-50 transition-all duration-300 backdrop-blur-md shadow-lg bg-slate-900/95">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center">
                                <AnimatedLogo />
                                <div className="ml-2">
                                    <span className="block text-xl font-bold text-white">RJA COMPUTER SYSTEMS</span>
                                    <span className="block text-xs text-gray-300">HARDWARE & SOFTWARE TRADING L.L.C</span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link to="/" className="text-gray-200 hover:text-blue-400 font-medium transition-colors duration-300 flex items-center">
                                <Monitor className="mr-1 h-4 w-4" />
                                Home
                            </Link>
                            <Link to="/about" className="text-gray-200 hover:text-blue-400 font-medium transition-colors duration-300 flex items-center">
                                <Server className="mr-1 h-4 w-4" />
                                About
                            </Link>
                            <Link to="/contact" className="text-gray-200 hover:text-blue-400 font-medium transition-colors duration-300 flex items-center">
                                <Phone className="mr-1 h-4 w-4" />
                                Contact
                            </Link>



                            <Button asChild className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 shadow-md">
                                <Link to="/contact">Request Hardware Quote</Link>
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-md text-gray-300 hover:bg-slate-800 transition-colors duration-300"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="lg:hidden py-4 animate-slide-in bg-slate-900/95 backdrop-blur-md">
                            <div className="flex flex-col space-y-3">
                                <Link
                                    to="/"
                                    className="px-4 py-2 text-gray-300 hover:bg-slate-800 rounded-md transition-colors duration-300 flex items-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Monitor className="mr-2 h-4 w-4" />
                                    Home
                                </Link>
                                <Link
                                    to="/products"
                                    className="px-4 py-2 text-gray-300 hover:bg-slate-800 rounded-md transition-colors duration-300 flex items-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <HardDrive className="mr-2 h-4 w-4" />
                                    Products
                                </Link>
                                <Link
                                    to="/about"
                                    className="px-4 py-2 text-gray-300 hover:bg-slate-800 rounded-md transition-colors duration-300 flex items-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Server className="mr-2 h-4 w-4" />
                                    About
                                </Link>

                                {/* Mobile Services dropdown */}
                                <div className="px-4">
                                    <button
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        className="flex items-center py-2 w-full text-left text-gray-300"
                                    >
                                        <HardDrive className="mr-2 h-4 w-4" />
                                        Hardware & Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {servicesOpen && (
                                        <div className="pl-4 mt-1 space-y-2 border-l-2 border-blue-500">
                                            <Link to="#" className="block py-1 text-gray-400 hover:text-blue-400 flex items-center" onClick={() => setIsMenuOpen(false)}>
                                                <Cpu className="mr-2 h-4 w-4" />
                                                Computer Hardware & Equipment
                                            </Link>
                                            <Link to="#" className="block py-1 text-gray-400 hover:text-blue-400 flex items-center" onClick={() => setIsMenuOpen(false)}>
                                                <Server className="mr-2 h-4 w-4" />
                                                Networking & Communication Systems
                                            </Link>
                                            <Link to="#" className="block py-1 text-gray-400 hover:text-blue-400 flex items-center" onClick={() => setIsMenuOpen(false)}>
                                                <Monitor className="mr-2 h-4 w-4" />
                                                Software Solutions
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <Link
                                    to="/contact"
                                    className="px-4 py-2 text-gray-300 hover:bg-slate-800 rounded-md transition-colors duration-300 flex items-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Cpu className="mr-2 h-4 w-4" />
                                    Contact
                                </Link>

                                {/* Mobile contact info */}
                                <div className="px-4 py-2 border-t border-slate-700 mt-2 space-y-2">
                                    <div className="flex items-center text-sm text-gray-400">
                                        <Phone className="h-4 w-4 mr-2" />
                                        <span>+971 4 123 4567</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-400">
                                        <Mail className="h-4 w-4 mr-2" />
                                        <span>info@RJAnetworks.com</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-400">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        <span>123 Business Ave, Dubai, UAE</span>
                                    </div>
                                </div>

                                <Button asChild className="mx-4 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 shadow-md">
                                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Request Hardware Quote</Link>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            <main className="flex-grow pt-32">
                {children}
            </main>

            <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
                {/* Decorative hardware-themed elements */}
                <div className="absolute top-0 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl animate-float-slow"></div>

                {/* Circuit board pattern overlay - subtle */}
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M0 50 H100 M50 0 V100 M25 25 H75 M25 75 H75" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            <circle cx="50" cy="50" r="3" fill="currentColor" />
                            <circle cx="25" cy="25" r="2" fill="currentColor" />
                            <circle cx="75" cy="75" r="2" fill="currentColor" />
                            <circle cx="75" cy="25" r="2" fill="currentColor" />
                            <circle cx="25" cy="75" r="2" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                            <h3 className="text-xl font-semibold mb-4">RJA Hardware</h3>
                            <p className="text-gray-300">
                                Global provider of computer hardware, networking equipment, and software solutions for businesses of all sizes.
                            </p>
                            <div className="mt-4 flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14.003-7.496 14.003-13.989 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59l-.047-.02z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                            <h3 className="text-xl font-semibold mb-4">Hardware Products</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"><Server className="h-4 w-4 mr-2" />Servers & Workstations</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"><Monitor className="h-4 w-4 mr-2" />Monitors & Displays</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"><HardDrive className="h-4 w-4 mr-2" />Storage Solutions</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"><Cpu className="h-4 w-4 mr-2" />Processors & Components</a></li>
                            </ul>
                        </div>
                        <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
                                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</Link></li>
                                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                            <h3 className="text-xl font-semibold mb-4">Contact</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center hover:text-white transition-colors duration-300">
                                    <MapPin className="mr-2 h-5 w-5" />
                                    <span>123 Business Ave, Dubai, UAE</span>
                                </li>
                                <li className="flex items-center hover:text-white transition-colors duration-300">
                                    <Phone className="mr-2 h-5 w-5" />
                                    <span>+971 4 123 4567</span>
                                </li>
                                <li className="flex items-center hover:text-white transition-colors duration-300">
                                    <Mail className="mr-2 h-5 w-5" />
                                    <span>info@RJAnetworks.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} RJA Computer System & Hardware Trading LLC. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
