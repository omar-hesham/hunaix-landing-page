import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "HUNAIX | Enterprise Intelligence Platform",
  description: "HUNAIX منصة ذكاء مؤسسي متكاملة تجمع الخدمات الحكومية، المالية، التقنية، والتسويقية في منظومة واحدة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-white bg-navy overflow-x-hidden selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

