import React from "react";

import AppHeader from "@/components/header";
import Hero from "@/components/hero";
import AppNav from "@/components/navbar";
import PostCard from "@/components/post-card";
import { getPosts } from "@/services/index";
import image from "@/public/blog.jpg";

import { splitByYear } from "@/utils/index";

const formatPosts = (posts) => {
  const newPosts = posts
    .map((el) => ({ ...el, date: new Date(el.date).toDateString() }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return splitByYear(newPosts, "posts");
};

const Blog = ({ posts }) => {
  return (
    <React.Fragment>
      <AppHeader>Blog</AppHeader>
      <AppNav />

      <main className="page">
        <Hero image={image}>Blog</Hero>

        <section className="internal-grid">
          {posts.map(({ year, posts }) => (
            <React.Fragment key={year}>
              <h2>{year}</h2>
              <ul className="list-items-card">
                {posts.map((el) => (
                  <li key={el.slug}>
                    <PostCard date={el.date} image={el.image} slug={el.slug}>
                      {el.title}
                    </PostCard>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </section>
      </main>
    </React.Fragment>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts: formatPosts(posts),
    },
  };
}
