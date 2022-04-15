import React from "react";
import Link from "next/link";

import AppHeader from "@/components/header";
import { getPosts } from "@/services/index";

const Blog = ({ posts }) => {
  return (
    <React.Fragment>
      <AppHeader>Blog</AppHeader>

      <main className="page">
        <h1>Blog Page!</h1>

        <ul>
          {posts.map((el) => (
            <li key={el.slug}>
              <Link href={`/blog/${el.slug}`}>{el.title}</Link>
            </li>
          ))}
        </ul>
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
