"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <h2 className="h2 text-center mb-12">
        Let's <span className="text-amber-800">connect.</span>
      </h2>

      <p className="text-gray-700 dark:text-white/80 -mt-6 mb-3 text-center">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ifteshawn@gmail.com">
          ifteshawn@gmail.com
        </a>{" "}
        or send me a message below.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <div className="flex gap-x-6 w-full">
          <input
            className="h-14 px-4 rounded-lg border border-black w-full dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderName"
            type="text"
            required
            maxLength={500}
            placeholder="Name"
          />
          <input
            className="h-14 px-4 rounded-lg border border-black w-full dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Email"
          />
        </div>
        <input
          className="h-14 my-3 px-4 rounded-lg border border-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="subject"
          type="text"
          required
          maxLength={500}
          placeholder="Subject"
        />
        <textarea
          className="h-52 rounded-lg border border-black p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Message"
          required
          maxLength={5000}
        />

        <button className="btn rounded-full border border-black max-w-[150px] my-3 px-4 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group dark:text-white dark:bg-white dark:bg-opacity-5">
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
            Let's talk
          </span>
          <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
        </button>
      </form>
    </section>
  );
}
