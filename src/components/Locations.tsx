"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const locations = [
    {
        name: "Main Campus (Visakhapatnam)",
        address: "D.No.43-9-201, Railway New Colony, Visakhapatnam",
        phone: "+91 88855 59769, +91 89125 65699",
        hours: "Open 24/7",
        specialties: "Emergency, Advanced ICUs, NICU, Modern OTs"
    },
    {
        name: "Akshaya Specialty Center",
        address: "West Wing Wing, Vizag District Center",
        phone: "+91 88855 59769",
        hours: "8:00 AM - 10:00 PM",
        specialties: "Diagnostics, Radiology, Physiotherapy"
    }
];

export default function Locations() {
    return (
        <section id="locations" className="py-24 bg-white dark:bg-dark-primary/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold font-heading text-brand-teal dark:text-white mb-4"
                    >
                        Our <span className="text-brand-orange">Locations</span>
                    </motion.h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        Akshaya Hospitals is expanding to serve you better. Visit one of our world-class facilities near you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={loc.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] shadow-sm border border-brand-teal/5 dark:border-white/10 hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-orange-500/5 transition-all group"
                        >
                            <h4 className="text-2xl font-bold font-heading mb-6 text-brand-teal dark:text-white group-hover:text-brand-orange transition-colors">{loc.name}</h4>
                            <div className="space-y-4 text-gray-500 dark:text-gray-400">
                                <div className="flex gap-4">
                                    <div className="p-2 bg-orange-50 dark:bg-brand-orange/10 rounded-lg text-brand-orange">
                                        <MapPin className="shrink-0" size={20} />
                                    </div>
                                    <span className="font-medium">{loc.address}</span>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-2 bg-green-50 dark:bg-brand-green/10 rounded-lg text-brand-green">
                                        <Clock className="shrink-0" size={20} />
                                    </div>
                                    <span className="font-medium">{loc.hours}</span>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-2 bg-red-50 dark:bg-brand-red/10 rounded-lg text-brand-red">
                                        <Phone className="shrink-0" size={20} />
                                    </div>
                                    <span className="font-medium">{loc.phone}</span>
                                </div>
                            </div>
                            <div className="mt-10 pt-8 border-t border-gray-100 dark:border-white/5">
                                <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">Facility Excellence</p>
                                <p className="text-lg font-bold text-brand-teal dark:text-white leading-tight">{loc.specialties}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Map */}
                <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/5 bg-gray-100 dark:bg-black/40">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228588523351!2d83.29147341088867!3d17.72763598379417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943275d4ee569%3A0xfb64bf4850a8c704!2sAKSHAYA%20Hospitals%20-%20Railway%20New%20Colony%2C%20Visakhapatnam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale dark:invert-[0.9] dark:hue-rotate-180 contrast-[1.1] opacity-90 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700"
                    ></iframe>

                    {/* Floating Map Control Overlay (Optional aesthetic) */}
                    <div className="absolute top-8 left-8 z-10 p-6 bg-white/90 dark:bg-brand-teal/80 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-xl max-w-xs pointer-events-none hidden md:block">
                        <h3 className="text-xl font-bold font-heading mb-2 text-brand-teal dark:text-white">Main Campus Navigator</h3>
                        <p className="text-gray-500 dark:text-white/70 text-sm">Use the map to find parking and the nearest entrance to our main trauma center.</p>
                    </div>

                    <div className="absolute bottom-8 right-8 z-10 pointer-events-auto">
                        <a
                            href="https://www.google.com/maps/place/AKSHAYA+Hospitals+-+Railway+New+Colony,+Visakhapatnam/@17.727636,83.2914734,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3943275d4ee569:0xfb64bf4850a8c704!8m2!3d17.727636!4d83.2940483!16s%2Fg%2F11b75lznk2?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-orange-500/30"
                        >
                            Open in Google Maps <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
