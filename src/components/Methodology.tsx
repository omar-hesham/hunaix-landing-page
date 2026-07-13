"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "١", title: "الاكتشاف", desc: "نفهم احتياجاتك ونحلل الوضع الحالي لأعمالك بعمق." },
  { num: "٢", title: "الاستراتيجية", desc: "نصمم خطة متكاملة تجمع بين التسويق، التقنية، والإدارة." },
  { num: "٣", title: "التنفيذ", desc: "فريق الخبراء يبدأ العمل على كافة الأصعدة في وقت واحد." },
  { num: "٤", title: "التحسين", desc: "قياس الأداء، تحليل البيانات، وتحسين النتائج باستمرار." }
];

export default function Methodology() {
  return (
    <section className="py-24 bg-[#030610]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
              آلية العمل
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              كيف تبدأ <span className="text-blue-500">رحلتك</span> معنا؟
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 right-0 left-0 h-1 bg-white/5"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative group text-center md:text-right"
              >
                <div className="w-24 h-24 mx-auto md:mx-0 rounded-full bg-[#0a0f1c] border-2 border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-500/50 transition-colors">
                  <span className="text-3xl font-black text-blue-500">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
