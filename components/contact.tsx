"use client";
import React, { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";
import { validateFormData } from "@/lib/utils";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  const initialErrors = {
    senderName: { error: false, message: "" },
    senderEmail: { error: false, message: "" },
    subject: { error: false, message: "" },
    message: { error: false, message: "" },
  };

  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState(initialErrors);

  const clientAction = async (formData: FormData) => {
    setErrors(initialErrors);
    // Calling data validation function
    const validationErrors = validateFormData(formData);
    setErrors(
      validationErrors as {
        senderName: { error: boolean; message: string };
        senderEmail: { error: boolean; message: string };
        subject: { error: boolean; message: string };
        message: { error: boolean; message: string };
      }
    );
    if (Object.values(validationErrors).some((error) => error.error)) {
      return;
    }

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

    // Clear form after successful submission
    setSenderName("");
    setSenderEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
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

      {/* form */}
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={clientAction}
        noValidate
      >
        {/* name and email div */}
        <div className="flex flex-col sm:flex-row gap-x-6 w-full">
          <div className="w-full">
            <input
              className="h-14 px-4 rounded-lg border border-black w-full dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderName"
              type="text"
              required
              maxLength={500}
              placeholder="Name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
            {errors.senderName.error && (
              <p className="text-left text-red-500">
                {errors.senderName.message}
              </p>
            )}
          </div>

          <div className="w-full mt-3 sm:mt-0">
            <input
              className="h-14 px-4 rounded-lg border border-black w-full dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
            {errors.senderEmail.error && (
              <p className="text-left text-red-500">
                {errors.senderEmail.message}
              </p>
            )}
          </div>
        </div>

        {/* subject div */}
        <div className="my-3">
          <input
            className="w-full h-14 px-4 rounded-lg border border-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="subject"
            type="text"
            required
            maxLength={500}
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject.error && (
            <p className="text-left text-red-500">{errors.subject.message}</p>
          )}
        </div>

        {/* message div */}
        <div>
          <textarea
            className="w-full h-52 rounded-lg border border-black p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Message"
            required
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message.error && (
            <p className="text-left text-red-500">{errors.message.message}</p>
          )}
        </div>
        <SubmitButton />
      </form>
    </motion.section>
  );
}
