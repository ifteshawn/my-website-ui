import { links } from "./data";

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

export type SectionName = (typeof links)[number]["name"];
