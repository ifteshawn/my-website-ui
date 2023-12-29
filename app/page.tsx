"use client";

import { ProfileData, fetchProfile } from "@/actions/fetchProfile";
import Intro from "@/components/Intro";
import About from "@/components/about";
import Contact from "@/components/contact";
import Nav from "@/components/nav";
import Projects from "@/components/projects";
import { useEffect, useState } from "react";
// import ThemeSwitcher from "@/components/theme-switcher";

export default function Home() {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    useEffect(() => {
      const fetchData = async () => {
        const profile = await fetchProfile();
        setProfile(profile);
      };
      fetchData();
    }, []);
    
  return (
    <main className="flex flex-col bg-white dark:bg-zinc-900 items-center justify-center h-full px-4 gap-y-[8rem]">
      <Nav />
      <Intro />
      <About {...profile}/>
      <Projects {...profile}/>
      <Contact />
    </main>
  )
}
