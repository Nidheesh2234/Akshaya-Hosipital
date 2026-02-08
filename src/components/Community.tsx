"use client";

import { motion } from "framer-motion";
import { Users, Tent, Presentation, Building2 } from "lucide-react";

const initiatives = [
    {
        title: "Free Medical Camps",
        description: "Regular health screening camps providing free consultations and basic diagnostics for the local community.",
        icon: Tent,
        color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
    },
    {
        title: "Corporate Wellness",
        description: "Annual screenings, onsite health advice, and specialized checkup packages for corporate employees.",
        icon: Building2,
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
        title: "Health Education",
        description: "Plain-language medical resources and awareness programs to empower patient decision-making.",
        icon: Presentation,
        color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
    }
];

export default function Community() {
    return (
        <section id="community" className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="relative rounded-[3rem] overflow-hidden border-4 border-brand-teal/5 dark:border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
                                alt="Community Health Camp"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/80 to-transparent flex items-end p-12">
                                <p className="text-white font-bold text-xl italic font-heading">"Beyond our walls, we believe in a healthier Visakhapatnam for everyone."</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange text-sm font-bold mb-6 border border-brand-orange/20">
                            <Users size={16} />
                            <span>Community Commitment</span>
                        </div>
                        <h2 className="text-4xl font-bold font-heading text-brand-teal dark:text-white mb-8">
                            Healing Hearts, <br />
                            <span className="text-brand-orange">Building Communities.</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-12 leading-relaxed text-lg">
                            At Akshaya, our responsibility extends beyond medical procedures. We are deeply committed to Visakhapatnam's wellness through proactive outreach and education.
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    title: "Free Medical Camps",
                                    description: "Regular health screening camps providing free consultations and basic diagnostics for the local community.",
                                    icon: Tent,
                                    color: "bg-white dark:bg-brand-orange/10 border border-brand-orange/10"
                                },
                                {
                                    title: "Corporate Wellness",
                                    description: "Annual screenings, onsite health advice, and specialized checkup packages for corporate employees.",
                                    icon: Building2,
                                    color: "bg-white dark:bg-brand-green/10 border border-brand-green/10"
                                },
                                {
                                    title: "Health Education",
                                    description: "Plain-language medical resources and awareness programs to empower patient decision-making.",
                                    icon: Presentation,
                                    color: "bg-white dark:bg-brand-red/10 border border-brand-red/10"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-6 items-start group cursor-default"
                                >
                                    <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-gray-200/50 dark:shadow-none transition-all group-hover:scale-110 ${item.color}`}>
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-teal dark:text-white mb-1 font-heading group-hover:text-brand-orange transition-colors">{item.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
