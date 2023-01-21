import React from "react";
import Link from "next/link";

import AppHeader from "@/components/header";
import Hero from "@/components/hero";
import AppNav from "@/components/navbar";
import { getPosts } from "@/services/index";
import image from "@/public/blog.jpg";

const Blog = ({ posts }) => {
  return (
    <React.Fragment>
      <AppHeader>Blog</AppHeader>
      <AppNav />

      <main className="page">
        <Hero image={image}>Blog</Hero>

        <section className="internal-grid">
          <ul className="list-items">
            {posts.map((el) => (
              <li key={el.slug}>
                <Link href={`/blog/${el.slug}`}>{el.title}</Link>
              </li>
            ))}
          </ul>
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
      posts,
    },
  };
}
