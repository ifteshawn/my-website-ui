import React from "react";
import { useFormStatus } from "react-dom";
import { BsArrowRight } from "react-icons/bs";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn rounded-full border border-black max-w-[150px] 
    my-3 px-4 py-3 transition-all duration-300 flex items-center 
    justify-center overflow-hidden hover:border-accent group 
    dark:text-white dark:bg-white dark:bg-opacity-5"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black dark:border-white"></div>
      ) : (
        <>
          <span
            className="group-hover:-translate-y-[120%] group-hover:opacity-0 
           transition-all duration-500"
          >
            Let's talk
          </span>
          <BsArrowRight
            className="-translate-y-[120%] opacity-0 group-hover:flex 
           group-hover:-translate-y-0 group-hover:opacity-100 transition-all 
           duration-300 absolute text-[22px]"
          />
        </>
      )}
    </button>
  );
}
