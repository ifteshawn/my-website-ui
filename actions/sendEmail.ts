"use server";

import { validateString, getErrorMessage } from "@/lib/utils";

// const baseUrl = "http://localhost:5082";
const baseUrl = process.env.REACT_APP_API_URL;
const endpoint = "/api/MailData";
const url = `${baseUrl}${endpoint}`;
const apiKey = process.env.REACT_APP_API_KEY;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderName = formData.get("senderName");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email address",
    };
  }

  if (!validateString(senderName, 500)) {
    return {
      error: "Invalid name",
    };
  }

  if (!validateString(subject, 500)) {
    return {
      error: "Invalid subject",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  if (!apiKey) {
    throw new Error("API key is missing.");
  }

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        senderEmail,
        senderName,
        subject,
        message,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return response.json();
};
