export type Skill = {
  title?: string;
  tools?: string[];
};

export type Credential = {
  title?: string;
  institute?: string;
  description?: string;
  icon?: string;
  date?: string;
};

export type ProjectData = {
  title?: string;
  description?: string;
  tags?: string[];
  imageUrl?: string;
};

export type Experience = {
  title?: string;
  location?: string;
  description?: string;
  icon?: string;
  date?: string;
};

export type ProfileData = {
  experiences?: Experience[];
  projects?: ProjectData[];
  credentials?: Credential[];
  skills?: Skill[];
};

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

const baseUrl = "http://localhost:5082";
const endpoint = "/api/profiledata/IFTE";
const url = `${baseUrl}${endpoint}`;

export const fetchProfile = async () : Promise<ProfileData> => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
      if (validateProfileData(data)) {
        return data;
      } else {
        throw new Error("Invalid profile data");
      }
    }
    if (response.status === 404) {
      throw new Error("Profile not found");
    }
    throw new Error("Something went wrong");
  } catch (error) {
    throw error;
  }
};
