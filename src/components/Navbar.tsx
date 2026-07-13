"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hexagon } from "lucide-react"; 

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-[#040812]/80 backdrop-blur-2xl border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="HUNAIX" 
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {["منصة", "حلول", "عملائنا", "موارد", "تواصل معنا"].map((item) => (
            <Link key={item} href={`#${item === "تواصل معنا" ? "contact" : "services"}`} className="text-gray-300 hover:text-blue-500 transition-colors text-sm font-semibold">
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
            العربية
          </button>
        </div>
      </div>
    </nav>
  );
}
