"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hospital } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Find a Doctor", href: "#doctors" },
    { name: "Akshaya Partners", href: "#mentorship" },
    { name: "Locations", href: "#locations" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/70 dark:bg-black/70 backdrop-blur-md py-4 shadow-sm"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <img
                            src="/logo.png"
                            alt="Akshaya Hospital Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-4 border-l pl-8 border-gray-100 dark:border-white/10">
                            <ThemeToggle />
                            <button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-orange-500/20 active:scale-95">
                                Book Appointment
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-white/5 transition-colors text-brand-teal dark:text-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-[#001a18] border-t border-gray-100 dark:border-white/10"
                    >
                        <div className="px-4 py-8 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg font-bold text-brand-teal dark:text-white hover:text-brand-orange"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="w-full bg-brand-orange text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-orange-500/20 mt-6 active:scale-[0.98] transition-all">
                                Book Appointment
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
