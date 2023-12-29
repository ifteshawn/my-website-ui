"use server";

const baseUrl = "http://localhost:5082";
const endpoint = "/api/MailData";
const url = `${baseUrl}${endpoint}`;

export const sendEmail = async (formData : FormData) => {
    const response = await fetch(url, {
        method: "POST",
        body: formData
    });
    return response.json();
}