import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

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
