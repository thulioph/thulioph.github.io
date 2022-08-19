import React from "react";
import ReactMarkdown from "react-markdown";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import { getPosts } from "@/services/index";

const Post = ({ title, date, markdown, author }) => {
  return (
    <React.Fragment>
      <AppHeader>Blog | {title}</AppHeader>
      <AppNav />

      <main className="page about-page projects-page">
        <article>
          <section>
            <h1>{title}</h1>
            <h4>@{author}</h4>

            <time>{date}</time>
          </section>

          <section>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </section>
        </article>
      </main>
    </React.Fragment>
  );
};

export const getStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => `/blog/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const posts = await getPosts();
  const currentPost = posts.find((post) => post.slug === slug);

  return { props: currentPost };
};

export default Post;
