"use server";

const baseUrl = "http://localhost:5082";
// const baseUrl = process.env.REACT_APP_API_URL;
const endpoint = "/api/MailData";
const url = `${baseUrl}${endpoint}`;
const apiKey = process.env.REACT_APP_API_KEY;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderName = formData.get("senderName");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!apiKey) {
    throw new Error("API key is missing.");
  }

  const response = await fetch(url, {
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
  return response.json();
};
