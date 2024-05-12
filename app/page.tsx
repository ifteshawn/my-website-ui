"use client";

import { fetchProfile } from "@/actions/fetchProfile";
import { ProfileData } from "@/lib/types";
import Intro from "@/components/intro";
import About from "@/components/about";
import Contact from "@/components/contact";
import Nav from "@/components/nav";
import Projects from "@/components/projects";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import ErrorPage from "@/components/errorPage";

export default function Home() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      try {
        const profile = await fetchProfile();
        setProfile(profile);
      } catch (error: any) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main
      className="flex flex-col bg-white dark:bg-zinc-900 items-center justify-center 
   h-full px-4 gap-y-[8rem]"
    >
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        <>
          <Intro />
          <Nav />
          <About {...profile} />
          <Projects {...profile} />
          <Contact />
        </>
      )}
      
      {/* {error ? (
        <ErrorPage />
      ) : (
        <>
          <Intro />
          <Nav />
          <About {...profile} />
          <Projects {...profile} />
          <Contact />
        </>
      )} */}
    </main>
  );
}
