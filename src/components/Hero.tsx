"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";
import NetworkParticles from "./NetworkParticles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#040812]">
      {/* Background Neural Network Particles */}
      <NetworkParticles />
      
      {/* Glowing Orbs for ambiance */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Right Column (Text Content in RTL) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-right z-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.5] mb-6 drop-shadow-lg">
              أعمالك تستحق شريكاً
              <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] block py-4">يفهمها كاملاً</span>
              من التأسيس حتى النمو
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-medium">
              HUNAIX منصة ذكاء مؤسسي متكاملة تجمع الخدمات الحكومية، المالية، التقنية، والتسويقية في منظومة واحدة - لأن نجاح أعمالك لا يعتمد على خدمة واحدة.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#contact" className="group flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full font-black shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-300 hover:-translate-y-1">
                احجز استشارتك المجانية
                <ArrowUpLeft className="w-5 h-5 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link href="#services" className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                اكتشف المنصة
              </Link>
            </div>
          </motion.div>

          {/* Left Column (Exact Image Dashboard with 3D glow effect) */}
          <div className="relative w-full h-[550px] lg:h-[650px] flex items-center justify-center perspective-[1200px] z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 15, rotateX: 5 }}
              animate={{ opacity: 1, scale: 1, rotateY: 15, rotateX: 8, y: [0, -10, 0] }}
              transition={{ 
                duration: 1, 
                ease: "easeOut", 
                delay: 0.2,
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-full h-full max-w-[800px] max-h-[600px] flex items-center justify-center transform-gpu"
            >
              <img 
                src="/dashboard.png" 
                alt="HUNAIX Dashboard" 
                className="w-full h-auto object-contain rounded-3xl drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:drop-shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
