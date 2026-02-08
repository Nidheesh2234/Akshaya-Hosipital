"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Star, MapPin } from "lucide-react";

const doctors = [
    {
        name: "Dr. James Wilson",
        specialty: "Cardiology",
        rating: 4.9,
        reviews: 120,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200",
        location: "Main Branch"
    },
    {
        name: "Dr. Elena Rodriguez",
        specialty: "Neurology",
        rating: 4.8,
        reviews: 85,
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200",
        location: "West Wing"
    },
    {
        name: "Dr. Robert Chang",
        specialty: "Orthopedics",
        rating: 4.7,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200",
        location: "Main Branch"
    }
];

export default function FindDoctor() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <section id="doctors" className="py-24 bg-white dark:bg-[#001a18]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-bold font-heading text-brand-teal dark:text-white mb-4"
                        >
                            Find the Right <span className="text-brand-orange">Specialist</span>
                        </motion.h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-xl text-lg">
                            Search through our directory of world-class physicians. Filter by specialty, location, or patient ratings.
                        </p>
                    </div>

                    <div className="w-full md:w-96 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-teal/40" size={20} />
                        <input
                            type="text"
                            placeholder="Search by name or specialty..."
                            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-white/5 border border-brand-teal/10 dark:border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={doctor.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.99 }}
                            className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-brand-teal/5 dark:border-white/5 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-orange-500/5 transition-all group"
                        >
                            <div className="flex gap-6 mb-6">
                                <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-2xl object-cover ring-4 ring-brand-teal/5 group-hover:ring-brand-orange/10 transition-all" />
                                <div>
                                    <h4 className="text-xl font-bold font-heading text-brand-teal dark:text-white group-hover:text-brand-orange transition-colors">
                                        {doctor.name}
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400 mb-2 font-medium">{doctor.specialty}</p>
                                    <div className="flex items-center gap-1 text-brand-orange font-bold">
                                        <Star size={16} fill="currentColor" />
                                        <span>{doctor.rating}</span>
                                        <span className="text-gray-400 font-normal text-sm ml-1">({doctor.reviews} reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 border-t border-gray-50 dark:border-white/5 pt-6">
                                <div className="p-2 bg-green-50 dark:bg-brand-green/10 rounded-lg text-brand-green">
                                    <MapPin size={16} />
                                </div>
                                <span className="font-semibold">{doctor.location}</span>
                            </div>

                            <button className="w-full py-4 bg-brand-orange/5 dark:bg-white/5 text-brand-orange dark:text-white border border-brand-orange/20 dark:border-white/10 rounded-2xl font-bold hover:bg-brand-orange hover:text-white hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all touch-response">
                                View Profile
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
