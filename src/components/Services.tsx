"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    HeartPulse,
    Brain,
    Bone,
    Baby,
    Eye,
    Stethoscope,
    Activity,
    Microwave,
    Sparkles,
    X,
    ArrowRight
} from "lucide-react";

const services = [
    {
        title: "Cardiology",
        description: "Expert care for your heart with advanced diagnostics and treatment plans.",
        longDescription: "Your heart is the rhythm of your life. At Akshaya, we don't just look at scans and charts; we look at the person behind the beat. Our cardiology team blends deep scientific expertise with a gentle, patient-first approach to ensure your heart stays strong and healthy.",
        howWeTreat: "We use ultra-precise diagnostic tools to understand your unique heart health. From lifestyle-based prevention to advanced non-invasive interventions, our treatments are designed to be as minimally disruptive as possible while delivering maximum results.",
        icon: HeartPulse,
        color: "bg-red-50 text-brand-red dark:bg-brand-red/10 border border-brand-red/10"
    },
    {
        title: "Neurology",
        description: "Specialized treatment for disorders of the nervous system and brain health.",
        longDescription: "The brain and nervous system are the control centers of everything you are. When things feel off—whether it's persistent headaches or mobility issues—it can be frightening. Our neurology department is dedicated to providing clarity and specialized care to help you reclaim your independence.",
        howWeTreat: "We combine world-class neuro-imaging with compassionate therapy plans. We treat conditions like stroke, epilepsy, and nerve disorders by focusing on both immediate relief and long-term neurological health through personalized medication and rehabilitation.",
        icon: Brain,
        color: "bg-orange-50 text-brand-orange dark:bg-brand-orange/10 border border-brand-orange/10"
    },
    {
        title: "Orthopedics",
        description: "Comprehensive care for bone, joint, and muscle conditions and injuries.",
        longDescription: "Movement is freedom. Whether you're an athlete recovering from an injury or someone managing the aches of age, our goal is the same: to get you back to the activities you love without pain holding you back.",
        howWeTreat: "Our approach starts with conservative, non-surgical treatments like specialized physical therapy and joint injections. If surgery is needed, we utilize 'keyhole' arthroscopic techniques and modern joint replacements to ensure quicker recovery and lasting mobility.",
        icon: Bone,
        color: "bg-green-50 text-brand-green dark:bg-brand-green/10 border border-brand-green/10"
    },
    {
        title: "Pulmonology",
        description: "Expert care for respiratory conditions and lung health management.",
        longDescription: "Every breath matters. We specialize in helping you breathe easier, treating everything from chronic asthma to complex lung infections with a focus on restoring your vital capacity and energy levels.",
        howWeTreat: "We utilize advanced pulmonary function tests to pinpoint exactly where your breathing needs support. Treatments range from personalized inhaler therapies and oxygen management to specialized pulmonary rehab that strengthens your respiratory muscles.",
        icon: Activity,
        color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/10 border border-emerald-500/10"
    },
    {
        title: "ENT",
        description: "Specialized treatment for ear, nose, and throat disorders.",
        longDescription: "Our senses connect us to the world. Problems with hearing, balance, or even persistent sinus issues can significantly affect your quality of life. Our ENT specialists provide clear solutions to help you reconnect.",
        howWeTreat: "From gentle ear microsurgery to advanced endoscopic sinus treatments, we use minimally invasive methods. We also provide comprehensive hearing assessments and speech therapy to ensure total sensory wellness.",
        icon: Activity,
        color: "bg-orange-50 text-brand-orange dark:bg-brand-orange/10 border border-brand-orange/10"
    },
    {
        title: "Dermatology",
        description: "Comprehensive skin care, from clinical treatments to aesthetic procedures.",
        longDescription: "Your skin is your first line of defense and a major part of your confidence. We treat skin health as a bridge between medical wellness and aesthetic beauty, ensuring you feel good both inside and out.",
        howWeTreat: "We address variety of conditions from acne and eczema to complex dermatological disorders. Our treatments combine clinical prescriptions with advanced laser therapies and aesthetic procedures tailored to your specific skin type and goals.",
        icon: Sparkles,
        color: "bg-rose-50 text-rose-500 dark:bg-rose-900/10 border border-rose-500/10"
    },
    {
        title: "Gastroenterology",
        description: "Advanced digestive system care and liver health treatments.",
        longDescription: "Digestive health is the foundation of energy and immunity. If you're dealing with discomfort or chronic digestive issues, our team focuses on finding the root cause to bring your internal system back into balance.",
        howWeTreat: "We use gentle endoscopic procedures for precise diagnosis and treatment of the GI tract. Our plans often include a mix of modern medicine and nutritional guidance to heal conditions like GERD, ulcers, and liver disorders.",
        icon: Activity,
        color: "bg-amber-50 text-amber-600 dark:bg-amber-900/10 border border-amber-500/10"
    },
    {
        title: "Maternal Care",
        description: "Holistic care for mothers and newborns with modern LDRP suites.",
        longDescription: "The journey to motherhood is one of life's most precious chapters. We provide a sanctuary where medical safety meets emotional warmth, ensuring both mother and baby are nurtured every step of the way.",
        howWeTreat: "Our LDRP (Labor, Delivery, Recovery, Postpartum) suites allow you to stay in one comfortable place. We provide painless delivery options, continuous fetal monitoring, and expert neonatal support, all within a family-friendly environment.",
        icon: Baby,
        color: "bg-red-50 text-brand-red dark:bg-brand-red/10 border border-brand-red/10"
    },
    {
        title: "Psychiatry",
        description: "Expert mental health support and counseling for holistic well-being.",
        longDescription: "Mental health is just as vital as physical health. We offer a safe, confidential space where you can speak freely and find the support needed to navigate life's challenges with strength and resilience.",
        howWeTreat: "We believe in a balanced approach that combines modern therapeutic counseling with clinical psychiatry. Our treatments are highly personalized, focusing on empowering you with the tools to manage stress, anxiety, and other mental health conditions.",
        icon: Activity,
        color: "bg-orange-50 text-brand-orange dark:bg-brand-orange/10 border border-brand-orange/10"
    },
    {
        title: "Critical Care",
        description: "State-of-the-art ICUs, NICU, and ventilators for critical patient care.",
        longDescription: "In life's most critical moments, every second counts. Our Critical Care unit is a fortress of advanced technology and human vigilance, dedicated to stabilising and healing patients in their most vulnerable states.",
        howWeTreat: "We operate 24/7 with a 1:1 nurse-to-patient ratio in specialized ICUs. Using high-end ventilators and real-time hemodynamic monitoring, our intensivists provide aggressive but empathetic care to ensure the best possible recovery outcomes.",
        icon: HeartPulse,
        color: "bg-red-50 text-brand-red dark:bg-brand-red/10 border border-brand-red/10"
    },
    {
        title: "Modern OTs",
        description: "Precision surgical procedures with cutting-edge medical technology.",
        longDescription: "Surgery can be a daunting prospect. Our Modern Operation Theatres are designed to maximize safety and precision, giving our surgeons the tools and the environment they need to perform at their very best for you.",
        howWeTreat: "We utilize HEPA-filtered laminar airflow systems to ensure ultra-sterile environments. Our OTs are equipped with high-definition laparoscopy and advanced anesthesia workstations to make surgeries safer, shorter, and more effective.",
        icon: Activity,
        color: "bg-green-50 text-brand-green dark:bg-brand-green/10 border border-brand-green/10"
    },
    {
        title: "Diagnostics",
        description: "Accurate labs, radiology, and ultrasonography services under one roof.",
        longDescription: "A clear diagnosis is the first step to healing. We offer a comprehensive suite of diagnostic services so you don't have to travel between different labs. Clarity, accurately and quickly—that's our promise.",
        howWeTreat: "Our in-house labs utilize automated analyzers for high-speed, high-accuracy blood tests. Combined with digital X-rays and high-resolution ultrasound, we provide a complete picture of your health to guide your treatment perfectly.",
        icon: Microwave,
        color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/10 border border-cyan-500/10"
    },
    {
        title: "Physiotherapy",
        description: "Comprehensive recovery plans for physical rehabilitation and mobility.",
        longDescription: "Recovery doesn't end when you leave the hospital room. Physiotherapy is about helping you return to your peak performance, whether that's walking without pain or returning to professional sports.",
        howWeTreat: "Our therapists create active recovery plans tailored to your specific injury or surgery. We use a combination of manual therapy, electrotherapy, and targeted exercise routines to reduce pain and rebuild your strength and flexibility.",
        icon: Activity,
        color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/10 border border-emerald-500/10"
    },
    {
        title: "Pediatrics",
        description: "Gentle and specialized medical care for infants, children, and adolescents.",
        longDescription: "Children aren't just small adults; they have unique physical and emotional needs. Our pediatrics department is a colorful, friendly space where we treat every 'little patient' with extra patience and care.",
        howWeTreat: "From routine vaccinations to treating childhood illnesses, we focus on making the hospital experience 'not scary.' We use child-friendly diagnostic tools and provide clear, reassuring guidance to parents at every step.",
        icon: Baby,
        color: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/10 border border-yellow-500/10"
    },
    {
        title: "Ophthalmology",
        description: "Advanced eye care services from routine exams to complex surgeries.",
        longDescription: "Vision is how we experience the beauty of life. Our eye care specialists are dedicated to preserving and restoring your sight using the latest advancements in optical science and surgery.",
        howWeTreat: "We treat conditions from simple refractive errors to complex cataracts and glaucoma. Our surgeons perform micro-incisional eye surgeries with rapid recovery times, ensuring you can return to seeing the world clearly as soon as possible.",
        icon: Eye,
        color: "bg-teal-50 text-brand-teal dark:bg-brand-teal/10 border border-brand-teal/10"
    },
    {
        title: "General Medicine",
        description: "Primary healthcare services with a focus on prevention and wellness.",
        longDescription: "Think of us as your health headquarters. General medicine is about long-term wellness, disease prevention, and managing your overall health journey through every stage of life.",
        howWeTreat: "We focus on thorough physical examinations and health screenings. Our physicians manage chronic conditions like diabetes and hypertension while providing expert guidance on nutrition and preventative care to keep you out of the hospital.",
        icon: Stethoscope,
        color: "bg-green-50 text-brand-green dark:bg-brand-green/10 border border-brand-green/10"
    },
    {
        title: "Emergency Care",
        description: "24/7 rapid response medical services for critical health situations.",
        longDescription: "Accidents and health crises don't schedule an appointment. Our Emergency Department is ready 24/7, staffed by experts trained to handle the most stressful situations with calm, life-saving precision.",
        howWeTreat: "We use a rapid triage system to ensure critical cases are seen immediately. With an on-site ambulance fleet, a 24-hour pharmacy, and direct access to trauma surgeons, we provide a complete safety net for you and your family.",
        icon: Activity,
        color: "bg-red-50 text-brand-red dark:bg-brand-red/10 border border-brand-red/10 animate-pulse"
    },
    {
        title: "Radiology",
        description: "Modern imaging services including MRI, CT, and X-ray for accurate diagnosis.",
        longDescription: "Radiology is the art of seeing what remains hidden. By using high-energy waves and advanced imaging, we can peak inside the body to catch problems before they become serious.",
        howWeTreat: "We offer digital X-rays, high-slice CT scans, and 3D ultrasonography. Our radiologists work closely with your specialists to provide detailed interpretations that form the cornerstone of your treatment plan.",
        icon: Microwave,
        color: "bg-brand-orange/5 text-brand-orange dark:bg-brand-orange/10 border border-brand-orange/10"
    }
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
                            <button
                                onClick={() => setSelectedService(service)}
                                className="mt-6 text-sm font-semibold text-bright-accent dark:text-dark-accent hover:underline flex items-center gap-1 group"
                            >
                                Learn more
                                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-brand-teal/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden"
                        >
                            <div className="p-8 md:p-12">
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${selectedService.color}`}>
                                        <selectedService.icon size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold font-heading text-brand-teal dark:text-white">
                                        {selectedService.title}
                                    </h3>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange mb-3 flex items-center gap-2">
                                            <span className="w-8 h-[2px] bg-brand-orange/30"></span>
                                            What is {selectedService.title}?
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                            {selectedService.longDescription}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-brand-green mb-3 flex items-center gap-2">
                                            <span className="w-8 h-[2px] bg-brand-green/30"></span>
                                            How We Treat
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {selectedService.howWeTreat}
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            onClick={() => {
                                                setSelectedService(null);
                                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-orange/90 transition-all shadow-lg shadow-orange-500/10"
                                        >
                                            Consult with a Specialist
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
