"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft, PhoneCall, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-[#040812] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#0a0f1c] to-[#0d1425] border border-blue-500/20 rounded-[2.5rem] p-10 md:p-16 text-center max-w-5xl mx-auto shadow-[0_0_50px_rgba(59,130,246,0.1)]"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            مستعد لنقل أعمالك <span className="text-blue-500">للمستوى التالي؟</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            احجز جلسة استشارية مجانية مع خبرائنا لدراسة وضع شركتك الحالي، وتصميم خارطة طريق متكاملة لنموها.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="https://wa.me/message/" target="_blank" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full font-black shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-1">
              تواصل عبر الواتساب
              <ArrowUpLeft className="w-5 h-5" />
            </Link>
            <Link href="tel:+966500000000" className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-all duration-300">
              <PhoneCall className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
              اتصال مباشر
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span>استشارة مجانية بالكامل</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span>سرية تامة للبيانات</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span>تحليل شامل للأعمال</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
