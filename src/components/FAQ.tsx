"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "How do I book an appointment with a specialist?",
        answer: "You can book an appointment easily through our website using the 'Book Appointment' button, or by calling our 24/7 helpline at +91 88855 59769."
    },
    {
        question: "What insurance providers do you accept?",
        answer: "Akshaya Hospitals accepts most major insurance providers including Blue Cross, Aetna, UnitedHealthcare, and Cigna. Please check our Patients & Visitors portal for a full list."
    },
    {
        question: "What is the Akshaya Partners mentorship program?",
        answer: "It's a unique program where we pair current patients with former patients who have undergone the same medical journey. They provide emotional support and practical advice based on their own experiences."
    },
    {
        question: "Can I access my medical records online?",
        answer: "Yes, through our secure Patient Portal, you can access your lab results, medical history, and e-billing information 24/7."
    },
    {
        question: "Do you offer emergency services?",
        answer: "Our Main Campus provides full-scale Emergency and Trauma care 24 hours a day, 7 days a week, with some of the fastest response times in the region."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange text-sm font-bold mb-6 border border-brand-orange/20">
                        <HelpCircle size={16} />
                        <span>Common Questions</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold font-heading text-brand-teal dark:text-white">
                        Your Health, <span className="text-brand-orange">Simplified.</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`border rounded-3xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'border-brand-orange/30 shadow-xl shadow-orange-500/5' : 'border-brand-teal/5 dark:border-white/5'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className={`w-full text-left p-8 flex justify-between items-center transition-all ${activeIndex === index ? 'bg-orange-50/30 dark:bg-brand-orange/5' : 'bg-white dark:bg-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.05]'}`}
                            >
                                <span className={`font-bold text-xl font-heading transition-colors ${activeIndex === index ? 'text-brand-orange' : 'text-brand-teal dark:text-white'}`}>{faq.question}</span>
                                <div className={`shrink-0 ml-4 p-2 rounded-xl transition-all ${activeIndex === index ? 'bg-brand-orange text-white rotate-180' : 'bg-brand-teal/5 dark:bg-white/10 text-brand-teal/40 dark:text-white/40'}`}>
                                    {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-8 pt-0 text-gray-600 dark:text-gray-300 bg-transparent text-lg leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
