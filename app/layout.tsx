import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesContainer from "@/components/particlesContainer";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";

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
      <ThemeContextProvider>
        <body
          className={`${inter.className} flex justify-center w-full h-full bg-zinc-50 text-gray-950 dark:bg-black dark:text-white`}
        >
          <ParticlesContainer />
          <div className=" bg-white dark:bg-zinc-900 ring-1 ring-zinc-100 dark:ring-zinc-300/20 w-full h-full sm:w-[70%] sm:min-w-[55rem] sm:px-[2%] max-w-[90rem] z-[999] opacity-90">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
