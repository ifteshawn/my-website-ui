"use server";

import { ProfileData } from "@/lib/types";

const validateProfileData = (profileData: ProfileData) => {
  if (typeof profileData === "object" && profileData !== null) {
    const hasExperiences = Array.isArray(profileData.experiences);
    const hasProjects = Array.isArray(profileData.projects);
    const hasCredentials = Array.isArray(profileData.credentials);
    const hasSkills = Array.isArray(profileData.skills);

    if (hasExperiences || hasProjects || hasCredentials || hasSkills) {
      return true;
    }
  }
};

// const baseUrl = "http://localhost:5082";
const baseUrl = process.env.REACT_APP_API_URL;
const endpoint = "/api/profiledata/ifte";
const url = `${baseUrl}${endpoint}`;
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchProfile = async (): Promise<ProfileData> => {
  if (!apiKey) {
    throw new Error("API key is missing.");
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      cache: 'no-store' 
    });

    if (response.ok) {
      const data = await response.json();
      if (validateProfileData(data)) {
        return data;
      } else {
        throw new Error("Invalid profile data");
      }
    }
    if (response.status === 401) {
      throw new Error("Unauthorized");
    }
    if (response.status === 404) {
      throw new Error("Profile not found");
    }
    throw new Error("Something went wrong");
  } catch (error) {
    throw error;
  }
};
