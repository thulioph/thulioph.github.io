import React from "react";
import Link from "next/link";

import AppHeader from "@/components/header";
import Hero from "@/components/hero";
import AppNav from "@/components/navbar";
import { getPosts } from "@/services/index";

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
        <Hero
          description={`Here you can find all ${posts.length} that I wrote.`}
        >
          Blog
        </Hero>

        <section className="internal-grid">
          {posts.map(({ year, posts }) => (
            <React.Fragment key={year}>
              <h2>{year}</h2>
              <ul className="posts-list">
                {posts.map((el) => (
                  <li key={el.slug}>
                    <Link legacyBehavior href={`/blog/${el.slug}`} passHref>
                      <React.Fragment>
                        <a title={el.title} href={`/blog/${el.slug}`}>
                          <p>{el.title}</p>
                          <span>{el.date}</span>
                        </a>
                      </React.Fragment>
                    </Link>
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
