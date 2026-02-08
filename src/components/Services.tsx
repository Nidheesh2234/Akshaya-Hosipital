"use client";

import { motion } from "framer-motion";
import {
    HeartPulse,
    Brain,
    Bone,
    Baby,
    Eye,
    Stethoscope,
    Activity,
    Microwave,
    Sparkles
} from "lucide-react";

const services = [
    {
        title: "Cardiology",
        description: "Expert care for your heart with advanced diagnostics and treatment plans.",
        icon: HeartPulse,
        color: "bg-red-50 text-brand-red dark:bg-brand-red/10 border border-brand-red/10"
    },
    {
        title: "Neurology",
        description: "Specialized treatment for disorders of the nervous system and brain health.",
        icon: Brain,
        color: "bg-orange-50 text-brand-orange dark:bg-brand-orange/10 border border-brand-orange/10"
    },
    {
        title: "Orthopedics",
        description: "Comprehensive care for bone, joint, and muscle conditions and injuries.",
        icon: Bone,
        color: "bg-green-50 text-brand-green dark:bg-brand-green/10 border border-brand-green/10"
    },
    {
        title: "Pulmonology",
        description: "Expert care for respiratory conditions and lung health management.",
        icon: Activity,
        color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/10 border border-emerald-500/10"
    },
    {
        title: "ENT",
        description: "Specialized treatment for ear, nose, and throat disorders.",
        icon: Activity,
        color: "bg-orange-50 text-brand-orange dark:bg-brand-orange/10 border border-brand-orange/10"
    },
    {
        title: "Dermatology",
        description: "Comprehensive skin care, from clinical treatments to aesthetic procedures.",
        icon: Sparkles,
        color: "bg-rose-50 text-rose-500 dark:bg-rose-900/10 border border-rose-500/10"
    },
    {
        title: "Gastroenterology",
        description: "Advanced digestive system care and liver health treatments.",
        icon: Activity,
        color: "bg-amber-50 text-amber-600 dark:bg-amber-900/10 border border-amber-500/10"
    },
    {
        title: "Maternal Care",
        description: "Holistic care for mothers and newborns with modern LDRP suites.",
        icon: Baby,
        color: "bg-red-50 text-brand-red dark:bg-brand-red/10 border border-brand-red/10"
    },
    {
        title: "Psychiatry",
        description: "Expert mental health support and counseling for holistic well-being.",
        icon: Activity,
        color: "bg-orange-50 text-brand-orange dark:bg-brand-orange/10 border border-brand-orange/10"
    },
    {
        title: "Critical Care",
        description: "State-of-the-art ICUs, NICU, and ventilators for critical patient care.",
        icon: HeartPulse,
        color: "bg-red-50 text-brand-red dark:bg-brand-red/10 border border-brand-red/10"
    },
    {
        title: "Modern OTs",
        description: "Precision surgical procedures with cutting-edge medical technology.",
        icon: Activity,
        color: "bg-green-50 text-brand-green dark:bg-brand-green/10 border border-brand-green/10"
    },
    {
        title: "Diagnostics",
        description: "Accurate labs, radiology, and ultrasonography services under one roof.",
        icon: Microwave,
        color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/10 border border-cyan-500/10"
    },
    {
        title: "Physiotherapy",
        description: "Comprehensive recovery plans for physical rehabilitation and mobility.",
        icon: Activity,
        color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/10 border border-emerald-500/10"
    },
    {
        title: "Pediatrics",
        description: "Gentle and specialized medical care for infants, children, and adolescents.",
        icon: Baby,
        color: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/10 border border-yellow-500/10"
    },
    {
        title: "Ophthalmology",
        description: "Advanced eye care services from routine exams to complex surgeries.",
        icon: Eye,
        color: "bg-teal-50 text-brand-teal dark:bg-brand-teal/10 border border-brand-teal/10"
    },
    {
        title: "General Medicine",
        description: "Primary healthcare services with a focus on prevention and wellness.",
        icon: Stethoscope,
        color: "bg-green-50 text-brand-green dark:bg-brand-green/10 border border-brand-green/10"
    },
    {
        title: "Emergency Care",
        description: "24/7 rapid response medical services for critical health situations.",
        icon: Activity,
        color: "bg-red-50 text-brand-red dark:bg-brand-red/10 border border-brand-red/10 animate-pulse"
    },
    {
        title: "Radiology",
        description: "Modern imaging services including MRI, CT, and X-ray for accurate diagnosis.",
        icon: Microwave,
        color: "bg-brand-orange/5 text-brand-orange dark:bg-brand-orange/10 border border-brand-orange/10"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white dark:bg-[#001a18]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold font-heading text-brand-teal dark:text-white mb-4"
                    >
                        Our Specialized <span className="text-brand-orange">Departments</span>
                    </motion.h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        We offer a wide range of medical services provided by some of the world's most renowned specialists, ensuring you receive the best care possible.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-xl transition-all"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-bright-text dark:text-dark-secondary">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <button className="mt-6 text-sm font-semibold text-bright-accent dark:text-dark-accent hover:underline flex items-center gap-1">
                                Learn more
                                <span className="text-lg">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
