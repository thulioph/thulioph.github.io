import React from "react";
import Link from "next/link";

import AppHeader from "@/components/header";
import Hero from "@/components/hero";
import AppNav from "@/components/navbar";
import { getPosts } from "@/services/index";
import image from "@/public/blog.jpg";

const PostCard = ({ date, image, slug, children }) => {
  return (
    <aside className="post-card">
      {image && (
        <img className="post-card-image" src={`/images/posts/${image}`} />
      )}

      <h3 className="post-card-title">{children}</h3>

      <time className="post-card-time" dateTime={date}>
        {date}
      </time>

      <Link className="post-card-link" href={`/blog/${slug}`}>
        read
      </Link>
    </aside>
  );
};

const Blog = ({ posts }) => {
  return (
    <React.Fragment>
      <AppHeader>Blog</AppHeader>
      <AppNav />

      <main className="page">
        <Hero image={image}>Blog</Hero>

        <section className="internal-grid">
          <ul className="list-items-card">
            {posts.map((el) => (
              <li key={el.slug}>
                <PostCard date={el.date} image={el.image} slug={el.slug}>
                  {el.title}
                </PostCard>
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
      posts: posts
        .map((el) => ({ ...el, date: new Date(el.date).toDateString() }))
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ),
    },
  };
}
