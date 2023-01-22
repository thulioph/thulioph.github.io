import React from "react";
import Link from "next/link";

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

export default PostCard;
