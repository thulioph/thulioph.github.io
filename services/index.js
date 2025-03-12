import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

// GPX
import gpxparser from "gpxparser";

import * as personalInfo from "@/services/personal-info";
import * as talks from "@/services/talks-temp";

export const getPosts = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDirectory);

  return await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const document = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: document.data.title,
        date: document.data.date,
        image: document.data.image,
        imageLink: document.data.imageLink,
        author: document.data.author,
        markdown: document.content,
      };
    })
  );
};

export const getAbout = async () => {
  return personalInfo;
};

export const getProjects = async () => {
  const res = await fetch(
    "https://api.github.com/users/thulioph/repos?per_page=100&sort=updated&direction=desc&type=owner"
  );

  const projects = await res.json();

  return projects;
};

export const getTalks = async () => {
  return talks;
};

// GPX Files
export const gpxConverter = (xmlFile) => {
  const gpx = new gpxparser();

  gpx.parse(xmlFile);

  return gpx;
};

export const getGpxFiles = async () => {
  const gpxDirectory = path.join(process.cwd(), "gpx");
  const filenames = await fs.readdir(gpxDirectory);

  return await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(gpxDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf-8");

      const gpxFile = gpxConverter(fileContents);

      if (gpxFile?.tracks.length !== 0) {
        return gpxFile;
      }

      return;
    })
  );
};
