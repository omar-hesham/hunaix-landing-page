import { Hexagon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030610] border-t border-white/5 py-12">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6 opacity-50">
          <Hexagon className="w-6 h-6 text-blue-500" />
          <span className="text-xl font-black tracking-wider text-white">HUNAIX</span>
        </div>
        
        <p className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} <strong className="text-blue-500 font-bold">HUNAIX</strong> - منصة الذكاء المؤسسي المتكاملة. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
