
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Cpu, HardDrive, Monitor, Keyboard, Server, Mouse, Printer } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Hardware product categories with icons and descriptions
const productCategories = [
    {
        id: 1,
        name: "Processors & CPUs",
        icon: <Cpu className="h-8 w-8" />,
        description: "High-performance processors from Intel, AMD, and more for desktops, servers, and workstations.",
        image: "/images/cpu.jpg",
        popular: true,
    },
    {
        id: 2,
        name: "Storage Solutions",
        icon: <HardDrive className="h-8 w-8" />,
        description: "SSDs, HDDs, and enterprise storage systems to meet all your storage requirements.",
        image: "/images/storage.jpg",
        popular: false,
    },
    {
        id: 3,
        name: "Monitors & Displays",
        icon: <Monitor className="h-8 w-8" />,
        description: "Professional-grade monitors and displays with high resolution and color accuracy.",
        image: "/images/monitor.jpg",
        popular: true,
    },
    {
        id: 4,
        name: "Input Devices",
        icon: <Keyboard className="h-8 w-8" />,
        description: "Keyboards, mice, and other input devices for productivity and gaming.",
        image: "/images/keyboard.jpg",
        popular: false,
    },
    {
        id: 5,
        name: "Enterprise Servers",
        icon: <Server className="h-8 w-8" />,
        description: "Rack servers, blade servers, and server accessories for data centers and businesses.",
        image: "/images/server.jpg",
        popular: true,
    },
    {
        id: 6,
        name: "Networking Equipment",
        icon: <Server className="h-8 w-8" />,
        description: "Routers, switches, access points, and networking accessories for home and enterprise.",
        image: "/images/network.jpg",
        popular: false,
    },
    {
        id: 7,
        name: "Peripherals",
        icon: <Printer className="h-8 w-8" />,
        description: "Printers, scanners, and other essential peripherals for your computing needs.",
        image: "/images/peripheral.jpg",
        popular: false,
    },
    {
        id: 8,
        name: "Gaming Hardware",
        icon: <Mouse className="h-8 w-8" />,
        description: "Specialized hardware for gaming enthusiasts and professional esports players.",
        image: "/images/gaming.jpg",
        popular: true,
    },
];

// Featured brands that we sell
const brands = [
    "Intel", "AMD", "NVIDIA", "Dell", "HP", "Lenovo", "ASUS",
    "MSI", "Samsung", "Western Digital", "Seagate", "Kingston",
    "Cisco", "Netgear", "LG", "Acer"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
};

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    };

    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-0 right-0 bg-blue-500/10 w-96 h-96 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 bg-green-500/10 w-96 h-96 rounded-full filter blur-3xl"></div>

                    {/* Circuit pattern background */}
                    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
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
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Premium Hardware <span className="text-blue-400">Solutions</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover our comprehensive range of computer hardware products designed
                            for businesses, enterprises, and professional users.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Button
                            onClick={() => navigate("/contact")}
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                        >
                            Request Quotation
                        </Button>
                        <Button
                            onClick={() => {
                                const productsSection = document.getElementById('product-categories');
                                productsSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            variant="outline"
                            size="lg"
                            className="border-gray-500 text-gray-300 hover:bg-slate-800"
                        >
                            Explore Products
                        </Button>
                    </motion.div>

                    {/* Statistics */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 mt-12 max-w-4xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
                            <div className="text-3xl font-bold text-blue-400">500+</div>
                            <div className="text-gray-400 text-sm">Hardware Products</div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
                            <div className="text-3xl font-bold text-blue-400">15+</div>
                            <div className="text-gray-400 text-sm">Years Experience</div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
                            <div className="text-3xl font-bold text-blue-400">50+</div>
                            <div className="text-gray-400 text-sm">Tech Partners</div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
                            <div className="text-3xl font-bold text-blue-400">1000+</div>
                            <div className="text-gray-400 text-sm">Happy Clients</div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Product Categories Section */}
            <section id="product-categories" className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Hardware <span className="text-blue-400">Product Categories</span>
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Browse our wide selection of high-quality computer hardware products and solutions
                            designed to meet your business needs.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {productCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                variants={itemVariants}
                                className="group"
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <Card className="h-full bg-slate-800/50 border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300">
                                    <div className="h-48 bg-slate-700 relative overflow-hidden">
                                        {/* Hardware themed pattern background for images */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                                            <div className="absolute inset-0 animate-scan bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" style={{ height: '200%', top: '-100%' }}></div>

                                            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center animate-pulse-slow">
                                                <div className="text-blue-400">
                                                    {category.icon}
                                                </div>
                                            </div>
                                        </div>

                                        {category.popular && (
                                            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                                                Popular
                                            </div>
                                        )}
                                    </div>

                                    <CardHeader>
                                        <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                                            {category.name}
                                        </CardTitle>
                                        <CardDescription className="text-gray-400">
                                            {category.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardFooter>
                                        <Button
                                            variant="outline"
                                            className="w-full border-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                                            onClick={() => handleCategoryClick(category.id)}
                                        >
                                            {selectedCategory === category.id ? 'Hide Details' : 'View Details'}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Enterprise Solutions Section */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10 items-center">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Enterprise Hardware <span className="text-blue-400">Solutions</span>
                            </h2>

                            <p className="text-gray-300 mb-6">
                                We specialize in providing comprehensive hardware solutions for enterprises of all sizes.
                                Our team of experts will work with you to understand your specific needs and design a
                                custom hardware infrastructure that meets your requirements.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Server infrastructure and deployment",
                                    "Data center hardware solutions",
                                    "Network architecture and implementation",
                                    "Storage systems and backup solutions",
                                    "End-user computing devices"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start text-gray-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                                    >
                                        <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>

                            <Button
                                onClick={() => navigate("/contact")}
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                            >
                                Talk to an Expert
                            </Button>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className="relative perspective-effect server-rack p-4 bg-slate-900 rounded-lg border border-slate-700">
                                <div className="absolute inset-0 opacity-20">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                                        </pattern>
                                        <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
                                    </svg>
                                </div>

                                {/* Server rack visualization */}
                                <div className="relative z-10">
                                    {[...Array(6)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-16 bg-slate-800 border border-slate-700 rounded mb-2 p-2 flex items-center relative overflow-hidden group hover:border-blue-500 transition-all duration-300"
                                        >
                                            <div className="absolute right-2 top-2 flex space-x-1">
                                                <div className={`h-2 w-2 rounded-full ${i % 3 === 0 ? 'bg-green-500 animate-blink' : 'bg-blue-500'}`}></div>
                                                <div className={`h-2 w-2 rounded-full ${i % 4 === 0 ? 'bg-amber-500 animate-blink' : 'bg-blue-500'}`}></div>
                                            </div>

                                            <div className="flex items-center">
                                                <Server className="h-8 w-8 text-gray-400 mr-3" />
                                                <div>
                                                    <div className="text-sm font-medium text-gray-200">Server {i + 1}</div>
                                                    <div className="text-xs text-gray-400">{i % 2 === 0 ? 'Storage' : 'Compute'} Node</div>
                                                </div>
                                            </div>

                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="text-xs bg-slate-900 px-2 py-1 rounded text-blue-400">
                                                    {i % 2 === 0 ? '12TB' : '128GB RAM'}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="py-16 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-2">
                            Trusted Hardware Brands
                        </h2>
                        <p className="text-gray-400">
                            We partner with the world's leading technology manufacturers
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-x-8 gap-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {brands.map((brand, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-gray-400 hover:text-gray-200 transition-colors text-lg font-semibold"
                            >
                                {brand}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-800/50 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 bg-blue-500/10 w-96 h-96 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 bg-green-500/10 w-96 h-96 rounded-full filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to upgrade your hardware infrastructure?
                        </h2>

                        <p className="text-gray-300 mb-8 text-lg">
                            Connect with our hardware specialists to find the perfect solutions for your business needs.
                            Get personalized recommendations and competitive pricing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => navigate("/contact")}
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                            >
                                Request a Quote
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-gray-500 text-gray-300 hover:bg-slate-800"
                                onClick={() => navigate("/about")}
                            >
                                Learn More About Us
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Products;
