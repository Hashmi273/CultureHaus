import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CULTUREHAUS™ | Where Culture Lives",
  description:
    "A global cultural collective and events platform. Culture Driven. Community Focused. Creativity Unleashed.",
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#070707] text-[#EDEDED] font-sans selection:bg-white selection:text-black antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
