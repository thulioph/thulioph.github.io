import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import { getPosts } from "@/services/index";

const getImagePath = (image) => `/images/posts/${image}`;

const extractUniqueId = (node) => {
  return node.children[0].value.toLowerCase().replace(/ /g, "-").trim();
};

const HeadComponent = ({ title, image, slug, description }) => {
  return (
    <React.Fragment>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`www.thulioph.com/blog/${slug}`} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:description" content={description} />
    </React.Fragment>
  );
};

const Post = ({ previousPost, currentPost, nextPost }) => {
  const { title, date, markdown, image, imageLink, slug } = currentPost;

  const imagePath = getImagePath(image);
  const formattedDate = new Date(date).toDateString();

  return (
    <React.Fragment>
      <HeadComponent
        title={title}
        image={imagePath}
        slug={slug}
        description={title}
      />

      <AppHeader>Blog | {title}</AppHeader>
      <AppNav />

      <main className="page about-page blog-page">
        <article>
          <section className="article-intro">
            <h1>{title}</h1>
            <time dateTime={formattedDate}>{formattedDate}</time>

            {image && (
              <React.Fragment>
                <Image
                  layout="responsive"
                  src={imagePath}
                  width={800}
                  height={450}
                />

                {imageLink && (
                  <figcaption>
                    <a href={imageLink} target="_blank" rel="noreferrer">
                      Photo: Unsplash
                    </a>
                  </figcaption>
                )}
              </React.Fragment>
            )}
          </section>

          <section className="article-content">
            <ReactMarkdown
              linkTarget="_blank"
              rehypePlugins={[rehypeHighlight]}
              components={{
                h2: ({ node }) => {
                  const uniqueId = extractUniqueId(node);

                  return (
                    <h2 id={uniqueId} className="title-link">
                      <span>
                        <a href={`#${uniqueId}`}>{node.children[0].value}</a>
                      </span>
                    </h2>
                  );
                },
              }}
            >
              {markdown}
            </ReactMarkdown>
          </section>
        </article>

        <section className="more-posts">
          <h2 className="title-link">More posts:</h2>

          <aside className="more-posts-container">
            {previousPost && (
              <Link href={previousPost?.slug} title={previousPost?.title}>
                {previousPost?.title}
              </Link>
            )}

            {nextPost && (
              <Link href={nextPost?.slug} title={nextPost?.title}>
                {nextPost?.title}
              </Link>
            )}
          </aside>
        </section>
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

  const idxOfCurrentPost = posts.findIndex(
    ({ slug }) => slug === currentPost.slug
  );

  const previousPost = posts[idxOfCurrentPost - 1] || null;
  const nextPost = posts[idxOfCurrentPost + 1] || null;

  return {
    props: {
      previousPost,
      currentPost,
      nextPost,
    },
  };
};

export default Post;
