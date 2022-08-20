import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import { getPosts } from "@/services/index";

const Post = ({ title, date, markdown, author, image, imageLink }) => {
  const imagePath = `/images/posts/${image}`;

  return (
    <React.Fragment>
      <AppHeader>Blog | {title}</AppHeader>
      <AppNav />

      <main className="page about-page blog-page">
        <article>
          <section>
            <h1>{title}</h1>
            <h4>@{author}</h4>
            <time>{date}</time>

            {image && (
              <React.Fragment>
                <Image
                  layout="responsive"
                  src={imagePath}
                  width={800}
                  height={450}
                />

                <figcaption>
                  <a href={imageLink} target="_blank" rel="noreferrer">
                    Photo: Unsplash
                  </a>
                </figcaption>
              </React.Fragment>
            )}
          </section>

          <section>
            <ReactMarkdown
              linkTarget="_blank"
              rehypePlugins={[rehypeHighlight]}
            >
              {markdown}
            </ReactMarkdown>
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
