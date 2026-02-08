"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Calendar } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-height-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-brand-orange/2 dark:from-brand-orange/10 to-transparent rounded-l-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange text-sm font-bold mb-6 border border-brand-orange/20">
                            <ShieldCheck size={16} />
                            <span>Trusted by 50,000+ Patients</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold font-heading text-brand-teal dark:text-white leading-tight mb-6">
                            Healthcare That <br />
                            <span className="text-brand-orange">Feels Personal.</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
                            Experience world-class medical excellence at Akshaya Hospitals, Visakhapatnam. A 100-bedded multispecialty hub combining cutting-edge technology with empathetic care.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20 active:bg-brand-orange/90 transition-all"
                            >
                                Book Your Visit
                                <ArrowRight size={20} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white dark:bg-white/5 border-2 border-brand-green/20 px-8 py-4 rounded-2xl font-bold text-brand-green hover:bg-brand-green hover:text-white transition-all"
                            >
                                Akshaya Partners
                            </motion.button>
                        </div>

                        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-gray-100 dark:border-white/5 pt-12">
                            <div>
                                <div className="text-3xl font-bold text-brand-orange font-heading">100+</div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Multispecialty Beds</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-brand-red font-heading">24/7</div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Emergency Care</div>
                            </div>
                            <div className="hidden md:block">
                                <div className="text-3xl font-bold text-brand-green font-heading">98%</div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Patient Trust</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 border-4 border-white dark:border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                                alt="Modern Hospital Interior"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating Card 1 */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            className="absolute -top-6 -right-6 z-20 bg-white dark:bg-[#001a18] p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-4 cursor-default"
                        >
                            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-xl text-brand-orange">
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-semibold uppercase">Patient Mentors</p>
                                <p className="font-bold text-brand-teal dark:text-white">2,400+ Active</p>
                            </div>
                        </motion.div>

                        {/* Floating Card 2 */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            whileHover={{ scale: 1.1, rotate: -2 }}
                            className="absolute -bottom-10 -left-10 z-20 bg-white dark:bg-[#001a18] p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-4 cursor-default"
                        >
                            <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-xl text-brand-red">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-semibold uppercase">Next Slot</p>
                                <p className="font-bold text-brand-teal dark:text-white">In 15 Mins</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
