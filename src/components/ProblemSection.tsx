"use client";

import { motion } from "framer-motion";
import { Frown, Clock, TrendingDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ProblemSection() {
  return (
    <section className="py-24 bg-[#030610] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
              واقع الأعمال اليوم
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              هل تعاني من تشتت جهودك بين <span className="text-blue-500">وكالات متعددة؟</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Frown className="w-8 h-8 text-blue-500" />,
              title: "تضارب الاستراتيجيات",
              desc: "كل شركة تعمل في وادٍ منفصل، مما يخلق فجوة بين التسويق، المبيعات، والتقنية."
            },
            {
              icon: <Clock className="w-8 h-8 text-blue-500" />,
              title: "إهدار الوقت والموارد",
              desc: "وقت طويل ضائع في التنسيق والمتابعة بدلاً من التركيز على نمو أعمالك الحقيقي."
            },
            {
              icon: <TrendingDown className="w-8 h-8 text-blue-500" />,
              title: "تكاليف باهظة غير مبررة",
              desc: "دفع مبالغ طائلة لشركات متعددة دون الحصول على عائد استثمار (ROI) متكامل."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
