"use client";
import React from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

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
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent!", {
            style: {
              border: "1px solid black",
              padding: "16px",
              color: "black",
              boxShadow: "10px",
            },
            iconTheme: {
              primary: "black",
              secondary: "white",
            },
          });
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
        <SubmitButton />
      </form>
    </section>
  );
}
