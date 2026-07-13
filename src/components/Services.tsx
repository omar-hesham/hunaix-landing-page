"use client";

import { motion } from "framer-motion";
import { Building2, Calculator, Code2, Cpu, Megaphone, Palette } from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-8 h-8 text-blue-500" />,
    title: "تأسيس الشركات قانونياً وإدارياً",
    desc: "من استخراج السجلات والتراخيص إلى هيكلة الموارد البشرية وفق القوانين الحديثة."
  },
  {
    icon: <Calculator className="w-8 h-8 text-blue-500" />,
    title: "الخدمات المحاسبية والمالية",
    desc: "إدارة الضرائب (ZATCA)، مسك الدفاتر، التخطيط المالي والميزانيات لضمان الاستقرار."
  },
  {
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    title: "الحلول التقنية المتقدمة",
    desc: "تطوير تطبيقات الجوال، المتاجر الإلكترونية، والبرمجيات المخصصة السحابية."
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    title: "أنظمة تخطيط الموارد (ERP)",
    desc: "أتمتة العمليات الداخلية بالكامل مع نظام HUNAIX ERP الشامل والمرن."
  },
  {
    icon: <Megaphone className="w-8 h-8 text-blue-500" />,
    title: "التسويق الرقمي الشامل",
    desc: "إدارة الحملات الإعلانية، السيو (SEO)، وإدارة منصات التواصل الاجتماعي بنهج بيانات."
  },
  {
    icon: <Palette className="w-8 h-8 text-blue-500" />,
    title: "الهوية البصرية والإنتاج",
    desc: "تصميم هويات تجارية احترافية، إنتاج الفيديوهات (Motion)، والتصوير الإبداعي."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#040812] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4">
              منظومة متكاملة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              كل ما تحتاجه للنجاح - <span className="text-blue-500">تحت سقف واحد</span>
            </h2>
            <p className="text-gray-400 text-lg">
              لا داعي للتعاقد مع عدة وكالات. نحن نوفر لك ترسانة من الخبراء في جميع المجالات للعمل كفريق واحد لخدمة مشروعك.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-[#0a0f1c] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
              <div className="mb-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {srv.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{srv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
