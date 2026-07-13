"use client";

import { motion } from "framer-motion";
import { Server, BarChart3, Bot, ShieldCheck, Share2 } from "lucide-react";

const products = [
  {
    icon: <Server className="w-6 h-6 text-white" />,
    name: "HUNAIX ERP",
    desc: "نظام سحابي متكامل لإدارة الموارد البشرية، المالية، والمخزون، مخصص ليناسب التشريعات المحلية.",
    features: ["الربط مع الزكاة والدخل (ZATCA)", "إدارة شؤون الموظفين", "متابعة المخزون والمبيعات"]
  },
  {
    icon: <Share2 className="w-6 h-6 text-white" />,
    name: "HUNAIX WhatsApp API",
    desc: "حل ذكي للربط مع واتساب أعمال (WhatsApp Business) لأتمتة خدمة العملاء وإرسال الإشعارات.",
    features: ["ردود تلقائية ذكية", "إرسال حملات ترويجية", "ربط مباشر مع المتجر (API)"]
  }
];

export default function DigitalSolutions() {
  return (
    <section className="py-24 bg-[#040812] relative overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
              منتجاتنا الرقمية
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              أدوات ذكية <span className="text-blue-500">لأتمتة أعمالك</span>
            </h2>
            <p className="text-gray-400 text-lg">
              إلى جانب خدماتنا الاستشارية والتنفيذية، قمنا بتطوير أنظمة رقمية قوية لمساعدتك في أتمتة وتسهيل عملياتك اليومية.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((prod, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-gradient-to-b from-[#0a0f1c] to-[#040812] border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-blue-500/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  {prod.icon}
                </div>
                <h3 className="text-2xl font-black text-white">{prod.name}</h3>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                {prod.desc}
              </p>
              
              <div className="space-y-3 relative z-10">
                {prod.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-gray-400 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
