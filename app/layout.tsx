import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ParticlesContainer from "@/components/particlesContainer";
import HeaderPrac from "@/components/headerPrac";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iftekhar | Personal Portfolio",
  description: "Iftekhar is a full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // className={`${inter.className} flex relative justify-center w-full sm:w-[95%] sm:px:8 bg-zinc-50 text-gray-950`}
        className={`${inter.className} flex justify-center w-full bg-zinc-50 text-gray-950`}
      >
        <ParticlesContainer /> 
        <div className=" bg-white w-full h-full sm:w-[70%] sm:min-w-[40rem] sm:px-[2%] max-w-[90rem] z-[999] opacity-90">
          <HeaderPrac />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
