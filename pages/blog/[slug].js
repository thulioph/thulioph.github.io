import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { DiscussionEmbed } from "disqus-react";

import AppHeader from "@/components/header";
import AppNav from "@/components/navbar";
import BlogLayout from "@/components/blog-layout";
import { getPosts } from "@/services/index";

const getImagePath = (image) => `/images/posts/${image}`;

const getTextContent = (node) => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (node.value) return node.value;
  if (node.children) {
    return node.children.map(getTextContent).join('');
  }
  return '';
};

const extractUniqueId = (node) => {
  const text = getTextContent(node);
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "-")
    .trim();
};

const extractHeadings = (markdown) => {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-").trim();
    headings.push({ level, text, id });
  }

  return headings;
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

const Post = ({ previousPost, currentPost, nextPost, headings }) => {
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

      <AppHeader>{title}</AppHeader>
      <AppNav />

      <BlogLayout headings={headings}>
        <main className="page">
          <article className="blog-page">
            <section className="article-intro">
              <h1>{title}</h1>
              <time dateTime={formattedDate}>{formattedDate}</time>

              {image && (
                <React.Fragment>
                  <Image
                    src={imagePath}
                    alt={title}
                    width={800}
                    height={450}
                    style={{ width: "100%", height: "auto" }}
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
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h2: ({ node, children }) => {
                    const uniqueId = extractUniqueId(node);

                    return (
                      <h2 id={uniqueId} className="title-link">
                        <span>
                          <a href={`#${uniqueId}`}>{children}</a>
                        </span>
                      </h2>
                    );
                  },
                  h3: ({ node, children }) => {
                    const uniqueId = extractUniqueId(node);

                    return (
                      <h3 id={uniqueId}>
                        {children}
                      </h3>
                    );
                  },
                  img: ({ src, alt }) => (
                    <div className="img-note">
                      <img src={src} alt={alt} />
                    </div>
                  ),
                  hr: () => (
                    <div className="divider">
                      <span>{"///"}</span>
                    </div>
                  ),
                }}
              >
                {markdown}
              </ReactMarkdown>
            </section>
          </article>

          <nav className="post-navigation">
            <p className="post-navigation-header">Continue reading</p>

            <div className="post-navigation-grid">
              {previousPost && (
                <Link href={`/blog/${previousPost.slug}`} className="post-nav-item">
                  <span className="post-nav-label">
                    <span>←</span> Previous
                  </span>
                  <span className="post-nav-title">{previousPost.title}</span>
                </Link>
              )}

              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="post-nav-item post-nav-item--next">
                  <span className="post-nav-label">
                    Next <span>→</span>
                  </span>
                  <span className="post-nav-title">{nextPost.title}</span>
                </Link>
              )}
            </div>
          </nav>

          <section className="posts-comments">
            <DiscussionEmbed
              shortname="thulioph"
              config={{
                url: `https://www.thulioph.com/blog/${slug}`,
                identifier: slug,
                title: title,
                language: "en_US",
              }}
            />
          </section>
        </main>
      </BlogLayout>
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

  const headings = extractHeadings(currentPost.markdown);

  return {
    props: {
      previousPost,
      currentPost,
      nextPost,
      headings,
    },
  };
};

export default Post;
