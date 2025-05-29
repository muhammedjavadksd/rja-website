
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, HardDrive } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from 'react-router-dom'

interface HeroSectionProps {
    scrollToServices: () => void;
    scrollToContact: () => void;
}

export const HeroSection = ({ scrollToServices, scrollToContact }: HeroSectionProps) => {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const bulletPointsRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate()

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

        if (headlineRef.current) observer.observe(headlineRef.current);
        if (taglineRef.current) observer.observe(taglineRef.current);
        if (bulletPointsRef.current) observer.observe(bulletPointsRef.current);
        if (buttonsRef.current) observer.observe(buttonsRef.current);
        if (imageRef.current) observer.observe(imageRef.current);

        return () => {
            if (headlineRef.current) observer.unobserve(headlineRef.current);
            if (taglineRef.current) observer.unobserve(taglineRef.current);
            if (bulletPointsRef.current) observer.unobserve(bulletPointsRef.current);
            if (buttonsRef.current) observer.unobserve(buttonsRef.current);
            if (imageRef.current) observer.unobserve(imageRef.current);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-8 md:pt-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Text Content - Left Side */}
                    <div className="order-2 lg:order-1">
                        <h1
                            ref={headlineRef}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 mb-6 opacity-0 transform translate-y-8 transition-all duration-1000 delay-300"
                        >
                            Premium Computer Hardware Solutions
                        </h1>
                        <p
                            ref={taglineRef}
                            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl opacity-0 transform translate-y-8 transition-all duration-1000 delay-500"
                        >
                            Empowering businesses with reliable, high-performance IT infrastructure.
                        </p>

                        {/* Bullet points */}
                        <div
                            ref={bulletPointsRef}
                            className="flex flex-col space-y-4 mb-10 opacity-0 transform translate-y-8 transition-all duration-1000 delay-700"
                        >
                            <div className="flex items-center">
                                <span className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400 mr-4">
                                    <Cpu className="h-5 w-5" />
                                </span>
                                <span className="text-gray-200 text-lg">Enterprise-Grade Workstations & Servers</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-10 h-10 rounded-lg bg-green-900/50 flex items-center justify-center text-green-400 mr-4">
                                    <HardDrive className="h-5 w-5" />
                                </span>
                                <span className="text-gray-200 text-lg">High-Speed Networking Equipment</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center text-purple-400 mr-4">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 16H18M6 8H18M10 20H14M10 4H14M5 12H19C20.1046 12 21 11.1046 21 10V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V10C3 11.1046 3.89543 12 5 12ZM5 20H19C20.1046 20 21 19.1046 21 18V14C21 12.8954 20.1046 12 19 12H5C3.89543 12 3 12.8954 3 14V18C3 19.1046 3.89543 20 5 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="text-gray-200 text-lg">Robust Data Storage Solutions</span>
                            </div>
                        </div>

                        <div
                            className="flex flex-wrap gap-4 opacity-0 transform translate-y-8 transition-all duration-1000 delay-900"
                        >
                            <Button
                                onClick={() => navigate("/products")}
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Explore Hardware <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                onClick={scrollToContact}
                                size="lg"
                                variant="outline"
                                className="border-2 border-green-500 text-green-400 hover:bg-green-900/20 transform hover:scale-105 transition-all duration-300"
                            >
                                Request Quote
                            </Button>
                        </div>
                    </div>

                    {/* Image Content - Right Side */}
                    <div
                        ref={imageRef}
                        className="order-1 lg:order-2 flex justify-center items-center opacity-0 transform translate-y-8 transition-all duration-1000 delay-300"
                    >
                        <div className="relative">
                            {/* Circle Avatar - Hardware Image */}
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
                                <Avatar className="w-32 h-32 border-4 border-blue-500 shadow-xl animate-pulse-slow overflow-hidden">
                                    <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                                        <Cpu className="h-16 w-16 text-blue-400" />
                                    </div>
                                    <AvatarFallback className="bg-blue-900 text-3xl">CPU</AvatarFallback>
                                </Avatar>
                            </div>

                            {/* Main Image */}
                            <div className="relative z-0 rounded-lg overflow-hidden border-2 border-blue-800/40 shadow-2xl">
                                <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-900 via-slate-800 to-green-900 animate-float-slow flex items-center justify-center p-8">
                                    {/* 3D Server Rack Illustration */}
                                    <div className="w-full h-full relative flex items-center justify-center">
                                        <div className="absolute inset-0 flex items-center justify-center perspective-effect">
                                            <div className="server-rack w-48 h-64 relative">
                                                {[1, 2, 3, 4, 5].map((i) => (
                                                    <div
                                                        key={i}
                                                        className={`absolute left-0 right-0 h-10 bg-slate-700 border border-slate-600 rounded-sm flex items-center px-2 shadow-md transform transition-all duration-500 hover:translate-x-2 hover:bg-slate-600`}
                                                        style={{ top: `${(i - 1) * 12}%`, transitionDelay: `${i * 100}ms` }}
                                                    >
                                                        <div className="flex space-x-2 items-center">
                                                            <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-green-400 animate-pulse' : 'bg-blue-400'}`}></div>
                                                            <div className="w-6 h-1 bg-slate-500 rounded-full"></div>
                                                        </div>
                                                        <div className="ml-auto grid grid-cols-2 gap-1">
                                                            {[1, 2, 3, 4].map(j => (
                                                                <div key={j} className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="absolute right-2 bottom-0 top-0 w-1 bg-slate-600 opacity-50"></div>
                                            </div>
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold text-white absolute bottom-0 pb-4">
                                            RJA HARDWARE
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -z-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -bottom-10 -right-10"></div>
                            <div className="absolute -z-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -top-10 -left-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
