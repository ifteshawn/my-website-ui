import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-5 px-4 text-center bg-white dark:bg-zinc-900 text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {year} Iftekhar Alam. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-bold">About this website: </span>
        <a href="https://github.com/ifteshawn/my-website-ui.git" className="underline">
        <span className="font-semibold">Frontend:</span>
        </a>
          {" "} React & Next.js (App Router & Server Actions), TypeScript, Tailwind
          CSS, Framer Motion. {" "}  
        <a href="https://github.com/ifteshawn/MyWebsiteApi.git" className="underline">
        <span className="font-semibold">Backend:</span>
        </a>
          {" "} .NET 8, and Resend API
        . <span className="font-semibold">Database:</span> Azure Cosmos DB, and Azure Blob Storage. Published as an
        Azure App Service with Azure CI/CD.
      </p>
    </footer>
  );
}
