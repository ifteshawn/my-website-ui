import React from 'react'
import Link from 'next/link';
import { LuLinkedin, LuFacebook, LuGithub } from "react-icons/lu";

export default function Socials() {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
        <Link href={"https://www.facebook.com/ifte.shawn/"} className="hover:text-amber-900 transition-all duration-300">
            <LuFacebook />
        </Link>
        <Link href={"https://linkedin.com/in/iftekhar-alam-2115931aa"} className="hover:text-amber-900 transition-all duration-300">
            <LuLinkedin />
        </Link>
        <Link href={"https://github.com/ifteshawn"} className="hover:text-amber-900 transition-all duration-300">
            <LuGithub />
        </Link>
    </div>
  )
}
