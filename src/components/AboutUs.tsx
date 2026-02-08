"use client";

import { motion } from "framer-motion";
import { History, Target, Sparkles, Heart } from "lucide-react";

export default function AboutUs() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange text-sm font-bold mb-6 border border-brand-orange/20">
                            <History size={16} />
                            <span>Our Brand Story</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold font-heading text-brand-teal dark:text-white mb-8 leading-tight">
                            From a Visionary Idea to <br />
                            <span className="text-brand-orange">Visakhapatnam's Pride.</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                            Akshaya Hospital in Visakhapatnam is a 100-bedded multispecialty institution dedicated to delivering accessible, affordable, and holistic healthcare. Our journey reflects a blend of medical excellence, compassion, and deep community impact.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Established with a mission to redefine healthcare, we prioritize the physical, emotional, and mental well-being of every individual. Starting as a seed of dedication in the heart of Vizag, we have evolved through evidence-based advancements and strict adherence to global safety guidelines.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-orange-50/50 dark:bg-white/5 rounded-2xl border border-orange-100/50 dark:border-white/5">
                                <div className="text-brand-orange mb-4">
                                    <Heart size={32} />
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-brand-teal dark:text-white font-heading">Compassionate Care</h4>
                                <p className="text-sm text-gray-500">Treating patients as individuals with unique stories and personalized support.</p>
                            </div>
                            <div className="p-6 bg-green-50/50 dark:bg-white/5 rounded-2xl border border-green-100/50 dark:border-white/5">
                                <div className="text-brand-green mb-4">
                                    <Sparkles size={32} />
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-brand-teal dark:text-white font-heading">Modern Innovation</h4>
                                <p className="text-sm text-gray-500">Continuous staff training and adoption of international standards of excellence.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 border-4 border-white dark:border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
                                alt="Akshaya Hospital Excellence"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-brand-orange text-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block">
                            <div className="text-5xl font-bold mb-2 font-heading">100+</div>
                            <div className="text-sm opacity-90 uppercase tracking-widest font-bold">Premium Beds</div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-[3rem] bg-brand-orange/5 dark:bg-white/5 border border-brand-orange/20 dark:border-white/10 text-brand-teal dark:text-white"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-brand-orange/10 rounded-2xl text-brand-orange">
                                <Target size={32} />
                            </div>
                            <h3 className="text-3xl font-bold font-heading">Our Vision</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            Providing quality healthcare holistically while staying ahead with new technologies and regulatory standards. We aim to be a center of excellence that Visakhapatnam trusts for every healthcare need.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-12 rounded-[3rem] bg-brand-green text-white border border-brand-green/20 shadow-xl shadow-green-500/10"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-white/10 rounded-2xl">
                                <Sparkles size={32} />
                            </div>
                            <h3 className="text-3xl font-bold font-heading">Our Mission</h3>
                        </div>
                        <p className="text-white/90 text-lg leading-relaxed">
                            Prioritizing patient care and perfection. Offering recovery-focused services across medical, surgical, women's, and child health domains with patient safety as our highest priority.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
