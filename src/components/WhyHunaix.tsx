"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "شريك واحد - مسؤولية كاملة",
    desc: "لا تنسيق، لا تشتت. نتحمل مسؤولية نجاحك من الألف إلى الياء، عبر جميع الأقسام."
  },
  {
    title: "تخفيض التكاليف التشغيلية",
    desc: "بدلاً من دفع هوامش ربح لشركات مختلفة، باقة HUNAIX الموحدة توفر لك ميزانية ضخمة."
  },
  {
    title: "انسجام البيانات (Data Synergy)",
    desc: "فريق التسويق يرى مبيعاتك، وفريق التقنية يقرأ سلوك عملائك.. الجميع يعمل من أجل هدف واحد."
  },
  {
    title: "سرعة الإنجاز والنمو",
    desc: "القضاء على أوقات الانتظار بين 'مقدمي الخدمات'. قرارات أسرع، تنفيذ فوري، ونمو متسارع."
  }
];

export default function WhyHunaix() {
  return (
    <section className="py-24 bg-[#030610] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-500/5 blur-[120px] pointer-events-none skew-x-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
              القيمة المضافة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              لماذا تختار نموذج <span className="text-blue-500">HUNAIX</span> للمؤسسات؟
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              نحن لسنا مجرد مزود خدمة، نحن شريكك الاستراتيجي. نموذج عملنا مصمم خصيصاً ليقضي على نقاط الضعف التي تواجهها الشركات عند التعامل مع جهات خارجية متعددة.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#0a0f1c] border border-white/5 p-6 rounded-2xl">
                <div className="text-4xl font-black text-white mb-2">+85%</div>
                <div className="text-sm text-gray-400">توفير في وقت التنسيق الإداري</div>
              </div>
              <div className="bg-[#0a0f1c] border border-white/5 p-6 rounded-2xl">
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-sm text-gray-400">توافق بين استراتيجيات النمو</div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="flex items-start gap-4 p-6 bg-[#0a0f1c] border border-white/5 rounded-2xl hover:border-blue-500/30 transition-colors group"
              >
                <div className="shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{reason.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
