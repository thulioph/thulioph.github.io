import React from "react";
import Link from "next/link";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import { getPosts } from "@/services/index";

const Blog = ({ posts }) => {
  return (
    <React.Fragment>
      <AppHeader>Blog</AppHeader>
      <AppNav />

      <main className="page about-page projects-page">
        <section>
          <h1>Blog</h1>
          <p>
            I like to write about technical stuff and sometimes about any other
            thought.
          </p>
        </section>

        <section>
          <ul>
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
