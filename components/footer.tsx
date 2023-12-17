import React from "react";

export default function Footer() {
  return (
    <footer className="pb-5 px-4 text-center bg-white text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Iftekhar Alam. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
