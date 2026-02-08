import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import FindDoctor from "@/components/FindDoctor";
import Mentorship from "@/components/Mentorship";
import Community from "@/components/Community";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import { Phone, Mail, MapPin, Hospital, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-bright-primary dark:bg-dark-primary">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <FindDoctor />
      <Mentorship />
      <Community />
      <Locations />
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-[#001a18]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-white/5 rounded-[3rem] shadow-2xl overflow-hidden border border-brand-teal/5 dark:border-white/5">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 bg-brand-teal text-white">
                <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">Connect With Us</h2>
                <p className="text-white/80 mb-12 text-lg leading-relaxed">
                  Have questions about our services or the Akshaya Partners program? Our team is available 24/7 in Visakhapatnam.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-6 items-center group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-brand-orange transition-all duration-300">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Call Us 24/7</p>
                      <p className="text-xl font-bold font-heading">+91 88855 59769, +91 89125 65699</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-brand-green transition-all duration-300">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Email Support</p>
                      <p className="text-xl font-bold font-heading">support@akshayahospitalvizag.com</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-brand-red transition-all duration-300">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Visit Location</p>
                      <p className="text-xl font-bold font-heading">Railway New Colony, Vizag</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 lg:p-20">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-brand-teal dark:text-gray-300 uppercase tracking-wider">Full Name</label>
                      <input type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-brand-teal/10 dark:border-white/10 p-5 rounded-2xl focus:ring-4 focus:ring-brand-orange/20 outline-none transition-all shadow-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-brand-teal dark:text-gray-300 uppercase tracking-wider">Phone Number</label>
                      <input type="tel" className="w-full bg-gray-50 dark:bg-white/5 border border-brand-teal/10 dark:border-white/10 p-5 rounded-2xl focus:ring-4 focus:ring-brand-orange/20 outline-none transition-all shadow-sm" placeholder="+91 000 000 0000" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-brand-teal dark:text-gray-300 uppercase tracking-wider">Message</label>
                    <textarea className="w-full bg-gray-50 dark:bg-white/5 border border-brand-teal/10 dark:border-white/10 p-5 rounded-2xl focus:ring-4 focus:ring-brand-orange/20 outline-none h-40 transition-all shadow-sm resize-none" placeholder="How can we help you today?"></textarea>
                  </div>
                  <button className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all active:scale-95">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#001a18] border-t border-brand-teal/5 dark:border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <img src="/logo.png" alt="Akshaya Hospitals" className="h-16 w-auto" />
                <span className="text-3xl font-bold font-heading text-brand-teal dark:text-white tracking-tight">
                  AKSHAYA <span className="text-brand-orange">HOSPITALS</span>
                </span>
              </div>
              <p className="max-w-md text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                100-bedded multispecialty excellence in the heart of Visakhapatnam. Delivering empathetic, international standards of healthcare with a heart.
              </p>
              <div className="flex gap-4">
                {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-xl border border-brand-teal/10 dark:border-white/10 flex items-center justify-center text-brand-teal/60 dark:text-white/60 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all shadow-sm">
                    <Icon size={22} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold font-heading mb-8 text-brand-teal dark:text-white text-xl">Explore</h4>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-medium">
                <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-brand-orange transition-colors">Departments</a></li>
                <li><a href="#doctors" className="hover:text-brand-orange transition-colors">Find a Doctor</a></li>
                <li><a href="#community" className="hover:text-brand-orange transition-colors">Community Outreach</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold font-heading mb-8 text-brand-teal dark:text-white text-xl">Support</h4>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-medium">
                <li><a href="#" className="text-brand-orange font-bold hover:underline">Patient Portal</a></li>
                <li><a href="#faq" className="hover:text-brand-orange transition-colors">FAQs</a></li>
                <li><a href="#locations" className="hover:text-brand-orange transition-colors">Locations</a></li>
                <li><a href="#contact" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-teal/10 dark:border-white/10 pt-10 text-center text-sm text-gray-400 font-medium">
            © 2026 Akshaya Hospitals, Visakhapatnam. Established with a mission of Compassion and Perfection.
          </div>
        </div>
      </footer>
    </main>
  );
}
