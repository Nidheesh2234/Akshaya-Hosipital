"use client";

import { motion } from "framer-motion";
import { Quote, MessageCircle, Heart, Handshake } from "lucide-react";

const mentors = [
    {
        name: "Sarah Jenkins",
        journey: "Hip Replacement",
        bio: "I was terrified before my surgery. Now, I help others navigate the recovery process with confidence.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
        name: "David Chen",
        journey: "Cardiac Recovery",
        bio: "Living with heart conditions is tough. I share my experience to make the transition easier for new patients.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
        name: "Anita Rao",
        journey: "Maternal Care",
        bio: "First-time motherhood can be overwhelming. I support new moms through their journey at Akshaya.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    }
];

export default function Mentorship() {
    return (
        <section id="mentorship" className="py-24 bg-white dark:bg-[#001a18]/20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 dark:bg-brand-green/20 text-brand-green text-sm font-bold mb-6 border border-brand-green/20">
                            <Handshake size={16} />
                            <span>Akshaya Partners Program</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold font-heading text-brand-teal dark:text-white leading-tight mb-6">
                            You're Not Alone in <br />
                            <span className="text-brand-orange">Your Medical Journey.</span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                            Inspired by PatientPartner, we believe the best support comes from those who have been where you are. Our mentorship program connects you with former patients who provide guidance, empathy, and first-hand experience.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="bg-brand-orange/10 dark:bg-brand-orange/20 p-3 rounded-2xl text-brand-orange">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-teal dark:text-white mb-1 font-heading">Personal Connection</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Match with someone who underwent the exact same procedure.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-brand-red/10 dark:bg-brand-red/20 p-3 rounded-2xl text-brand-red">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-teal dark:text-white mb-1 font-heading">Emotional Support</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Get answers to questions doctors might not be able to answer from experience.</p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-10 bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-orange-500/20 transition-all shadow-xl shadow-orange-500/10 active:scale-95">
                            Find Your Partner
                        </button>
                    </motion.div>

                    <div className="grid gap-6">
                        {mentors.map((mentor, index) => (
                            <motion.div
                                key={mentor.name}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ scale: 1.02, x: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white dark:bg-white/5 backdrop-blur-lg border border-gray-100 dark:border-white/10 p-6 rounded-[2rem] flex items-center gap-6 group hover:bg-gray-50/50 dark:hover:bg-white/10 transition-all shadow-sm cursor-default"
                            >
                                <img
                                    src={mentor.image}
                                    alt={mentor.name}
                                    className="w-20 h-20 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 className="font-bold text-brand-teal dark:text-white font-heading">{mentor.name}</h4>
                                            <p className="text-xs text-brand-orange font-bold uppercase tracking-wider">{mentor.journey} Mentor</p>
                                        </div>
                                        <Quote className="text-gray-200 dark:text-white/20" size={24} />
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm italic italic_p">
                                        "{mentor.bio}"
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
